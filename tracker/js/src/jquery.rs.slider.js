;
(function ($) {
    var defaults = {
        change: $.noop
    };

    var methods = {
        change: function (cb) {
            $(this).on("change", function () {
                $(this).next("output").val($(this).val());
                cb();
            });
        },

        init: function (options) {
            var configCommon = $.extend(defaults, options || {});

            return this.each(function () {
                var $this = $(this),
                    personal = $this.data("config") || {}, // own element props
                    config = $.extend(configCommon, personal);

                $this.wrap($("<div/>", {"class": "rs-slider"}));
                $this.after($("<output/>", {"class": "rangevalue"}));
                $this.next("output").val(parseInt($this.val()));
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