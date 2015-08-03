"use strict";

var CBinParser = function (d) {
    var mData = d;
    var mPos = 0;

    this.getUBYTE = function () {
        return mData.charCodeAt(mPos++) & 255;
    };

    this.getUSHORT = function () {
        var l = (mData.charCodeAt(mPos) & 255) |
            ((mData.charCodeAt(mPos + 1) & 255) << 8);

        mPos += 2;
        return l;
    };

    this.getULONG = function () {
        var l = (mData.charCodeAt(mPos) & 255) |
            ((mData.charCodeAt(mPos + 1) & 255) << 8) |
            ((mData.charCodeAt(mPos + 2) & 255) << 16) |
            ((mData.charCodeAt(mPos + 3) & 255) << 24);

        mPos += 4;
        return l;
    };

    this.getFLOAT = function () {
        var l = this.getULONG();

        if (l == 0) return 0;

        var s = l & 0x80000000;                       // Sign
        var e = (l >> 23) & 255;                      // Exponent
        var m = 1 + ((l & 0x007fffff) / 0x00800000);  // Mantissa
        var x = m * Math.pow(2, e - 127);

        return s ? -x : x;
    };

    this.getTail = function () {
        var str = mData.slice(mPos);
        mPos = mData.length;
        return str;
    };
};