"use strict";

var CSong = {
    instProps: {
        OSC1_WAVEFORM: 0,
        OSC1_VOL:      1,
        OSC1_SEMI:     2,
        OSC1_XENV:     3,

        OSC2_WAVEFORM: 4,
        OSC2_VOL:      5,
        OSC2_SEMI:     6,
        OSC2_DETUNE:   7,
        OSC2_XENV:     8,

        NOISE_VOL: 9,

        ENV_ATTACK:  10,
        ENV_SUSTAIN: 11,
        ENV_RELEASE: 12,

        LFO_WAVEFORM: 13,
        LFO_AMT:      14,
        LFO_FREQ:     15,
        LFO_FX_FREQ:  16,

        FX_FILTER:     17,
        FX_FREQ:       18,
        FX_RESONANCE:  19,
        FX_DIST:       20,
        FX_DRIVE:      21,
        FX_PAN_AMT:    22,
        FX_PAN_FREQ:   23,
        FX_DELAY_AMT:  24,
        FX_DELAY_TIME: 25
    },

    MAX_SONG_ROWS: 128,
    MAX_PATTERNS:  36,

    makeURLSongData: function (baseURL, data) {
        var str = btoa(data), str2 = "";

        for (var i = 0; i < str.length; ++i) {
            var chr = str[i];

            if (chr === "+") {
                chr = "-";
            }

            if (chr === "/") {
                chr = "_";
            }

            if (chr === "=") {
                chr = "";
            }

            str2 += chr;
        }

        return baseURL + "?data=" + str2;
    },

    calcSamplesPerRow: function (bpm) {
        return Math.round((60 * 44100 / 4) / bpm);
    },

    songToBin : function (song) {
        var bin = new CBinWriter();

        // Row length (i.e. song speed)
        bin.putULONG(song.rowLen);

        // Last pattern to play
        bin.putUBYTE(song.endPattern - 2);

        // Rows per pattern
        bin.putUBYTE(song.patternLen);

        // All 8 instruments
        var i, j, k, instr, col;

        for (i = 0; i < 8; i++) {
            instr = song.songData[i];

            // Oscillator 1
            bin.putUBYTE(instr.i[this.instProps.OSC1_WAVEFORM]);
            bin.putUBYTE(instr.i[this.instProps.OSC1_VOL]);
            bin.putUBYTE(instr.i[this.instProps.OSC1_SEMI]);
            bin.putUBYTE(instr.i[this.instProps.OSC1_XENV]);

            // Oscillator 2
            bin.putUBYTE(instr.i[this.instProps.OSC2_WAVEFORM]);
            bin.putUBYTE(instr.i[this.instProps.OSC2_VOL]);
            bin.putUBYTE(instr.i[this.instProps.OSC2_SEMI]);
            bin.putUBYTE(instr.i[this.instProps.OSC2_DETUNE]);
            bin.putUBYTE(instr.i[this.instProps.OSC2_XENV]);

            // Noise oscillator
            bin.putUBYTE(instr.i[this.instProps.NOISE_VOL]);

            // Envelope
            bin.putUBYTE(instr.i[this.instProps.ENV_ATTACK]);
            bin.putUBYTE(instr.i[this.instProps.ENV_SUSTAIN]);
            bin.putUBYTE(instr.i[this.instProps.ENV_RELEASE]);

            // LFO
            bin.putUBYTE(instr.i[this.instProps.LFO_WAVEFORM]);
            bin.putUBYTE(instr.i[this.instProps.LFO_AMT]);
            bin.putUBYTE(instr.i[this.instProps.LFO_FREQ]);
            bin.putUBYTE(instr.i[this.instProps.LFO_FX_FREQ]);

            // Effects
            bin.putUBYTE(instr.i[this.instProps.FX_FILTER]);
            bin.putUBYTE(instr.i[this.instProps.FX_FREQ]);
            bin.putUBYTE(instr.i[this.instProps.FX_RESONANCE]);
            bin.putUBYTE(instr.i[this.instProps.FX_DIST]);
            bin.putUBYTE(instr.i[this.instProps.FX_DRIVE]);
            bin.putUBYTE(instr.i[this.instProps.FX_PAN_AMT]);
            bin.putUBYTE(instr.i[this.instProps.FX_PAN_FREQ]);
            bin.putUBYTE(instr.i[this.instProps.FX_DELAY_AMT]);
            bin.putUBYTE(instr.i[this.instProps.FX_DELAY_TIME]);

            // Patterns
            for (j = 0; j < this.MAX_SONG_ROWS; j++) {
                bin.putUBYTE(instr.p[j]);
            }

            // Columns
            for (j = 0; j < this.MAX_PATTERNS; j++) {
                col = instr.c[j];

                for (k = 0; k < song.patternLen * 4; k++) {
                    bin.putUBYTE(col.n[k]);
                }

                for (k = 0; k < song.patternLen * 2; k++) {
                    bin.putUBYTE(col.f[k]);
                }
            }
        }

        // Pack the song data
        // FIXME: To avoid bugs, we try different compression methods here until we
        // find something that works (this should not be necessary).
        var unpackedData = bin.getData(), packedData, testData, compressionMethod = 0;

        for (i = 9; i > 0; i--) {
            packedData = RawDeflate.deflate(unpackedData, i);
            testData = RawDeflate.inflate(packedData);

            if (unpackedData === testData) {
                compressionMethod = 2;
                break;
            }
        }

        if (compressionMethod == 0) {
            packedData = rle_encode(bin.getData());
            testData = rle_decode(packedData);

            if (unpackedData === testData) {
                compressionMethod = 1;
            } else {
                packedData = unpackedData;
            }
        }

        // Create a new binary stream - this is the actual file
        bin = new CBinWriter();

        // Signature ("SBox")
        bin.putULONG(2020557395);

        // Format version
        bin.putUBYTE(10);

        // Compression method
        //  0: none
        //  1: RLE
        //  2: DEFLATE
        bin.putUBYTE(compressionMethod);

        // Append packed data
        bin.append(packedData);

        return bin.getData();
    },

    binToSong: function (d) {
        // Try to parse the binary data as a SoundBox song
        var song = this.soundboxBinToSong(d);

        // Try to parse the binary data as a Sonant song
        if (!song) {
            song = this.sonantBinToSong(d);
        }

        // If we couldn't parse the song, just make a clean new song
        if (!song) {
            alert("Song format not recognized.");
            return;
        }

        return song;
    },

    sonantBinToSong: function (d) {
        // Check if this is a sonant song (correct length & reasonable end pattern)
        if (d.length != 3333) {
            return undefined;
        }

        if ((d.charCodeAt(3332) & 255) > 48) {
            return undefined;
        }

        var bin  = new CBinParser(d),
            song = {};

        // Row length
        song.rowLen = bin.getULONG();

        // Number of rows per pattern
        song.patternLen = 32;

        // All 8 instruments
        song.songData = [];
        var i, j, k, instr, col, master;

        for (i = 0; i < 8; i++) {
            instr = {};
            instr.i = [];

            // Oscillator 1
            instr.i[this.instProps.OSC1_SEMI] = 12 * (bin.getUBYTE() - 8) + 128;
            instr.i[this.instProps.OSC1_SEMI] += bin.getUBYTE();
            bin.getUBYTE(); // Skip (detune)
            instr.i[this.instProps.OSC1_XENV] = bin.getUBYTE();
            instr.i[this.instProps.OSC1_VOL] = bin.getUBYTE();
            instr.i[this.instProps.OSC1_WAVEFORM] = bin.getUBYTE();

            // Oscillator 2
            instr.i[this.instProps.OSC2_SEMI] = 12 * (bin.getUBYTE() - 8) + 128;
            instr.i[this.instProps.OSC2_SEMI] += bin.getUBYTE();
            instr.i[this.instProps.OSC2_DETUNE] = bin.getUBYTE();
            instr.i[this.instProps.OSC2_XENV] = bin.getUBYTE();
            instr.i[this.instProps.OSC2_VOL] = bin.getUBYTE();
            instr.i[this.instProps.OSC2_WAVEFORM] = bin.getUBYTE();

            // Noise oscillator
            instr.i[this.instProps.NOISE_VOL] = bin.getUBYTE();
            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!

            // Envelope
            instr.i[this.instProps.ENV_ATTACK] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            instr.i[this.instProps.ENV_SUSTAIN] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            instr.i[this.instProps.ENV_RELEASE] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            master = bin.getUBYTE(); // env_master

            // Effects
            instr.i[this.instProps.FX_FILTER] = bin.getUBYTE();
            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!
            instr.i[this.instProps.FX_FREQ] = Math.round(bin.getFLOAT() / 43.23529);
            instr.i[this.instProps.FX_RESONANCE] = 255 - bin.getUBYTE();
            instr.i[this.instProps.FX_DELAY_TIME] = bin.getUBYTE();
            instr.i[this.instProps.FX_DELAY_AMT] = bin.getUBYTE();
            instr.i[this.instProps.FX_PAN_FREQ] = bin.getUBYTE();
            instr.i[this.instProps.FX_PAN_AMT] = bin.getUBYTE();
            instr.i[this.instProps.FX_DIST] = 0;
            instr.i[this.instProps.FX_DRIVE] = 32;

            // LFO
            bin.getUBYTE(); // Skip! (lfo_osc1_freq)
            instr.i[this.instProps.LFO_FX_FREQ] = bin.getUBYTE();
            instr.i[this.instProps.LFO_FREQ] = bin.getUBYTE();
            instr.i[this.instProps.LFO_AMT] = bin.getUBYTE();
            instr.i[this.instProps.LFO_WAVEFORM] = bin.getUBYTE();

            // Patterns
            instr.p = [];

            for (j = 0; j < 48; j++) {
                instr.p[j] = bin.getUBYTE();
            }

            for (j = 48; j < this.MAX_SONG_ROWS; j++) {
                instr.p[j] = 0;
            }

            // Columns
            instr.c = [];

            for (j = 0; j < 10; j++) {
                col = {};
                col.n = [];

                for (k = 0; k < 32; k++) {
                    col.n[k] = bin.getUBYTE();
                    col.n[k + 32] = 0;
                    col.n[k + 64] = 0;
                    col.n[k + 96] = 0;
                }

                col.f = [];

                for (k = 0; k < 32 * 2; k++) {
                    col.f[k] = 0;
                }

                instr.c[j] = col;
            }

            for (j = 10; j < this.MAX_PATTERNS; j++) {
                col = {};
                col.n = [];

                for (k = 0; k < 32 * 4; k++) {
                    col.n[k] = 0;
                }

                col.f = [];

                for (k = 0; k < 32 * 2; k++) {
                    col.f[k] = 0;
                }

                instr.c[j] = col;
            }

            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!

            // Fixup conversions
            if (instr.i[this.instProps.FX_FILTER] < 1 || instr.i[this.instProps.FX_FILTER] > 3) {
                instr.i[this.instProps.FX_FILTER] = 2;
                instr.i[this.instProps.FX_FREQ] = 255; // 11025;
            }

            instr.i[this.instProps.OSC1_VOL] *= master / 255;
            instr.i[this.instProps.OSC2_VOL] *= master / 255;
            instr.i[this.instProps.NOISE_VOL] *= master / 255;

            if (instr.i[this.instProps.OSC1_WAVEFORM] == 2) {
                instr.i[this.instProps.OSC1_VOL] /= 2;
            }

            if (instr.i[this.instProps.OSC2_WAVEFORM] == 2) {
                instr.i[this.instProps.OSC2_VOL] /= 2;
            }

            if (instr.i[this.instProps.LFO_WAVEFORM] == 2) {
                instr.i[this.instProps.LFO_AMT] /= 2;
            }

            instr.i[this.instProps.OSC1_VOL] = Math.round(instr.i[this.instProps.OSC1_VOL]);
            instr.i[this.instProps.OSC2_VOL] = Math.round(instr.i[this.instProps.OSC2_VOL]);
            instr.i[this.instProps.NOISE_VOL] = Math.round(instr.i[this.instProps.NOISE_VOL]);
            instr.i[this.instProps.LFO_AMT] = Math.round(instr.i[this.instProps.LFO_AMT]);

            song.songData[i] = instr;
        }

        // Last pattern to play
        song.endPattern = bin.getUBYTE() + 2;

        return song;
    },

    soundboxBinToSong: function (d) {
        var bin  = new CBinParser(d),
            song = {};

        // Signature
        var signature = bin.getULONG();

        // Format version
        var version = bin.getUBYTE();

        // Check if this is a SoundBox song
        if (signature != 2020557395 || (version < 1 || version > 10)) {
            return undefined;
        }

        if (version >= 8) {
            //TODO: CONST
            // Get compression method
            //  0: none
            //  1: RLE
            //  2: DEFLATE
            var compressionMethod = bin.getUBYTE();

            // Unpack song data
            var packedData = bin.getTail(), unpackedData;

            switch (compressionMethod) {
                default:
                case 0:
                    unpackedData = packedData;
                    break;
                case 1:
                    unpackedData = rle_decode(packedData);
                    break;
                case 2:
                    unpackedData = RawDeflate.inflate(packedData);
                    break;
            }

            bin = new CBinParser(unpackedData);
        }

        // Row length
        song.rowLen = bin.getULONG();

        // Last pattern to play
        song.endPattern = bin.getUBYTE() + 2;

        // Number of rows per pattern
        if (version >= 10) {
            song.patternLen = bin.getUBYTE();
        } else {
            song.patternLen = 32;
        }

        // All 8 instruments
        song.songData = [];

        var i, j, k, instr, col;

        for (i = 0; i < 8; i++) {
            instr = {};
            instr.i = [];

            // Oscillator 1
            if (version < 6) {
                instr.i[this.instProps.OSC1_SEMI] = bin.getUBYTE();
                instr.i[this.instProps.OSC1_XENV] = bin.getUBYTE();
                instr.i[this.instProps.OSC1_VOL] = bin.getUBYTE();
                instr.i[this.instProps.OSC1_WAVEFORM] = bin.getUBYTE();
            } else {
                instr.i[this.instProps.OSC1_WAVEFORM] = bin.getUBYTE();
                instr.i[this.instProps.OSC1_VOL] = bin.getUBYTE();
                instr.i[this.instProps.OSC1_SEMI] = bin.getUBYTE();
                instr.i[this.instProps.OSC1_XENV] = bin.getUBYTE();
            }

            // Oscillator 2
            if (version < 6) {
                instr.i[this.instProps.OSC2_SEMI] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_DETUNE] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_XENV] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_VOL] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_WAVEFORM] = bin.getUBYTE();
            } else {
                instr.i[this.instProps.OSC2_WAVEFORM] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_VOL] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_SEMI] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_DETUNE] = bin.getUBYTE();
                instr.i[this.instProps.OSC2_XENV] = bin.getUBYTE();
            }

            // Noise oscillator
            instr.i[this.instProps.NOISE_VOL] = bin.getUBYTE();

            // Envelope
            if (version < 5) {
                instr.i[this.instProps.ENV_ATTACK] = Math.round(Math.sqrt(bin.getULONG()) / 2);
                instr.i[this.instProps.ENV_SUSTAIN] = Math.round(Math.sqrt(bin.getULONG()) / 2);
                instr.i[this.instProps.ENV_RELEASE] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            } else {
                instr.i[this.instProps.ENV_ATTACK] = bin.getUBYTE();
                instr.i[this.instProps.ENV_SUSTAIN] = bin.getUBYTE();
                instr.i[this.instProps.ENV_RELEASE] = bin.getUBYTE();
            }

            if (version < 6) {
                // Effects
                instr.i[this.instProps.FX_FILTER] = bin.getUBYTE();

                if (version < 5) {
                    instr.i[this.instProps.FX_FREQ] = Math.round(bin.getUSHORT() / 43.23529);
                } else {
                    instr.i[this.instProps.FX_FREQ] = bin.getUBYTE();
                }

                instr.i[this.instProps.FX_RESONANCE] = bin.getUBYTE();

                instr.i[this.instProps.FX_DELAY_TIME] = bin.getUBYTE();
                instr.i[this.instProps.FX_DELAY_AMT] = bin.getUBYTE();
                instr.i[this.instProps.FX_PAN_FREQ] = bin.getUBYTE();
                instr.i[this.instProps.FX_PAN_AMT] = bin.getUBYTE();
                instr.i[this.instProps.FX_DIST] = bin.getUBYTE();
                instr.i[this.instProps.FX_DRIVE] = bin.getUBYTE();

                // LFO
                instr.i[this.instProps.LFO_FX_FREQ] = bin.getUBYTE();
                instr.i[this.instProps.LFO_FREQ] = bin.getUBYTE();
                instr.i[this.instProps.LFO_AMT] = bin.getUBYTE();
                instr.i[this.instProps.LFO_WAVEFORM] = bin.getUBYTE();
            }
            else {
                // LFO
                instr.i[this.instProps.LFO_WAVEFORM] = bin.getUBYTE();
                instr.i[this.instProps.LFO_AMT] = bin.getUBYTE();
                instr.i[this.instProps.LFO_FREQ] = bin.getUBYTE();
                instr.i[this.instProps.LFO_FX_FREQ] = bin.getUBYTE();

                // Effects
                instr.i[this.instProps.FX_FILTER] = bin.getUBYTE();
                instr.i[this.instProps.FX_FREQ] = bin.getUBYTE();
                instr.i[this.instProps.FX_RESONANCE] = bin.getUBYTE();
                instr.i[this.instProps.FX_DIST] = bin.getUBYTE();
                instr.i[this.instProps.FX_DRIVE] = bin.getUBYTE();
                instr.i[this.instProps.FX_PAN_AMT] = bin.getUBYTE();
                instr.i[this.instProps.FX_PAN_FREQ] = bin.getUBYTE();
                instr.i[this.instProps.FX_DELAY_AMT] = bin.getUBYTE();
                instr.i[this.instProps.FX_DELAY_TIME] = bin.getUBYTE();
            }

            // Patterns
            var song_rows = version < 9 ? 48 : this.MAX_SONG_ROWS;
            instr.p = [];

            for (j = 0; j < song_rows; j++) {
                instr.p[j] = bin.getUBYTE();
            }

            for (j = song_rows; j < this.MAX_SONG_ROWS; j++) {
                instr.p[j] = 0;
            }

            // Columns
            var num_patterns = version < 9 ? 10 : this.MAX_PATTERNS;

            instr.c = [];

            for (j = 0; j < num_patterns; j++) {
                col = {};
                col.n = [];

                if (version == 1) {
                    for (k = 0; k < song.patternLen; k++) {
                        col.n[k] = bin.getUBYTE();
                        col.n[k + song.patternLen] = 0;
                        col.n[k + 2 * song.patternLen] = 0;
                        col.n[k + 3 * song.patternLen] = 0;
                    }
                } else {
                    for (k = 0; k < song.patternLen * 4; k++) {
                        col.n[k] = bin.getUBYTE();
                    }
                }

                col.f = [];

                if (version < 4) {
                    for (k = 0; k < song.patternLen * 2; k++) {
                        col.f[k] = 0;
                    }
                } else {
                    for (k = 0; k < song.patternLen * 2; k++) {
                        col.f[k] = bin.getUBYTE();
                    }
                }

                instr.c[j] = col;
            }

            for (j = num_patterns; j < this.MAX_PATTERNS; j++) {
                col = {};
                col.n = [];

                for (k = 0; k < song.patternLen * 4; k++) {
                    col.n[k] = 0;
                }

                col.f = [];

                for (k = 0; k < song.patternLen * 2; k++) {
                    col.f[k] = 0;
                }

                instr.c[j] = col;
            }

            // Fixup conversions
            if (version < 3) {
                if (instr.i[this.instProps.OSC1_WAVEFORM] == 2) {
                    instr.i[this.instProps.OSC1_VOL] = Math.round(instr.i[this.instProps.OSC1_VOL] / 2);
                }

                if (instr.i[this.instProps.OSC2_WAVEFORM] == 2) {
                    instr.i[this.instProps.OSC2_VOL] = Math.round(instr.i[this.instProps.OSC2_VOL] / 2);
                }

                if (instr.i[this.instProps.LFO_WAVEFORM] == 2) {
                    instr.i[this.instProps.LFO_AMT] = Math.round(instr.i[this.instProps.LFO_AMT] / 2);
                }

                instr.i[this.instProps.FX_DRIVE] = instr.i[this.instProps.FX_DRIVE] < 224 ? instr.i[this.instProps.FX_DRIVE] + 32 : 255;
            }

            if (version < 7) {
                instr.i[this.instProps.FX_RESONANCE] = 255 - instr.i[this.instProps.FX_RESONANCE];
            }

            song.songData[i] = instr;
        }

        return song;
    }
};