"use strict";

var CJammer = function () {
    //--------------------------------------------------------------------------
    // Private members
    //--------------------------------------------------------------------------

    // Currently playing notes.
    var MAX_POLYPHONY = 8;
    var mPlayingNotes = [];

    // Current instrument.
    var mInstr;

    // Current row length (i.e. BPM).
    var mRowLen;

    // Effect state.
    var mFXState;

    // Delay buffers.
    var MAX_DELAY = 131072;   // Must be a power of 2.
    var mDlyLeft, mDlyRight;

    // Web Audio context.
    var mAudioContext;
    var mScriptNode;
    var mSampleRate;
    var mRateScale;

    //--------------------------------------------------------------------------
    // Sound synthesis engine.
    //--------------------------------------------------------------------------

    // Oscillators.
    var osc_sin = function (value) {
        return Math.sin(value * 6.283184);
    };

    var osc_saw = function (value) {
        return 2 * (value % 1) - 1;
    };

    var osc_square = function (value) {
        return (value % 1) < 0.5 ? 1 : -1;
    };

    var osc_tri = function (value) {
        var v2 = (value % 1) * 4;
        if (v2 < 2) return v2 - 1;
        return 3 - v2;
    };

    var getnotefreq = function (n) {
        return (174.614115728 / mSampleRate) * Math.pow(2, (n - 128) / 12);
    };

    // Array of oscillator functions.
    var mOscillators = [
        osc_sin,
        osc_square,
        osc_saw,
        osc_tri
    ];

    // Fill the buffer with more audio, and advance state accordingly.
    var generateTimeSlice = function (leftBuf, rightBuf) {
        var numSamples = rightBuf.length;

        // Local variables
        var i, j, k, b, p, row, col, n, cp,
            t, lfor, e, x, rsample, rowStartSample, f, da;

        // Clear buffers
        for (k = 0; k < numSamples; ++k) {
            leftBuf[k] = 0;
            rightBuf[k] = 0;
        }

        // Generate active notes.
        for (i = 0; i < MAX_POLYPHONY; ++i) {
            var note = mPlayingNotes[i];
            if (note != undefined) {
                var osc1 = mOscillators[note.instr[0]],
                    o1vol = note.instr[1],
                    o1xenv = note.instr[3],
                    osc2 = mOscillators[note.instr[4]],
                    o2vol = note.instr[5],
                    o2xenv = note.instr[8],
                    noiseVol = note.instr[9],
                    attack = Math.round(note.instr[10] * note.instr[10] * 4 * mRateScale),
                    sustain = Math.round(note.instr[11] * note.instr[11] * 4 * mRateScale),
                    release = Math.round(note.instr[12] * note.instr[12] * 4 * mRateScale),
                    releaseInv = 1 / release;

                // Note frequencies for the oscillators.
                var o1f = note.o1f, o2f = note.o2f;

                // Current oscillator state.
                var o1t = note.o1t, o2t = note.o2t;

                // Generate note.
                var samplesLeft = attack + sustain + release - note.env;
                if (samplesLeft <= numSamples) {
                    // End of note.
                    mPlayingNotes[i] = undefined;
                } else {
                    samplesLeft = numSamples;
                }

                for (j = note.env, k = 0; k < samplesLeft; j++, k++) {
                    // Envelope
                    e = 1;

                    if (j < attack) {
                        e = j / attack;
                    } else if (j >= attack + sustain) {
                        e -= (j - attack - sustain) * releaseInv;
                    }

                    // Oscillator 1
                    t = o1f;

                    if (o1xenv) {
                        t *= e * e;
                    }

                    o1t += t;
                    rsample = osc1(o1t) * o1vol;

                    // Oscillator 2
                    t = o2f;

                    if (o2xenv) {
                        t *= e * e;
                    }
                    o2t += t;
                    rsample += osc2(o2t) * o2vol;

                    // Noise oscillator
                    if (noiseVol) {
                        rsample += (2 * Math.random() - 1) * noiseVol;
                    }

                    // Add to (mono) channel buffer
                    rightBuf[k] += 0.002441481 * rsample * e;
                }

                // Save state.
                note.env = j;
                note.o1t = o1t;
                note.o2t = o2t;
            }
        }

        // And the effects...
        var pos = mFXState.pos,
            low = mFXState.low,
            band = mFXState.band,
            filterActive = mFXState.filterActive,
            dlyPos = mFXState.dlyPos;

        var lsample, high, dlyRead, dlyMask = MAX_DELAY - 1;

        // Put performance critical instrument properties in local variables
        var oscLFO = mOscillators[mInstr[13]],
            lfoAmt = mInstr[14] / 512,
            lfoFreq = Math.pow(2, mInstr[15] - 9) / mRowLen,
            fxLFO = mInstr[16],
            fxFilter = mInstr[17],
            fxFreq = mInstr[18] * 43.23529 * 3.141592 / mSampleRate,
            q = 1 - mInstr[19] / 255,
            dist = mInstr[20] * 1e-5 * 32767,
            drive = mInstr[21] / 32,
            panAmt = mInstr[22] / 512,
            panFreq = 6.283184 * Math.pow(2, mInstr[23] - 9) / mRowLen,
            dlyAmt = mInstr[24] / 255,
            dly = (mInstr[25] * mRowLen) >> 1;

        // Limit the delay to the delay buffer size.
        if (dly >= MAX_DELAY) {
            dly = MAX_DELAY - 1;
        }

        // Perform effects for this time slice
        for (j = 0; j < numSamples; j++) {
            k = (pos + j) * 2;

            // Dry mono-sample.
            rsample = rightBuf[j];

            // We only do effects if we have some sound input.
            if (rsample || filterActive) {
                // State variable filter.
                f = fxFreq;
                if (fxLFO) {
                    f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;
                }
                f = 1.5 * Math.sin(f);
                low += f * band;
                high = q * (rsample - band) - low;
                band += f * high;
                rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;

                // Distortion.
                if (dist) {
                    rsample *= dist;
                    rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample * .25) : -1 : 1;
                    rsample /= dist;
                }

                // Drive.
                rsample *= drive;

                // Is the filter active (i.e. still audiable)?
                filterActive = rsample * rsample > 1e-5;

                // Panning.
                t = Math.sin(panFreq * k) * panAmt + 0.5;
                lsample = rsample * (1 - t);
                rsample *= t;
            } else {
                lsample = 0;
            }

            // Delay is always done, since it does not need sound input.
            dlyRead = (dlyPos - dly) & dlyMask;
            lsample += mDlyRight[dlyRead] * dlyAmt;
            rsample += mDlyLeft[dlyRead] * dlyAmt;
            mDlyLeft[dlyPos] = lsample;
            mDlyRight[dlyPos] = rsample;
            dlyPos = (dlyPos + 1) & dlyMask;

            // Store wet stereo sample.
            leftBuf[j] = lsample;
            rightBuf[j] = rsample;
        }

        // Update effect sample position.
        pos += numSamples;

        // Prevent rounding problems...
        while (pos > mRowLen * 2048) {
            pos -= mRowLen * 2048;
        }

        // Store filter state.
        mFXState.pos = pos;
        mFXState.low = low;
        mFXState.band = band;
        mFXState.filterActive = filterActive;
        mFXState.dlyPos = dlyPos;
    };

    //--------------------------------------------------------------------------
    // Public interface.
    //--------------------------------------------------------------------------

    this.start = function () {
        // Create an audio context.
        if (window.AudioContext) {
            mAudioContext = new AudioContext();
        } else if (window.webkitAudioContext) {
            mAudioContext = new webkitAudioContext();
            mAudioContext.createScriptProcessor = mAudioContext.createJavaScriptNode;
        } else {
            mAudioContext = undefined;
            return;
        }

        // Get actual sample rate (SoundBox is hard-coded to 44100 samples/s).
        mSampleRate = mAudioContext.sampleRate;
        mRateScale = mSampleRate / 44100;

        // Clear state.
        mFXState = {
            pos:          0,
            low:          0,
            band:         0,
            filterActive: false,
            dlyPos:       0
        };

        // Create delay buffers (lengths must be equal and a power of 2).
        mDlyLeft = new Float32Array(MAX_DELAY);
        mDlyRight = new Float32Array(MAX_DELAY);

        // Create a script processor node with no inputs and one stereo output.
        mScriptNode = mAudioContext.createScriptProcessor(2048, 0, 2);

        mScriptNode.onaudioprocess = function (event) {
            var leftBuf = event.outputBuffer.getChannelData(0);
            var rightBuf = event.outputBuffer.getChannelData(1);
            generateTimeSlice(leftBuf, rightBuf);
        };

        // Connect the script node to the output.
        mScriptNode.connect(mAudioContext.destination);
    };

    this.stop = function () {
        // TODO(m): Implement me!
    };

    this.updateInstr = function (instr) {
        // Copy instrument description.
        mInstr = [];

        for (var i = 0; i < instr.length; ++i) {
            mInstr.push(instr[i]);
        }
    };

    this.updateRowLen = function (rowLen) {
        mRowLen = Math.round(rowLen * mRateScale);
    };

    this.addNote = function (n) {
        var t = (new Date()).getTime(),
            i;

        // Create a new note object.
        var note = {
            startT: t,
            env:    0,
            o1t:    0,
            o2t:    0,
            o1f:    getnotefreq(n + mInstr[2] - 128),
            o2f:    getnotefreq(n + mInstr[6] - 128) * (1 + 0.0008 * mInstr[7]),
            instr:  new Array(13)
        };

        // Copy (snapshot) the oscillator/env part of the current instrument.
        for (i = 0; i < 13; ++i) {
            note.instr[i] = mInstr[i];
        }

        // Find an empty channel, or replace the oldest note.
        var oldestIdx = 0;
        var oldestDt = -100;

        for (i = 0; i < MAX_POLYPHONY; ++i) {
            // If the channel is currently free - use it.
            if (mPlayingNotes[i] == undefined) {
                mPlayingNotes[i] = note;
                return;
            }

            // Check if this channel has the oldest playing note.
            var dt = t - mPlayingNotes[i].startT;

            if (dt > oldestDt) {
                oldestIdx = i;
                oldestDt = dt;
            }
        }

        // All channels are playing - replace the oldest one.
        mPlayingNotes[oldestIdx] = note;
    };

};

