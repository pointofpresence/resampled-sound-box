/*
 Project Name: JS Midi Parser
 Version: 1.0
 Author: colxi
 Author URI: http://www.colxi.info/
 Description: JSMIDIparser library reads .MID binary files, and outputs binary
 data as a readable JS object.

 Improved by pointofpresence

 Usage: call JSMIDIParser.IO(fileInputElement,callbackFunction) function, setting the
 Input File HTML element that will handle the file.mid opening, and callback function
 that will receive the resulting Object.

 Output Object Specs:
 MIDIObject{
 formatType: 0|1|2,
 timeDivision: (int),
 tracks: (int),
 track: Array[
 [0]: Object{
 event: Array[
 [0] : Object{
 data: (string),
 deltaTime: (int),
 metaType: (int),
 type: (int),
 },
 [1] : Object{...}
 [2] : Object{...}
 ...
 ]
 },
 [1] : Object{...}
 [2] : Object{...}
 ...
 ]
 }

 Data from Event 12 of Track 2 could be easily readed with:
 MIDIObject.track[2].event[12].data;

 MIDI Binary Encoding Specifications in http://www.sonicspot.com/guide/midifiles.html
 */
/*
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 */

JSMIDIParser = {
    // debug (bool), when enabled will log in console unimplemented events warnings and
    // general and errors.
    debug: false,

    // IO() should be called in order attach a listener to the INPUT HTML element
    // that will provide the binary data automating the conversion, and returning
    // the structured data to the provided callback function.
    IO: function (_fileElement, _callback) {
        if (!window.File || !window.FileReader) { // check browser compatibility
            if (this.debug) {
                console.log("The File APIs are not fully supported in this browser.");
            }

            //noinspection JSConstructorReturnsPrimitive
            return false;
        }

        // set the file open event handler
        document.getElementById(_fileElement).onchange = (function (_t) {
            return function (InputEvt) {
                if (!InputEvt.target.files.length) {
                    return false;
                }

                var reader = new FileReader(); // prepare the file Reader

                reader.readAsArrayBuffer(InputEvt.target.files[0]); // read the binary
                                                                    // data

                reader.onload = (function (_t) { // when ready...
                    return function (e) {
                        // encode data with Uint8Array and call the parser
                        _callback(_t.parse(new Uint8Array(e.target.result)));
                    }
                })(_t);
            };
        })(this);
    },

    // parse() function reads the binary data, interpreting and splitting each chuck
    // and parsing it to a structured Object. When job is finished returns the object
    // or 'false' if any error was generated.
    parse: function (FileAsUint8Array) {
        var file = {
            data:    null,
            pointer: 0,

            // move the pointer negative and positive direction
            movePointer: function (_bytes) {
                this.pointer += _bytes;
                return this.pointer;
            },

            readInt: function (_bytes) { // get integer from next _bytes group (big-endian)
                var value = 0;

                if (_bytes > 1) {
                    for (var i = 1; i <= (_bytes - 1); i++) {
                        value += parseInt(this.data[this.pointer]) * Math.pow(256, (_bytes - i));
                        this.pointer++;
                    }
                }

                value += parseInt(this.data[this.pointer]);
                this.pointer++;
                return value;
            },

            readStr: function (_bytes) { // read as ASCII chars, the following bytes
                var text = '';

                for (var char = 1; char <= _bytes; char++) {
                    text += String.fromCharCode(this.readInt(1));
                }

                return text;
            },

            readIntVLV: function () { // read a variable length value
                var result = 0;

                while (true) {
                    var b = this.readInt(1);

                    //noinspection JSBitwiseOperatorUsage
                    if (b & 0x80) {
                        result += (b & 0x7f);
                        result <<= 7;
                    } else {
                        /* b is the last byte */
                        return result + b;
                    }
                }
            }
        };

        file.data = FileAsUint8Array; // 8 bits bytes file data array
        //  ** read FILE HEADER

        // Header validation ("MThd")
        if (file.readInt(4) != 0x4D546864) {
            return false; // failed (not MIDI standard or file corrupt.)
        }

        // header size (unused var), getted just for read pointer movement
        //noinspection JSUnusedLocalSymbols
        var headerSize = file.readInt(4);

        var MIDI = {}; // create new midi object

        MIDI.formatType = file.readInt(2); // get MIDI Format Type
        MIDI.tracks = file.readInt(2);     // get amount of track chunks
        MIDI.track = [];                   // create array key for track data storing

        var timeDivisionByte1 = file.readInt(1), // get Time Division first byte
            timeDivisionByte2 = file.readInt(1); // get Time Division second byte

        if (timeDivisionByte1 >= 128) { // discover Time Division mode (fps or tpf)
            MIDI.timeDivision = [];

            MIDI.timeDivision[0] = timeDivisionByte1 - 128; // frames per second MODE
                                                            // (1st byte)

            MIDI.timeDivision[1] = timeDivisionByte2; // ticks in each frame (2nd byte)
        } else {
            // else... ticks per beat MODE (2 bytes value)
            MIDI.timeDivision = (timeDivisionByte1 * 256) + timeDivisionByte2;
        }

        //  ** read TRACK CHUNK
        for (var t = 1; t <= MIDI.tracks; t++) {
            MIDI.track[t - 1] = {event: []}; // create new Track entry in Array

            // Track chunk header ("MTrk")
            if (file.readInt(4) != 0x4D54726B) {
                return false; // validation failed.
            }

            // var NOT USED, just for pointer move. get chunk size (bytes length)
            //noinspection JSUnusedLocalSymbols
            var chunkLength = file.readInt(4);

            var e              = 0,     // init event counter
                endOfTrack     = false, // FLAG for track reading sequence breaking
                laststatusByte = null;

            // ** read EVENT CHUNK
            while (!endOfTrack) {
                e++; // increase by 1 event counter

                // create new event object, in events array
                var event = {};

                // get DELTA TIME OF MIDI event (Variable Length Value)
                event.deltaTime = file.readIntVLV();

                var statusByte = file.readInt(1); // read EVENT TYPE (STATUS BYTE)

                if (statusByte >= 128) { // NEW STATUS BYTE DETECTED
                    laststatusByte = statusByte;
                } else { // 'RUNNING STATUS' situation detected
                    statusByte = laststatusByte; // apply last loop, Status Byte

                    // move back the pointer (cause readed byte is not status byte)
                    file.movePointer(-1);
                }

                // ** Identify EVENT
                if (statusByte == 0xFF) { // System / Meta Event type
                    // assign metaEvent code to array
                    event.type = 0xFF;

                    // assign metaEvent subtype
                    event.metaType = file.readInt(1);

                    var metaEventLength = file.readIntVLV(); // get the metaEvent length

                    switch (event.metaType) {
                        case 0x2F: // end of track, has no data byte
                            // change FLAG to force track reading loop breaking
                            endOfTrack = true;

                            break;

                        case 0x00: // sequenceNumber
                            event.subtype = "sequenceNumber";
                            event.data = file.readInt(2);
                            event.number = event.data;

                            break;

                        case 0x01: // Text Event
                            event.subtype = "text";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x02: // Copyright Notice
                            event.subtype = "copyrightNotice";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x03: // Sequence/Track Name (documentation:
                            // http://www.ta7.de/txt/musik/musi0006.htm)
                            event.subtype = "trackName";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x04:
                            event.subtype = "instrumentName";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x05:
                            event.subtype = "lyrics";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x06: // Marker
                            event.subtype = "marker";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x07:
                            event.subtype = "cuePoint";
                            event.data = file.readStr(metaEventLength);
                            event.text = event.data;

                            break;

                        case 0x20:
                            event.subtype = "midiChannelPrefix";

                            if (metaEventLength != 1) {
                                throw "Expected length for midiChannelPrefix event is 1, got " + metaEventLength;
                            }

                            event.data = file.readInt(1);
                            event.channel = event.data;

                            break;

                        case 0x21: // MIDI PORT
                            event.subtype = "midiPort";
                            event.data = file.readInt(metaEventLength);

                            break;

                        case 0x59: // Key Signature
                            event.subtype = "keySignature";
                            event.data = file.readInt(metaEventLength);

                            break;

                        case 0x51: // Set Tempo
                            event.subtype = "setTempo";
                            event.data = [file.readInt(1), file.readInt(1), file.readInt(1)];

                            event.microsecondsPerBeat = (
                                (event.data[0] << 16)
                                + (event.data[1] << 8)
                                + event.data[2]
                            );

                            event.bpm = 60000000 / event.microsecondsPerBeat;

                            if (!MIDI.bpm) {
                                MIDI.bpm = event.bpm; // start BPM
                            }

                            break;

                        case 0x54: // SMPTE Offset
                            event.subtype = "smpteOffset";

                            event.data = [
                                file.readInt(1), file.readInt(1), file.readInt(1),
                                file.readInt(1), file.readInt(1)
                            ];

                            var hourByte = event.data[0];

                            event.frameRate = {
                                0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30
                            }[hourByte & 0x60];

                            event.hour = hourByte & 0x1f;
                            event.min = event.data[1];
                            event.sec = event.data[2];
                            event.frame = event.data[3];
                            event.subframe = event.data[4];

                            break;

                        case 0x58: // Time Signature
                            event.subtype = "timeSignature";

                            event.data = [
                                file.readInt(1), file.readInt(1), file.readInt(1),
                                file.readInt(1)
                            ];

                            event.numerator = event.data[0];
                            event.denominator = Math.pow(2, event.data[1]);
                            event.metronome = event.data[2];
                            event.thirtyseconds = event.data[3];

                            break;

                        default :
                            file.readInt(metaEventLength);
                            event.data = file.readInt(metaEventLength);

                            if (this.debug) {
                                console.log("Unimplemented 0xFF event! data block readed as Integer");
                            }
                    }
                } else { // MIDI Control Events OR System Exclusive Events
                    // split the status byte HEX representation, to obtain 4 bits values
                    statusByte = statusByte.toString(16).split("");

                    if (!statusByte[1]) {
                        statusByte.unshift("0"); // force 2 digits
                    }

                    // first byte is EVENT TYPE ID
                    event.type = parseInt(statusByte[0], 16);

                    // second byte is channel
                    event.channel = parseInt(statusByte[1], 16);

                    switch (event.type) {
                        case 0xF: // System Exclusive Events
                            event.subtype = "sysEx / dividedSysEx";

                            var event_length = file.readIntVLV();
                            event.data = file.readInt(event_length);

                            if (this.debug) {
                                console.log("Unimplemented 0xF exclusive events! data block readed as Integer");
                            }

                            break;

                        case 0xA: // Note Aftertouch
                            event.subtype = "noteAftertouch";
                            event.data = [file.readInt(1), file.readInt(1)];
                            event.noteNumber = event.data[0];
                            event.amount = event.data[1];

                            break;

                        case 0xB: // Controller
                            event.subtype = "controller";
                            event.data = [file.readInt(1), file.readInt(1)];
                            event.controllerType = event.data[0];
                            event.value = event.data[1];

                            break;

                        case 0xE: // Pitch Bend Event
                            event.subtype = "pitchBend";
                            event.data = [file.readInt(1), file.readInt(1)];
                            event.value = event.data[0] + (event.data[1] << 7);

                            break;

                        case 0x8: // Note off
                            event.subtype = "noteOff";
                            event.data = [file.readInt(1), file.readInt(1)];
                            event.noteNumber = event.data[0];
                            event.velocity = event.data[1];

                            break;

                        case 0x9: // Note On
                            event.data = [file.readInt(1), file.readInt(1)];
                            event.noteNumber = event.data[0];
                            event.velocity = event.data[1];
                            event.subtype = event.velocity ? "noteOn" : "noteOff";

                            break;

                        case 0xC: // Program Change
                            event.subtype = "programChange";
                            event.data = file.readInt(1);
                            event.programNumber = event.data;

                            break;

                        case 0xD: // Channel Aftertouch
                            event.subtype = "channelAftertouch";
                            event.data = file.readInt(1);
                            event.amount = event.data;

                            break;

                        default:
                            if (this.debug) {
                                console.log("Unknown EVENT detected.... reading cancelled!");
                            }

                            return false;
                    }
                }

                // set event
                MIDI.track[t - 1].event[e - 1] = event;
            }
        }

        return MIDI;
    },

    getStructure: function (MIDI) {
        var ctTime   = 0,
            notes    = [],
            programs = [],

            song     = {
                ppq: MIDI.timeDivision,
                bpm: MIDI.bpm
            };

        for (var t = 0; t < MIDI.track.length; t++) {
            var track = MIDI.track[t];

            for (var e = 0; e < track.event.length; e++) {
                var event = track.event[e];

                ctTime += event.deltaTime;

                switch (event.subtype) {
                    case "trackName":
                        ctTime = 0;
                        break;

                    case "programChange":
                        programs[event.channel] = event.programNumber;

                        break;
                    case "noteOn":
                        notes.push({
                            startTime: ctTime * 3,
                            note:      event.noteNumber,
                            velocity:  event.velocity,
                            channel:   event.channel,
                            program:   programs[event.channel] || 0
                        });

                        break;

                    case "noteOff":
                        for (var n = 0; n < notes.length; n++) {
                            if (notes[n].note == event.noteNumber && !notes[n].endTime) {
                                notes[n].endTime = ctTime * 3;
                                notes[n].duration = notes[n].endTime - notes[n].startTime;

                                break;
                            }
                        }

                        break;
                }
            }
        }

        song.notes = notes;

        return song;
    }
};