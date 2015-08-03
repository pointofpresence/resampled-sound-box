"use strict";

var CBinWriter = function () {
    var mData = "";

    this.putUBYTE = function (x) {
        mData += String.fromCharCode(x);
    };

    this.putUSHORT = function (x) {
        mData += String.fromCharCode(
            x & 255,
            (x >> 8) & 255
        );
    };

    this.putULONG = function (x) {
        mData += String.fromCharCode(
            x & 255,
            (x >> 8) & 255,
            (x >> 16) & 255,
            (x >> 24) & 255
        );
    };

    this.putFLOAT = function (x) {
        var l = 0;
        if (x != 0) {
            var s = 0;

            if (x < 0) s = 0x80000000, x = -x;

            var e = 127 + 23;

            while (x < 0x00800000) {
                x *= 2;
                e--;
            }

            while (x >= 0x01000000) {
                x /= 2;
                e++;
            }

            l = s | ((e & 255) << 23) | (x & 0x007fffff);
        }

        this.putULONG(l);
    };

    this.append = function (x) {
        mData += x;
    };

    this.getData = function () {
        return mData;
    };
};