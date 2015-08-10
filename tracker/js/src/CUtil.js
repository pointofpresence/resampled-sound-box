"use strict";

var CUtil = {
    getEventElement: function (e) {
        var o = null;

        if (!e) {
            e = window.event;
        }

        if (e.target) {
            o = e.target;
        } else if (e.srcElement) {
            o = e.srcElement;
        }

        if (o.nodeType == 3) { // defeat Safari bug
            o = o.parentNode;
        }

        return o;
    },

    getMousePos: function (e, rel) {
        // Get the mouse document position
        var p = [0, 0];

        if (e.pageX && e.pageY) {
            p = [e.pageX, e.pageY];
        } else if (e.clientX && e.clientY) {
            p = [
                e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft,
                e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop
            ];
        } else { //noinspection JSUnresolvedVariable
            if (e.touches && e.touches.length > 0) {
                //noinspection JSUnresolvedVariable
                p = [
                    e.touches[0].clientX + document.body.scrollLeft +
                    document.documentElement.scrollLeft,
                    e.touches[0].clientY + document.body.scrollTop +
                    document.documentElement.scrollTop
                ];
            }
        }

        if (!rel) {
            return p;
        }

        // Get the element document position
        var pElem = this.getElementPos(this.getEventElement(e));
        return [p[0] - pElem[0], p[1] - pElem[1]];
    },

    getElementPos: function (o) {
        var left = 0, top = 0;

        if (o.offsetParent) {
            do {
                left += o.offsetLeft;
                top += o.offsetTop;
            } while (o = o.offsetParent);
        }
        return [left, top];
    },

    toHex: function (num, count) {
        var s            = num.toString(16).toUpperCase(),
            leadingZeros = count - s.length;

        for (var i = 0; i < leadingZeros; ++i) {
            s = "0" + s;
        }

        return s;
    },

    getURLBase: function (url) {
        var queryStart = url.indexOf("?");
        return url.slice(0, queryStart >= 0 ? queryStart : url.length);
    },

    parseURLGetData: function (url) {
        var queryStart = url.indexOf("?") + 1,
            queryEnd   = url.indexOf("#") + 1 || url.length + 1,
            query      = url.slice(queryStart, queryEnd - 1);

        var params = {};

        if (query === url || query === "") {
            return params;
        }

        var nvPairs = query.replace(/\+/g, " ").split("&");

        for (var i = 0; i < nvPairs.length; i++) {
            var nv = nvPairs[i].split("="),
                n  = decodeURIComponent(nv[0]),
                v  = decodeURIComponent(nv[1]);

            if (!(n in params)) {
                params[n] = [];
            }

            params[n].push(nv.length === 2 ? v : null);
        }

        return params;
    }
};