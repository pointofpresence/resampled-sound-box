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
    }
};