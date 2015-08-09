;
(function ($) {
    "use strict";

    var defaults = {
        change: $.noop
    };

    var modifyOffset = function (target, call) {
        console.log('modifyOffset');

        var el  = $(target),
            val = el.val() || 0;

        el.next("output").text(val);

        if (call) {
            (el.data("cb") || $.noop)();
        }
    };

    var methods = {
        change: function (cb) {
            this.data("cb", cb);
        },

        value: function (v) {
            console.log('value');
            $(this).val(v || 0);
            modifyOffset(this, false);
        },

        init: function (options) {
            var configCommon = $.extend(defaults, options || {});

            return this.each(function () {
                var $this    = $(this),
                    personal = $this.data("config") || {}, // own element props
                    config   = $.extend(configCommon, personal);

                $this.wrap($("<div/>", {"class": "rs-slider"}));
                $this.after($("<output/>", {"class": "rangevalue"}));

                $this.on("change, input", function () {
                    modifyOffset(this, true);
                });

                modifyOffset(this, false);
            });
        }
    };

    $.fn.rsSlider = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === "object" || !methodOrOptions) {
            return methods.init.apply(this, arguments); // Default to "init"
        } else {
            $.error("Method " + methodOrOptions + " does not exist in jQuery.rsSlider");
        }
    };
})(jQuery);