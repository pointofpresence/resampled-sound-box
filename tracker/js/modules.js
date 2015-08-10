/*!
 * This file is part of ReSampled SoundBox.
 *
 * Based on SoundBox by Marcus Geelnard (c) 2011-2013
 * 2015 pointofpresence
 * ReSampled.SoundBox (resampled-sound-box) - Online music tracker
 *
 * @version v0.0.1
 * @build Mon Aug 10 2015 20:25:54
 * @link https://github.com/pointofpresence/resampled-sound-box
 * @license GPL-3.0
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source
 *    distribution.
 */
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
gDemoSongs = [
    {
        name:        "sway",
        description: ' SWAY by m @ Bits\'n\'Bites, from the 4k demo <a href="http://pouet.net/prod.php?which=59203">SWAY</a>',
        data:        String.fromCharCode(
            83, 66, 111, 120, 8, 2, 237, 154, 65, 107, 19, 65, 20, 199, 255, 179, 51, 179, 141, 166, 49,
            197, 82, 161, 66, 48, 80, 164, 122, 235, 65, 177, 7, 193, 67, 114, 244, 86, 61, 89, 232,
            161, 158, 84, 12, 38, 177, 32, 107, 183, 75, 65, 171, 165, 39, 167, 244, 32, 4, 161, 244,
            27, 120, 20, 84, 122, 243, 43, 120, 242, 27, 120, 241, 30, 103, 179, 219, 180, 221, 100, 119,
            74, 117, 179, 89, 120, 191, 201, 236, 219, 183, 111, 19, 94, 38, 111, 231, 237, 155, 236, 251,
            25, 224, 170, 245, 216, 3, 255, 225, 65, 99, 87, 112, 40, 24, 159, 253, 214, 250, 163, 236,
            7, 182, 100, 22, 211, 112, 161, 165, 110, 192, 68, 33, 104, 246, 5, 12, 195, 113, 182, 60,
            221, 55, 221, 117, 215, 27, 182, 143, 148, 153, 54, 216, 23, 12, 246, 88, 255, 177, 170, 173,
            171, 177, 239, 107, 32, 117, 138, 37, 195, 9, 215, 78, 248, 225, 68, 252, 114, 144, 15, 154,
            161, 116, 35, 122, 211, 109, 56, 77, 119, 45, 245, 248, 41, 197, 30, 239, 181, 98, 37, 198,
            94, 197, 77, 84, 48, 91, 206, 58, 126, 74, 197, 233, 114, 130, 185, 172, 125, 124, 145, 96,
            63, 140, 139, 159, 213, 156, 196, 79, 195, 129, 211, 208, 175, 56, 57, 246, 241, 239, 194, 109,
            234, 87, 84, 182, 61, 120, 109, 52, 95, 129, 32, 146, 232, 190, 100, 232, 62, 7, 131, 176,
            231, 124, 221, 186, 196, 216, 252, 125, 169, 247, 88, 15, 171, 191, 119, 44, 135, 162, 250, 91,
            53, 68, 87, 99, 63, 16, 138, 98, 129, 32, 8, 130, 200, 37, 59, 65, 191, 43, 46, 214,
            241, 69, 130, 253, 222, 66, 245, 153, 156, 18, 58, 111, 91, 220, 226, 194, 207, 238, 220, 111,
            128, 236, 33, 204, 217, 112, 55, 162, 143, 34, 75, 154, 234, 214, 185, 179, 101, 115, 21, 241,
            95, 141, 234, 78, 36, 85, 255, 149, 82, 227, 238, 127, 214, 119, 82, 38, 255, 235, 103, 26,
            123, 117, 180, 81, 81, 61, 15, 241, 67, 16, 68, 62, 177, 190, 123, 186, 239, 92, 6, 158,
            182, 182, 241, 78, 50, 171, 176, 60, 179, 184, 43, 31, 22, 120, 176, 170, 62, 216, 98, 62,
            169, 145, 243, 145, 104, 230, 220, 255, 172, 199, 255, 138, 193, 44, 147, 237, 139, 116, 45, 18,
            4, 65, 156, 15, 142, 13, 240, 250, 6, 216, 79, 33, 110, 176, 59, 130, 89, 181, 214, 235,
            175, 53, 123, 222, 95, 68, 247, 243, 54, 15, 165, 159, 193, 153, 240, 27, 55, 215, 85, 42,
            131, 154, 252, 127, 16, 239, 191, 82, 121, 241, 61, 207, 36, 196, 15, 253, 249, 65, 16, 4,
            17, 199, 35, 15, 88, 241, 38, 129, 73, 212, 122, 69, 122, 183, 140, 234, 18, 127, 43, 122,
            25, 156, 7, 25, 60, 148, 128, 144, 34, 174, 182, 250, 164, 39, 219, 143, 186, 119, 122, 114,
            175, 175, 239, 135, 122, 218, 79, 94, 73, 211, 242, 98, 45, 217, 156, 228, 127, 71, 111, 221,
            49, 255, 33, 51, 31, 127, 227, 61, 163, 201, 255, 125, 28, 4, 82, 139, 253, 1, 61, 109,
            76, 225, 51, 107, 176, 119, 66, 127, 59, 161, 191, 81, 61, 99, 254, 241, 234, 32, 8, 98,
            172, 107, 242, 15, 59, 96, 191, 60, 61, 205, 46, 99, 133, 127, 150, 140, 95, 223, 186, 87,
            219, 227, 29, 187, 127, 138, 95, 151, 7, 213, 121, 144, 197, 99, 166, 228, 104, 166, 216, 28,
            241, 55, 41, 26, 150, 119, 151, 13, 115, 213, 155, 211, 234, 246, 201, 204, 189, 62, 10, 255,
            13, 182, 149, 4, 123, 5, 217, 63, 163, 110, 90, 93, 191, 101, 200, 36, 38, 255, 183, 13,
            246, 118, 138, 227, 15, 195, 248, 15, 137, 159, 1, 76, 119, 130, 107, 52, 25, 17, 4, 113,
            94, 186, 79, 152, 238, 96, 144, 19, 7, 65, 77, 14, 107, 106, 73, 222, 62, 122, 68, 253,
            248, 81, 245, 193, 35, 167, 160, 229, 79, 130, 32, 8, 130, 24, 61, 127, 1
        )
    },
    {
        name:        "rechord",
        description: ' re:chord by m @ Bits\'n\'Bites, from the 4k demo <a href="http://www.pouet.net/prod.php?which=60915">re:chord</a>',
        base64:      "U0JveAgC7ZpRa9NQFMfPzU0ycZ0gOEWYo6CC4AaDPakPPgk-TPDBtz34oEMRQcZkdJTZMEdLSUhDQrexSV_9AH6BoU9-Cz-DH8B6bpKmN0nTTGVNiueXnp5zc9v03Jvb_O9N254HWFR-GaD0jSsA2vICIEoFKuv32COFJTauii2IYAQ1OcJH3Y_rMIjKzrYc4WPTj7dgWqjBW9mw099hz0e2PdlsKpXx5cvL6fIb7PbIsPs38Bxs4Bl45Vux-SdJ5k8QBFEc_Csq-anB8dpVvQvPZhiff8iqK3xJlVXcf6WqoYIHcfCcxszxTsLbCe_l-LHXXj6-vmrkH6Od4c2MfK3Qd0LvJryTKJ8npuM5MbM9W7Zz175_fH_bdu2YWY4lzOy4HWFl_yYV3f85wz8aq1l0j3vHMTv6dCTs8KR3IoyulQRRXlDF0d4zgCdX15QdnSkLvVurDXVFHSj2UM2Hqj5KyWuJ8qRX4nM59QdnXpMHbIZ-q6D853LyX6PBSxAEQQglBwNVHJerfQ2u-1P7_k-4MahlyugNa7IP6XmpJbR3plV1SYjy90Q82OXRWCEIgiBKSR_X4_0PqMyqfseX9kug3Lx9MVTyELFfioGNEPJWjk0rQf6tFg0VgiAIopRr8pcG8O-GBqDp9-GbzvgiKEuevqMHK_JgZS7fWc_6lbyBeufAYczbki87u9DEPLuS3wcLfQPLnSnInyAIgvhPldy1gP0w_L_LPOdfNMYftNRrB9zQQ9Xmvo7zQL1VTdX0GbGlj-RkfIK4LW1PoCWzOfXrf3i8LmYeWDEqPpvTtgs5beuiTdP8wwEzGkMi8grs77-hjaPcjfW_gzNBMad1cSbolr7_90MLqOMMNo18Y2pvRL2Z8dpJsOfPxofzciOMPmbkPGhrU9rXjJ3PdJsIoqyw09cMnr4A9liFz0LPFZ3pq7vRZY1Jz0GU3CMrNkEQBEEQk-U3"
    },
    {
        name:        "spacedust",
        description: ' Space Dust by m @ Bits\'n\'Bites',
        data:        String.fromCharCode(
            83, 66, 111, 120, 8, 2, 237, 154, 79, 107, 19, 65, 24, 198, 159, 249, 179, 187, 145, 52, 22,
            69, 161, 32, 74, 160, 74, 35, 30, 75, 209, 67, 123, 170, 244, 228, 69, 208, 91, 15, 241,
            28, 197, 67, 23, 33, 68, 210, 96, 13, 41, 161, 151, 176, 233, 178, 49, 13, 1, 79, 138,
            31, 64, 240, 32, 185, 121, 240, 11, 136, 159, 192, 111, 161, 179, 219, 77, 92, 154, 29, 247,
            160, 197, 157, 240, 254, 178, 79, 158, 77, 38, 153, 188, 51, 236, 206, 203, 187, 155, 147, 21,
            224, 6, 175, 186, 96, 19, 183, 0, 44, 99, 21, 27, 130, 241, 157, 143, 27, 247, 14, 197,
            129, 180, 109, 238, 48, 198, 69, 82, 18, 176, 66, 71, 10, 94, 224, 191, 9, 252, 227, 64,
            231, 56, 103, 74, 25, 237, 119, 50, 218, 253, 225, 96, 52, 28, 4, 67, 157, 35, 231, 244,
            252, 126, 224, 247, 61, 95, 231, 121, 143, 191, 131, 70, 164, 69, 164, 219, 239, 4, 121, 143,
            241, 127, 159, 191, 197, 140, 19, 120, 121, 53, 223, 199, 127, 81, 173, 64, 197, 200, 147, 251,
            145, 135, 35, 43, 149, 112, 19, 75, 106, 231, 130, 146, 133, 91, 8, 23, 81, 134, 181, 240,
            171, 21, 165, 219, 32, 136, 191, 64, 76, 92, 165, 22, 7, 94, 84, 134, 124, 199, 98, 188,
            248, 238, 210, 122, 77, 28, 56, 97, 107, 156, 193, 229, 84, 22, 108, 156, 238, 207, 247, 212,
            232, 152, 61, 19, 205, 174, 217, 241, 215, 219, 139, 21, 127, 207, 55, 43, 126, 195, 15, 127,
            52, 105, 49, 36, 8, 99, 225, 213, 35, 165, 150, 196, 21, 199, 217, 196, 35, 155, 137, 171,
            159, 156, 7, 95, 228, 19, 153, 200, 228, 243, 74, 233, 169, 49, 219, 204, 172, 173, 154, 179,
            173, 137, 174, 129, 235, 90, 125, 182, 213, 209, 14, 61, 166, 141, 30, 70, 120, 79, 135, 58,
            65, 16, 196, 162, 242, 211, 101, 74, 96, 144, 118, 116, 249, 138, 95, 100, 172, 188, 98, 253,
            46, 218, 25, 103, 124, 234, 179, 71, 74, 71, 94, 134, 242, 142, 62, 118, 83, 70, 160, 27,
            151, 217, 241, 19, 4, 65, 16, 89, 236, 158, 106, 83, 58, 215, 163, 50, 252, 199, 87, 148,
            159, 90, 142, 156, 182, 51, 22, 93, 75, 231, 44, 129, 38, 103, 120, 113, 238, 155, 119, 207,
            228, 76, 98, 122, 252, 4, 65, 16, 196, 34, 35, 182, 92, 136, 215, 225, 125, 242, 146, 93,
            139, 106, 242, 37, 20, 30, 62, 179, 171, 118, 242, 83, 225, 159, 221, 166, 178, 52, 61, 141,
            207, 188, 30, 197, 126, 18, 61, 251, 248, 96, 64, 77, 110, 50, 111, 53, 243, 63, 136, 231,
            63, 239, 244, 52, 239, 135, 227, 48, 225, 222, 64, 214, 125, 242, 6, 8, 130, 32, 206, 41,
            147, 99, 31, 226, 254, 62, 216, 119, 41, 43, 236, 174, 202, 213, 219, 123, 47, 63, 111, 219,
            107, 103, 235, 110, 161, 74, 113, 62, 85, 86, 54, 212, 121, 238, 171, 239, 20, 31, 143, 35,
            55, 54, 209, 155, 30, 63, 65, 16, 4, 145, 193, 164, 165, 116, 116, 25, 223, 106, 123, 93,
            118, 104, 51, 94, 216, 189, 86, 238, 91, 143, 11, 127, 250, 82, 90, 50, 127, 158, 241, 67,
            175, 104, 174, 9, 130, 32, 8, 226, 159, 243, 11
        )
    },
    {
        name:        "8bit",
        description: ' 8 Bit One by m @ Bits\'n\'Bites',
        data:        String.fromCharCode(
            83, 66, 111, 120, 8, 2, 237, 219, 49, 107, 219, 64, 20, 7, 240, 119, 58, 217, 130, 144, 216,
            201, 226, 146, 33, 32, 98, 74, 218, 177, 93, 186, 52, 99, 200, 84, 58, 36, 75, 72, 134,
            102, 78, 178, 9, 99, 227, 202, 85, 13, 65, 180, 8, 19, 115, 56, 24, 211, 16, 98, 2,
            249, 16, 89, 252, 141, 2, 25, 187, 56, 119, 82, 228, 154, 243, 112, 14, 4, 91, 46, 255,
            31, 247, 116, 122, 150, 100, 206, 135, 204, 227, 140, 220, 120, 67, 84, 224, 3, 143, 248, 32,
            32, 34, 103, 185, 36, 183, 100, 13, 137, 220, 109, 190, 97, 51, 139, 89, 234, 133, 180, 55,
            17, 151, 189, 81, 107, 181, 133, 140, 206, 168, 253, 138, 90, 157, 80, 157, 35, 35, 237, 155,
            50, 90, 99, 253, 188, 181, 59, 221, 81, 139, 90, 237, 110, 116, 33, 70, 45, 148, 113, 174,
            206, 145, 145, 246, 106, 206, 162, 177, 30, 0, 0, 96, 30, 172, 192, 35, 235, 135, 87, 36,
            218, 43, 255, 228, 77, 89, 191, 223, 221, 89, 238, 65, 238, 208, 73, 106, 184, 170, 226, 106,
            203, 141, 239, 20, 106, 121, 83, 203, 235, 250, 5, 149, 108, 205, 196, 185, 150, 7, 90, 94,
            211, 47, 240, 178, 53, 254, 208, 112, 188, 142, 155, 29, 0, 224, 255, 172, 228, 223, 60, 21,
            43, 68, 199, 31, 191, 179, 223, 14, 227, 111, 247, 45, 55, 180, 143, 248, 75, 43, 121, 207,
            144, 95, 107, 249, 149, 150, 247, 181, 252, 102, 198, 51, 209, 53, 228, 250, 120, 255, 24, 198,
            123, 61, 227, 241, 247, 12, 199, 77, 227, 233, 227, 203, 0, 0, 176, 144, 248, 223, 136, 248,
            167, 128, 211, 26, 95, 125, 79, 123, 114, 77, 254, 120, 203, 118, 190, 228, 215, 243, 234, 232,
            191, 74, 110, 126, 167, 122, 178, 14, 111, 80, 195, 151, 251, 141, 120, 201, 237, 171, 165, 108,
            173, 42, 247, 107, 153, 159, 137, 90, 178, 14, 247, 201, 175, 203, 125, 63, 94, 114, 203, 207,
            84, 165, 106, 69, 238, 87, 113, 171, 0, 0, 64, 54, 13, 61, 38, 131, 24, 217, 249, 114,
            188, 72, 47, 48, 230, 166, 7, 153, 68, 86, 188, 53, 18, 73, 196, 77, 76, 230, 98, 81,
            39, 40, 249, 28, 66, 224, 86, 1, 0, 128, 108, 10, 146, 248, 108, 47, 109, 210, 125, 142,
            216, 67, 72, 238, 105, 110, 213, 78, 43, 121, 98, 154, 146, 39, 198, 67, 76, 228, 0, 0,
            0, 240, 234, 226, 39, 222, 130, 160, 72, 228, 20, 182, 232, 216, 102, 252, 67, 143, 206, 78,
            236, 175, 246, 243, 170, 252, 249, 247, 245, 41, 10, 57, 158, 93, 7, 0, 0, 152, 189, 129,
            151, 4, 57, 165, 221, 184, 180, 171, 127, 161, 97, 90, 0, 0, 0, 22, 195, 19
        )
    },
    {
        name:        "4chordsong",
        description: ' 4 Chord Song by m @ Bits\'n\'Bites, chord test inspired by <a href="http://www.youtube.com/watch?v=5pidokakU4I">Axis of Awsome</a>',
        data:        String.fromCharCode(
            83, 66, 111, 120, 8, 2, 237, 153, 65, 107, 19, 81, 16, 199, 231, 189, 151, 77, 2, 105, 14,
            90, 8, 138, 72, 115, 80, 170, 168, 24, 76, 3, 70, 237, 161, 164, 90, 176, 74, 245, 166,
            168, 72, 169, 199, 80, 2, 45, 24, 66, 36, 123, 168, 49, 100, 27, 82, 210, 96, 212, 196,
            80, 20, 36, 8, 222, 252, 0, 30, 252, 22, 130, 31, 64, 4, 63, 130, 190, 236, 190, 109,
            195, 146, 237, 174, 77, 163, 151, 255, 111, 102, 24, 246, 205, 16, 102, 103, 55, 12, 239, 237,
            167, 179, 68, 19, 252, 134, 78, 124, 81, 23, 68, 39, 194, 115, 52, 45, 24, 127, 190, 196,
            227, 122, 224, 36, 39, 98, 140, 9, 226, 140, 145, 47, 74, 125, 89, 43, 229, 10, 36, 101,
            181, 176, 86, 36, 41, 185, 98, 46, 79, 82, 178, 249, 156, 65, 150, 148, 149, 84, 148, 108,
            40, 169, 43, 169, 42, 177, 243, 237, 188, 134, 146, 154, 18, 59, 223, 206, 139, 202, 26, 246,
            179, 139, 210, 230, 165, 37, 165, 101, 164, 205, 12, 248, 57, 31, 245, 239, 119, 239, 27, 213,
            202, 22, 141, 72, 212, 99, 61, 229, 18, 207, 140, 220, 127, 11, 247, 254, 91, 184, 247, 127,
            175, 206, 225, 22, 221, 237, 127, 70, 245, 255, 186, 180, 132, 122, 30, 9, 185, 122, 158, 0,
            0, 0, 28, 20, 241, 109, 155, 248, 186, 30, 36, 10, 70, 22, 104, 94, 78, 242, 196, 179,
            200, 185, 219, 193, 227, 65, 198, 184, 226, 112, 38, 249, 184, 239, 196, 158, 24, 110, 126, 153,
            110, 209, 85, 229, 211, 202, 95, 51, 253, 34, 93, 246, 81, 127, 163, 213, 54, 181, 241, 242,
            181, 169, 205, 86, 219, 212, 102, 171, 99, 234, 184, 38, 185, 205, 2, 94, 86, 0, 0, 0,
            67, 224, 73, 185, 39, 191, 160, 203, 105, 157, 138, 117, 233, 81, 136, 137, 163, 211, 20, 79,
            104, 179, 26, 27, 192, 207, 48, 47, 41, 95, 80, 190, 168, 124, 94, 249, 178, 195, 87, 28,
            222, 222, 219, 85, 29, 215, 198, 238, 158, 209, 162, 230, 184, 182, 55, 195, 17, 151, 186, 236,
            245, 83, 46, 241, 148, 163, 126, 55, 202, 30, 113, 195, 35, 94, 247, 136, 71, 60, 226, 15,
            240, 178, 2, 0, 0, 24, 2, 251, 162, 247, 141, 17, 77, 76, 94, 162, 87, 26, 19, 167,
            219, 137, 116, 86, 36, 133, 25, 101, 150, 249, 161, 108, 212, 77, 45, 87, 107, 166, 86, 140,
            186, 169, 21, 99, 203, 84, 231, 164, 207, 57, 38, 61, 0, 0, 0, 0, 254, 30, 241, 93,
            151, 195, 116, 157, 104, 50, 44, 166, 232, 67, 128, 241, 99, 119, 143, 172, 220, 209, 158, 6,
            213, 164, 231, 140, 11, 30, 240, 241, 75, 239, 149, 239, 42, 191, 163, 124, 103, 96, 189, 165,
            178, 186, 244, 209, 244, 77, 149, 213, 161, 222, 200, 119, 18, 243, 56, 158, 94, 153, 58, 88,
            253, 61, 31, 245, 247, 232, 243, 184, 31, 84, 204, 35, 62, 243, 191, 251, 239, 245, 117, 32,
            59, 226, 153, 70, 11, 127, 86, 0, 0, 24, 62, 201, 223, 173, 50, 246, 88, 238, 203, 179,
            20, 222, 161, 165, 16, 19, 247, 223, 240, 248, 25, 109, 205, 26, 222, 76, 217, 8, 108, 163,
            201, 0, 0, 0, 192, 24, 217, 180, 236, 119, 183, 219, 165, 164, 220, 129, 95, 249, 69, 203,
            247, 216, 91, 245, 105, 156, 249, 30, 228, 47, 208, 74, 0, 0, 0, 224, 223, 211, 63, 93,
            255, 33, 247, 228, 244, 53, 242, 147, 102, 195, 196, 181, 205, 155, 233, 39, 218, 195, 208, 94,
            138, 191, 89, 238, 117, 58, 90, 66, 175, 1, 0, 0, 128, 67, 231, 15
        )
    }
];
// Instrument presets
gInstrumentPresets = [
    {
        name: "====[LEADS]===="
    },
    {
        name: "Softy",
        i:    [
            2, // OSC1_WAVEFORM
            100, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            3, // OSC2_WAVEFORM
            201, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            5, // ENV_ATTACK
            6, // ENV_SUSTAIN
            58, // ENV_RELEASE
            0, // LFO_WAVEFORM
            195, // LFO_AMT
            6, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            135, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            147, // FX_PAN_AMT
            6, // FX_PAN_FREQ
            121, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "Classic 8-bit",
        i:    [
            1, // OSC1_WAVEFORM
            192, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            1, // OSC2_WAVEFORM
            191, // OSC2_VOL
            116, // OSC2_SEMI
            9, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            6, // ENV_ATTACK
            22, // ENV_SUSTAIN
            34, // ENV_RELEASE
            0, // LFO_WAVEFORM
            69, // LFO_AMT
            3, // LFO_FREQ
            1, // LFO_FX_FREQ
            1, // FX_FILTER
            23, // FX_FREQ
            167, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            77, // FX_PAN_AMT
            6, // FX_PAN_FREQ
            25, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "Square",
        i:    [
            1, // OSC1_WAVEFORM
            255, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            1, // OSC2_WAVEFORM
            154, // OSC2_VOL
            128, // OSC2_SEMI
            9, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            7, // ENV_ATTACK
            5, // ENV_SUSTAIN
            52, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            47, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            146, // FX_DELAY_AMT
            2 // FX_DELAY_TIME
        ]
    },
    {
        name: "Bell",
        i:    [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            152, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            152, // OSC2_SEMI
            12, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            2, // ENV_ATTACK
            0, // ENV_SUSTAIN
            60, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            47, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            2 // FX_DELAY_TIME
        ]
    },
    {
        name: "Filter Bass 1",
        i:    [
            2, // OSC1_WAVEFORM
            100, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            3, // OSC2_WAVEFORM
            201, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            0, // ENV_ATTACK
            6, // ENV_SUSTAIN
            29, // ENV_RELEASE
            0, // LFO_WAVEFORM
            195, // LFO_AMT
            4, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            50, // FX_FREQ
            184, // FX_RESONANCE
            119, // FX_DIST
            244, // FX_DRIVE
            147, // FX_PAN_AMT
            6, // FX_PAN_FREQ
            84, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "====[PADS]===="
    },
    {
        name: "Base string",
        i:    [
            2, // OSC1_WAVEFORM
            192, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            2, // OSC2_WAVEFORM
            192, // OSC2_VOL
            140, // OSC2_SEMI
            18, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            158, // ENV_ATTACK
            119, // ENV_SUSTAIN
            158, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            5, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            0, // FX_PAN_AMT
            0, // FX_PAN_FREQ
            24, // FX_DELAY_AMT
            8 // FX_DELAY_TIME
        ]
    },
    {
        name: "Base string (dist)",
        i:    [
            2, // OSC1_WAVEFORM
            192, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            2, // OSC2_WAVEFORM
            192, // OSC2_VOL
            140, // OSC2_SEMI
            18, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            107, // ENV_ATTACK
            115, // ENV_SUSTAIN
            138, // ENV_RELEASE
            0, // LFO_WAVEFORM
            136, // LFO_AMT
            5, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            8, // FX_FREQ
            92, // FX_RESONANCE
            21, // FX_DIST
            32, // FX_DRIVE
            148, // FX_PAN_AMT
            5, // FX_PAN_FREQ
            85, // FX_DELAY_AMT
            8 // FX_DELAY_TIME
        ]
    },
    {
        name: "Evil brass",
        i:    [
            3, // OSC1_WAVEFORM
            146, // OSC1_VOL
            140, // OSC1_SEMI
            0, // OSC1_XENV
            1, // OSC2_WAVEFORM
            224, // OSC2_VOL
            128, // OSC2_SEMI
            3, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            92, // ENV_ATTACK
            0, // ENV_SUSTAIN
            95, // ENV_RELEASE
            3, // LFO_WAVEFORM
            179, // LFO_AMT
            5, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            124, // FX_FREQ
            135, // FX_RESONANCE
            11, // FX_DIST
            32, // FX_DRIVE
            150, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "====[DRUMS]===="
    },
    {
        name: "Bass drum 1",
        i:    [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            116, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            116, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            0, // NOISE_VOL
            4, // ENV_ATTACK
            6, // ENV_SUSTAIN
            35, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            14, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            0, // FX_PAN_AMT
            0, // FX_PAN_FREQ
            0, // FX_DELAY_AMT
            0 // FX_DELAY_TIME
        ]
    },
    {
        name: "Bass drum 2",
        i:    [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            117, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            110, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            0, // NOISE_VOL
            4, // ENV_ATTACK
            6, // ENV_SUSTAIN
            35, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            14, // FX_FREQ
            0, // FX_RESONANCE
            1, // FX_DIST
            39, // FX_DRIVE
            76, // FX_PAN_AMT
            5, // FX_PAN_FREQ
            0, // FX_DELAY_AMT
            0 // FX_DELAY_TIME
        ]
    },
    {
        name: "Bass drum 3",
        i:    [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            116, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            116, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            14, // NOISE_VOL
            4, // ENV_ATTACK
            6, // ENV_SUSTAIN
            45, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            136, // FX_FREQ
            15, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            0, // FX_PAN_AMT
            0, // FX_PAN_FREQ
            66, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "Base tom",
        i:    [
            0, // OSC1_WAVEFORM
            192, // OSC1_VOL
            104, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            80, // OSC2_VOL
            99, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            4, // ENV_ATTACK
            0, // ENV_SUSTAIN
            66, // ENV_RELEASE
            3, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            1, // FX_FILTER
            0, // FX_FREQ
            1, // FX_RESONANCE
            2, // FX_DIST
            32, // FX_DRIVE
            37, // FX_PAN_AMT
            4, // FX_PAN_FREQ
            0, // FX_DELAY_AMT
            0 // FX_DELAY_TIME
        ]
    },
    {
        name: "Snare 1",
        i:    [
            0, // OSC1_WAVEFORM
            160, // OSC1_VOL
            128, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            160, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            210, // NOISE_VOL
            4, // ENV_ATTACK
            7, // ENV_SUSTAIN
            41, // ENV_RELEASE
            0, // LFO_WAVEFORM
            60, // LFO_AMT
            4, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            61, // FX_PAN_AMT
            5, // FX_PAN_FREQ
            32, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "Snare 2",
        i:    [
            0, // OSC1_WAVEFORM
            221, // OSC1_VOL
            128, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            210, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            255, // NOISE_VOL
            4, // ENV_ATTACK
            6, // ENV_SUSTAIN
            62, // ENV_RELEASE
            0, // LFO_WAVEFORM
            64, // LFO_AMT
            7, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            255, // FX_FREQ
            15, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            20, // FX_PAN_AMT
            0, // FX_PAN_FREQ
            24, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "Snare 3",
        i:    [
            3, // OSC1_WAVEFORM
            0, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            3, // OSC2_WAVEFORM
            68, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            218, // NOISE_VOL
            4, // ENV_ATTACK
            4, // ENV_SUSTAIN
            40, // ENV_RELEASE
            1, // LFO_WAVEFORM
            55, // LFO_AMT
            4, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            67, // FX_FREQ
            115, // FX_RESONANCE
            124, // FX_DIST
            190, // FX_DRIVE
            67, // FX_PAN_AMT
            6, // FX_PAN_FREQ
            39, // FX_DELAY_AMT
            1 // FX_DELAY_TIME
        ]
    },
    {
        name: "Hihat 1",
        i:    [
            0, // OSC1_WAVEFORM
            0, // OSC1_VOL
            140, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            0, // OSC2_VOL
            140, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            60, // NOISE_VOL
            4, // ENV_ATTACK
            10, // ENV_SUSTAIN
            34, // ENV_RELEASE
            0, // LFO_WAVEFORM
            187, // LFO_AMT
            5, // LFO_FREQ
            0, // LFO_FX_FREQ
            1, // FX_FILTER
            239, // FX_FREQ
            135, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            108, // FX_PAN_AMT
            5, // FX_PAN_FREQ
            16, // FX_DELAY_AMT
            4 // FX_DELAY_TIME
        ]
    },
    {
        name: "Hihat 2",
        i:    [
            2, // OSC1_WAVEFORM
            40, // OSC1_VOL
            140, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            0, // OSC2_VOL
            140, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            255, // NOISE_VOL
            5, // ENV_ATTACK
            0, // ENV_SUSTAIN
            48, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            3, // FX_FILTER
            161, // FX_FREQ
            192, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            0, // FX_PAN_AMT
            0, // FX_PAN_FREQ
            71, // FX_DELAY_AMT
            1 // FX_DELAY_TIME
        ]
    },
    {
        name: "Open hihat",
        i:    [
            0, // OSC1_WAVEFORM
            0, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            0, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            125, // NOISE_VOL
            0, // ENV_ATTACK
            1, // ENV_SUSTAIN
            59, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            1, // FX_FILTER
            193, // FX_FREQ
            171, // FX_RESONANCE
            0, // FX_DIST
            29, // FX_DRIVE
            39, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            88, // FX_DELAY_AMT
            3 // FX_DELAY_TIME
        ]
    },
    {
        name: "Smash",
        i:    [
            0, // OSC1_WAVEFORM
            214, // OSC1_VOL
            104, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            204, // OSC2_VOL
            104, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            229, // NOISE_VOL
            4, // ENV_ATTACK
            40, // ENV_SUSTAIN
            21, // ENV_RELEASE
            0, // LFO_WAVEFORM
            231, // LFO_AMT
            6, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            183, // FX_FREQ
            15, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            232, // FX_PAN_AMT
            4, // FX_PAN_FREQ
            74, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
        ]
    },
    {
        name: "Pipe hit",
        i:    [
            3, // OSC1_WAVEFORM
            255, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            140, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            127, // NOISE_VOL
            2, // ENV_ATTACK
            2, // ENV_SUSTAIN
            23, // ENV_RELEASE
            0, // LFO_WAVEFORM
            96, // LFO_AMT
            3, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            94, // FX_FREQ
            79, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            84, // FX_PAN_AMT
            2, // FX_PAN_FREQ
            12, // FX_DELAY_AMT
            4 // FX_DELAY_TIME
        ]
    },
    {
        name: "====[F/X]===="
    },
    {
        name: "Wind",
        i:    [
            0, // OSC1_WAVEFORM
            0, // OSC1_VOL
            140, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            0, // OSC2_VOL
            140, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            255, // NOISE_VOL
            158, // ENV_ATTACK
            158, // ENV_SUSTAIN
            158, // ENV_RELEASE
            0, // LFO_WAVEFORM
            51, // LFO_AMT
            2, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            58, // FX_FREQ
            239, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            88, // FX_PAN_AMT
            1, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            2 // FX_DELAY_TIME
        ]
    },
    {
        name: "Long beat",
        i:    [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            106, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            106, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            0, // NOISE_VOL
            5, // ENV_ATTACK
            7, // ENV_SUSTAIN
            164, // ENV_RELEASE
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            2, // FX_DIST
            32, // FX_DRIVE
            83, // FX_PAN_AMT
            5, // FX_PAN_FREQ
            25, // FX_DELAY_AMT
            1 // FX_DELAY_TIME
        ]
    },
    {
        name: "Siren",
        i:    [
            1, // OSC1_WAVEFORM
            0, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            1, // OSC2_WAVEFORM
            0, // OSC2_VOL
            128, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            255, // NOISE_VOL
            158, // ENV_ATTACK
            100, // ENV_SUSTAIN
            158, // ENV_RELEASE
            3, // LFO_WAVEFORM
            67, // LFO_AMT
            4, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            57, // FX_FREQ
            254, // FX_RESONANCE
            85, // FX_DIST
            171, // FX_DRIVE
            88, // FX_PAN_AMT
            1, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            2 // FX_DELAY_TIME
        ]
    }
];
"use strict";

var CPlayer = function () {
    //--------------------------------------------------------------------------
    // Private members
    //--------------------------------------------------------------------------

    var mProgressCallback;

    var mGeneratedBuffer;

    var mWorker = new Worker("tracker/js/player-worker.js");

    mWorker.onmessage = function (event) {
        if (event.data.cmd === "progress") {
            mGeneratedBuffer = event.data.buffer;

            if (mProgressCallback) {
                mProgressCallback(event.data.progress);
            }
        }
    };

    //--------------------------------------------------------------------------
    // Public methods
    //--------------------------------------------------------------------------

    // Generate the audio data (done in worker).
    this.generate = function (song, opts, progressCallback) {
        mProgressCallback = progressCallback;

        mWorker.postMessage({
            cmd:  "generate",
            song: song,
            opts: opts
        });
    };

    // Create a WAVE formatted Uint8Array from the generated audio data.
    this.createWave = function () {
        // Turn critical object properties into local variables (performance)
        var mixBuf = mGeneratedBuffer,
            waveWords = mixBuf.length;

        // Create WAVE header
        var l1 = waveWords * 2 - 8,
            l2 = l1 - 36,
            headerLen = 44,
            wave = new Uint8Array(headerLen + waveWords * 2);

        //noinspection JSCheckFunctionSignatures
        wave.set(
            [
                82, 73, 70, 70,
                l1 & 255, (l1 >> 8) & 255, (l1 >> 16) & 255, (l1 >> 24) & 255,
                87, 65, 86, 69, 102, 109, 116, 32, 16, 0, 0, 0, 1, 0, 2, 0,
                68, 172, 0, 0, 16, 177, 2, 0, 4, 0, 16, 0, 100, 97, 116, 97,
                l2 & 255, (l2 >> 8) & 255, (l2 >> 16) & 255, (l2 >> 24) & 255
            ]
        );

        // Append actual wave data
        for (var i = 0, idx = headerLen; i < waveWords; ++i) {
            // Note: We clamp here
            var y = mixBuf[i];
            y = y < -32767 ? -32767 : (y > 32767 ? 32767 : y);
            wave[idx++] = y & 255;
            wave[idx++] = (y >> 8) & 255;
        }

        // Return the WAVE formatted typed array
        return wave;
    };

    // Get n samples of wave data at time t [s]. Wave data in range [-2,2].
    this.getData = function (t, n) {
        var i = 2 * Math.floor(t * 44100),
            d = new Array(n),
            b = mGeneratedBuffer;

        for (var j = 0; j < 2 * n; j += 1) {
            var k = i + j;
            d[j] = t > 0 && k < b.length ? b[k] / 32768 : 0;
        }

        return d;
    };
};


"use strict";

var CJammer = function () {
    //--------------------------------------------------------------------------
    // Private members
    //--------------------------------------------------------------------------

    // Currently playing notes.
    var MAX_POLYPHONY = 8,
        mPlayingNotes = [];

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

    var mScriptNode,
        mSampleRate,
        mRateScale;

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
        var i, j, k, t, e, rsample, f;

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
        //noinspection JSUnresolvedVariable
        if (window.AudioContext) {
            //noinspection JSUnresolvedFunction
            mAudioContext = new AudioContext();
        } else if (window.webkitAudioContext) {
            //noinspection JSUnresolvedFunction,JSPotentiallyInvalidConstructorUsage
            mAudioContext = new webkitAudioContext();
            //noinspection JSUnresolvedVariable
            mAudioContext.createScriptProcessor = mAudioContext.createJavaScriptNode;
        } else {
            mAudioContext = undefined;
            return;
        }

        // Get actual sample rate (SoundBox is hard-coded to 44100 samples/s).
        //noinspection JSUnresolvedVariable
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
            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            var leftBuf = event.outputBuffer.getChannelData(0);

            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            var rightBuf = event.outputBuffer.getChannelData(1);

            generateTimeSlice(leftBuf, rightBuf);
        };

        // Connect the script node to the output.
        //noinspection JSUnresolvedVariable
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


//------------------------------------------------------------------------------
// This is a run length encoder (RLE) that (for SoundBox files) compresses
// to about twice the size compared to DEFLATE.
//------------------------------------------------------------------------------

function rle_encode(data) {
    var out = "", i, len, code, code2;

    for (i = 0; i < data.length;) {
        // Next byte from the data stream
        code = data.charCodeAt(i);

        // Count how many equal bytes we have
        for (len = 1; len < 255 && (i + len) < data.length; len++) {
            code2 = data.charCodeAt(i + len);

            if (code2 != code) {
                break;
            }
        }

        // Emit run length code?
        if (len > 3) {
            out += String.fromCharCode(254);  // Marker byte (254)
            out += String.fromCharCode(len);
            out += String.fromCharCode(code);
        } else {
            out += String.fromCharCode(code);

            if (code == 254) {
                out += String.fromCharCode(0);  // zero length indicates the marker byte
            }

            len = 1;
        }

        // Next position to encode
        i += len;
    }

    return out;
}

function rle_decode(data) {
    var out = "", i, j, code, len;

    for (i = 0; i < data.length;) {
        // Next byte from the data stream
        code = data.charCodeAt(i++);

        // Is this a marker byte (254)?
        if (code === 254) {
            if (i < 1) {
                break;
            }

            len = data.charCodeAt(i++);

            if (len != 0) {
                if (i < 1) {
                    break;
                }

                code = data.charCodeAt(i++);

                for (j = 0; j < len; j++) {
                    out += String.fromCharCode(code);
                }

                continue;
            }
        }

        // Plain byte copy
        out += String.fromCharCode(code);
    }

    return out;
}
/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: t; -*-
 *
 * $Id: rawdeflate.js,v 0.3 2009/03/01 19:05:05 dankogai Exp dankogai $
 *
 * Original:
 *   http://www.onicos.com/staff/iz/amuse/javascript/expert/deflate.txt
 */

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0.1
 * LastModified: Dec 25 1999
 */

/* Interface:
 * data = deflate(src);
 */

(function () {
	/* constant parameters */
	var WSIZE = 32768, // Sliding Window size
		STORED_BLOCK = 0,
		STATIC_TREES = 1,
		DYN_TREES = 2,

	/* for deflate */
		DEFAULT_LEVEL = 6,
		FULL_SEARCH = false,
		INBUFSIZ = 32768, // Input buffer size
		//INBUF_EXTRA = 64, // Extra buffer
		OUTBUFSIZ = 1024 * 8,
		window_size = 2 * WSIZE,
		MIN_MATCH = 3,
		MAX_MATCH = 258,
		BITS = 16,
	// for SMALL_MEM
		LIT_BUFSIZE = 0x2000,
//		HASH_BITS = 13,
	//for MEDIUM_MEM
	//	LIT_BUFSIZE = 0x4000,
	//	HASH_BITS = 14,
	// for BIG_MEM
	//	LIT_BUFSIZE = 0x8000,
		HASH_BITS = 15,
		DIST_BUFSIZE = LIT_BUFSIZE,
		HASH_SIZE = 1 << HASH_BITS,
		HASH_MASK = HASH_SIZE - 1,
		WMASK = WSIZE - 1,
		NIL = 0, // Tail of hash chains
		TOO_FAR = 4096,
		MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1,
		MAX_DIST = WSIZE - MIN_LOOKAHEAD,
		SMALLEST = 1,
		MAX_BITS = 15,
		MAX_BL_BITS = 7,
		LENGTH_CODES = 29,
		LITERALS = 256,
		END_BLOCK = 256,
		L_CODES = LITERALS + 1 + LENGTH_CODES,
		D_CODES = 30,
		BL_CODES = 19,
		REP_3_6 = 16,
		REPZ_3_10 = 17,
		REPZ_11_138 = 18,
		HEAP_SIZE = 2 * L_CODES + 1,
		H_SHIFT = parseInt((HASH_BITS + MIN_MATCH - 1) / MIN_MATCH, 10),

	/* variables */
		free_queue,
		qhead,
		qtail,
		initflag,
		outbuf = null,
		outcnt,
		outoff,
		complete,
		window_,
		d_buf,
		l_buf,
		prev,
		bi_buf,
		bi_valid,
		block_start,
		ins_h,
		hash_head,
		prev_match,
		match_available,
		match_length,
		prev_length,
		strstart,
		match_start,
		eofile,
		lookahead,
		max_chain_length,
		max_lazy_match,
		compr_level,
		good_match,
		nice_match,
		dyn_ltree,
		dyn_dtree,
		static_ltree,
		static_dtree,
		bl_tree,
		l_desc,
		d_desc,
		bl_desc,
		bl_count,
		heap,
		heap_len,
		heap_max,
		depth,
		length_code,
		dist_code,
		base_length,
		base_dist,
		flag_buf,
		last_lit,
		last_dist,
		last_flags,
		flags,
		flag_bit,
		opt_len,
		static_len,
		deflate_data,
		deflate_pos;

	if (LIT_BUFSIZE > INBUFSIZ) {
		console.error("error: INBUFSIZ is too small");
	}
	if ((WSIZE << 1) > (1 << BITS)) {
		console.error("error: WSIZE is too large");
	}
	if (HASH_BITS > BITS - 1) {
		console.error("error: HASH_BITS is too large");
	}
	if (HASH_BITS < 8 || MAX_MATCH !== 258) {
		console.error("error: Code too clever");
	}

	/* objects (deflate) */

	function DeflateCT() {
		this.fc = 0; // frequency count or bit string
		this.dl = 0; // father node in Huffman tree or length of bit string
	}

	function DeflateTreeDesc() {
		this.dyn_tree = null; // the dynamic tree
		this.static_tree = null; // corresponding static tree or NULL
		this.extra_bits = null; // extra bits for each code or NULL
		this.extra_base = 0; // base index for extra_bits
		this.elems = 0; // max number of elements in the tree
		this.max_length = 0; // max bit length for the codes
		this.max_code = 0; // largest code with non zero frequency
	}

	/* Values for max_lazy_match, good_match and max_chain_length, depending on
	 * the desired pack level (0..9). The values given below have been tuned to
	 * exclude worst case performance for pathological files. Better values may be
	 * found for specific files.
	 */
	function DeflateConfiguration(a, b, c, d) {
		this.good_length = a; // reduce lazy search above this match length
		this.max_lazy = b; // do not perform lazy search above this match length
		this.nice_length = c; // quit search above this match length
		this.max_chain = d;
	}

	function DeflateBuffer() {
		this.next = null;
		this.len = 0;
		this.ptr = []; // new Array(OUTBUFSIZ); // ptr.length is never read
		this.off = 0;
	}

	/* constant tables */
	var extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
	var extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	var extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
	var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	var configuration_table = [
		new DeflateConfiguration(0, 0, 0, 0),
		new DeflateConfiguration(4, 4, 8, 4),
		new DeflateConfiguration(4, 5, 16, 8),
		new DeflateConfiguration(4, 6, 32, 32),
		new DeflateConfiguration(4, 4, 16, 16),
		new DeflateConfiguration(8, 16, 32, 32),
		new DeflateConfiguration(8, 16, 128, 128),
		new DeflateConfiguration(8, 32, 128, 256),
		new DeflateConfiguration(32, 128, 258, 1024),
		new DeflateConfiguration(32, 258, 258, 4096)
	];


	/* routines (deflate) */

	function deflate_start(level) {
		var i;

		if (!level) {
			level = DEFAULT_LEVEL;
		} else if (level < 1) {
			level = 1;
		} else if (level > 9) {
			level = 9;
		}

		compr_level = level;
		initflag = false;
		eofile = false;
		if (outbuf !== null) {
			return;
		}

		free_queue = qhead = qtail = null;
		outbuf = []; // new Array(OUTBUFSIZ); // outbuf.length never called
		window_ = []; // new Array(window_size); // window_.length never called
		d_buf = []; // new Array(DIST_BUFSIZE); // d_buf.length never called
		l_buf = []; // new Array(INBUFSIZ + INBUF_EXTRA); // l_buf.length never called
		prev = []; // new Array(1 << BITS); // prev.length never called

		dyn_ltree = [];
		for (i = 0; i < HEAP_SIZE; i++) {
			dyn_ltree[i] = new DeflateCT();
		}
		dyn_dtree = [];
		for (i = 0; i < 2 * D_CODES + 1; i++) {
			dyn_dtree[i] = new DeflateCT();
		}
		static_ltree = [];
		for (i = 0; i < L_CODES + 2; i++) {
			static_ltree[i] = new DeflateCT();
		}
		static_dtree = [];
		for (i = 0; i < D_CODES; i++) {
			static_dtree[i] = new DeflateCT();
		}
		bl_tree = [];
		for (i = 0; i < 2 * BL_CODES + 1; i++) {
			bl_tree[i] = new DeflateCT();
		}
		l_desc = new DeflateTreeDesc();
		d_desc = new DeflateTreeDesc();
		bl_desc = new DeflateTreeDesc();
		bl_count = []; // new Array(MAX_BITS+1); // bl_count.length never called
		heap = []; // new Array(2*L_CODES+1); // heap.length never called
		depth = []; // new Array(2*L_CODES+1); // depth.length never called
		length_code = []; // new Array(MAX_MATCH-MIN_MATCH+1); // length_code.length never called
		dist_code = []; // new Array(512); // dist_code.length never called
		base_length = []; // new Array(LENGTH_CODES); // base_length.length never called
		base_dist = []; // new Array(D_CODES); // base_dist.length never called
		flag_buf = []; // new Array(parseInt(LIT_BUFSIZE / 8, 10)); // flag_buf.length never called
	}

	function deflate_end() {
		free_queue = qhead = qtail = null;
		outbuf = null;
		window_ = null;
		d_buf = null;
		l_buf = null;
		prev = null;
		dyn_ltree = null;
		dyn_dtree = null;
		static_ltree = null;
		static_dtree = null;
		bl_tree = null;
		l_desc = null;
		d_desc = null;
		bl_desc = null;
		bl_count = null;
		heap = null;
		depth = null;
		length_code = null;
		dist_code = null;
		base_length = null;
		base_dist = null;
		flag_buf = null;
	}

	function reuse_queue(p) {
		p.next = free_queue;
		free_queue = p;
	}

	function new_queue() {
		var p;

		if (free_queue !== null) {
			p = free_queue;
			free_queue = free_queue.next;
		} else {
			p = new DeflateBuffer();
		}
		p.next = null;
		p.len = p.off = 0;

		return p;
	}

	function head1(i) {
		return prev[WSIZE + i];
	}

	function head2(i, val) {
		return (prev[WSIZE + i] = val);
	}

	/* put_byte is used for the compressed output, put_ubyte for the
	 * uncompressed output. However unlzw() uses window for its
	 * suffix table instead of its output buffer, so it does not use put_ubyte
	 * (to be cleaned up).
	 */
	function put_byte(c) {
		outbuf[outoff + outcnt++] = c;
		if (outoff + outcnt === OUTBUFSIZ) {
			qoutbuf();
		}
	}

	/* Output a 16 bit value, lsb first */
	function put_short(w) {
		w &= 0xffff;
		if (outoff + outcnt < OUTBUFSIZ - 2) {
			outbuf[outoff + outcnt++] = (w & 0xff);
			outbuf[outoff + outcnt++] = (w >>> 8);
		} else {
			put_byte(w & 0xff);
			put_byte(w >>> 8);
		}
	}

	/* ==========================================================================
	 * Insert string s in the dictionary and set match_head to the previous head
	 * of the hash chain (the most recent string with same hash key). Return
	 * the previous length of the hash chain.
	 * IN  assertion: all calls to to INSERT_STRING are made with consecutive
	 *    input characters and the first MIN_MATCH bytes of s are valid
	 *    (except for the last MIN_MATCH-1 bytes of the input file).
	 */
	function INSERT_STRING() {
		ins_h = ((ins_h << H_SHIFT) ^ (window_[strstart + MIN_MATCH - 1] & 0xff)) & HASH_MASK;
		hash_head = head1(ins_h);
		prev[strstart & WMASK] = hash_head;
		head2(ins_h, strstart);
	}

	/* Send a code of the given tree. c and tree must not have side effects */
	function SEND_CODE(c, tree) {
		send_bits(tree[c].fc, tree[c].dl);
	}

	/* Mapping from a distance to a distance code. dist is the distance - 1 and
	 * must not have side effects. dist_code[256] and dist_code[257] are never
	 * used.
	 */
	function D_CODE(dist) {
		return (dist < 256 ? dist_code[dist] : dist_code[256 + (dist >> 7)]) & 0xff;
	}

	/* ==========================================================================
	 * Compares to subtrees, using the tree depth as tie breaker when
	 * the subtrees have equal frequency. This minimizes the worst case length.
	 */
	function SMALLER(tree, n, m) {
		return tree[n].fc < tree[m].fc || (tree[n].fc === tree[m].fc && depth[n] <= depth[m]);
	}

	/* ==========================================================================
	 * read string data
	 */
	function read_buff(buff, offset, n) {
		var i;
		for (i = 0; i < n && deflate_pos < deflate_data.length; i++) {
			buff[offset + i] = deflate_data[deflate_pos++] & 0xff;
		}
		return i;
	}

	/* ==========================================================================
	 * Initialize the "longest match" routines for a new file
	 */
	function lm_init() {
		var j;

		// Initialize the hash table. */
		for (j = 0; j < HASH_SIZE; j++) {
			// head2(j, NIL);
			prev[WSIZE + j] = 0;
		}
		// prev will be initialized on the fly */

		// Set the default configuration parameters:
		max_lazy_match = configuration_table[compr_level].max_lazy;
		good_match = configuration_table[compr_level].good_length;
		if (!FULL_SEARCH) {
			nice_match = configuration_table[compr_level].nice_length;
		}
		max_chain_length = configuration_table[compr_level].max_chain;

		strstart = 0;
		block_start = 0;

		lookahead = read_buff(window_, 0, 2 * WSIZE);
		if (lookahead <= 0) {
			eofile = true;
			lookahead = 0;
			return;
		}
		eofile = false;
		// Make sure that we always have enough lookahead. This is important
		// if input comes from a device such as a tty.
		while (lookahead < MIN_LOOKAHEAD && !eofile) {
			fill_window();
		}

		// If lookahead < MIN_MATCH, ins_h is garbage, but this is
		// not important since only literal bytes will be emitted.
		ins_h = 0;
		for (j = 0; j < MIN_MATCH - 1; j++) {
			// UPDATE_HASH(ins_h, window_[j]);
			ins_h = ((ins_h << H_SHIFT) ^ (window_[j] & 0xff)) & HASH_MASK;
		}
	}

	/* ==========================================================================
	 * Set match_start to the longest match starting at the given string and
	 * return its length. Matches shorter or equal to prev_length are discarded,
	 * in which case the result is equal to prev_length and match_start is
	 * garbage.
	 * IN assertions: cur_match is the head of the hash chain for the current
	 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
	 */
	function longest_match(cur_match) {
		var chain_length = max_chain_length; // max hash chain length
		var scanp = strstart; // current string
		var matchp; // matched string
		var len; // length of current match
		var best_len = prev_length; // best match length so far

		// Stop when cur_match becomes <= limit. To simplify the code,
		// we prevent matches with the string of window index 0.
		var limit = (strstart > MAX_DIST ? strstart - MAX_DIST : NIL);

		var strendp = strstart + MAX_MATCH;
		var scan_end1 = window_[scanp + best_len - 1];
		var scan_end = window_[scanp + best_len];

		var i, broke;

		// Do not waste too much time if we already have a good match: */
		if (prev_length >= good_match) {
			chain_length >>= 2;
		}

		// Assert(encoder->strstart <= window_size-MIN_LOOKAHEAD, "insufficient lookahead");

		do {
			// Assert(cur_match < encoder->strstart, "no future");
			matchp = cur_match;

			// Skip to next match if the match length cannot increase
			// or if the match length is less than 2:
			if (window_[matchp + best_len] !== scan_end  ||
					window_[matchp + best_len - 1] !== scan_end1 ||
					window_[matchp] !== window_[scanp] ||
					window_[++matchp] !== window_[scanp + 1]) {
				continue;
			}

			// The check at best_len-1 can be removed because it will be made
			// again later. (This heuristic is not always a win.)
			// It is not necessary to compare scan[2] and match[2] since they
			// are always equal when the other bytes match, given that
			// the hash keys are equal and that HASH_BITS >= 8.
			scanp += 2;
			matchp++;

			// We check for insufficient lookahead only every 8th comparison;
			// the 256th check will be made at strstart+258.
			while (scanp < strendp) {
				broke = false;
				for (i = 0; i < 8; i += 1) {
					scanp += 1;
					matchp += 1;
					if (window_[scanp] !== window_[matchp]) {
						broke = true;
						break;
					}
				}

				if (broke) {
					break;
				}
			}

			len = MAX_MATCH - (strendp - scanp);
			scanp = strendp - MAX_MATCH;

			if (len > best_len) {
				match_start = cur_match;
				best_len = len;
				if (FULL_SEARCH) {
					if (len >= MAX_MATCH) {
						break;
					}
				} else {
					if (len >= nice_match) {
						break;
					}
				}

				scan_end1 = window_[scanp + best_len - 1];
				scan_end = window_[scanp + best_len];
			}
		} while ((cur_match = prev[cur_match & WMASK]) > limit && --chain_length !== 0);

		return best_len;
	}

	/* ==========================================================================
	 * Fill the window when the lookahead becomes insufficient.
	 * Updates strstart and lookahead, and sets eofile if end of input file.
	 * IN assertion: lookahead < MIN_LOOKAHEAD && strstart + lookahead > 0
	 * OUT assertions: at least one byte has been read, or eofile is set;
	 *    file reads are performed for at least two bytes (required for the
	 *    translate_eol option).
	 */
	function fill_window() {
		var n, m;

	 // Amount of free space at the end of the window.
		var more = window_size - lookahead - strstart;

		// If the window is almost full and there is insufficient lookahead,
		// move the upper half to the lower one to make room in the upper half.
		if (more === -1) {
			// Very unlikely, but possible on 16 bit machine if strstart == 0
			// and lookahead == 1 (input done one byte at time)
			more--;
		} else if (strstart >= WSIZE + MAX_DIST) {
			// By the IN assertion, the window is not empty so we can't confuse
			// more == 0 with more == 64K on a 16 bit machine.
			// Assert(window_size == (ulg)2*WSIZE, "no sliding with BIG_MEM");

			// System.arraycopy(window_, WSIZE, window_, 0, WSIZE);
			for (n = 0; n < WSIZE; n++) {
				window_[n] = window_[n + WSIZE];
			}

			match_start -= WSIZE;
			strstart    -= WSIZE; /* we now have strstart >= MAX_DIST: */
			block_start -= WSIZE;

			for (n = 0; n < HASH_SIZE; n++) {
				m = head1(n);
				head2(n, m >= WSIZE ? m - WSIZE : NIL);
			}
			for (n = 0; n < WSIZE; n++) {
			// If n is not on any hash chain, prev[n] is garbage but
			// its value will never be used.
				m = prev[n];
				prev[n] = (m >= WSIZE ? m - WSIZE : NIL);
			}
			more += WSIZE;
		}
		// At this point, more >= 2
		if (!eofile) {
			n = read_buff(window_, strstart + lookahead, more);
			if (n <= 0) {
				eofile = true;
			} else {
				lookahead += n;
			}
		}
	}

	/* ==========================================================================
	 * Processes a new input file and return its compressed length. This
	 * function does not perform lazy evaluationof matches and inserts
	 * new strings in the dictionary only for unmatched strings or for short
	 * matches. It is used only for the fast compression options.
	 */
	function deflate_fast() {
		while (lookahead !== 0 && qhead === null) {
			var flush; // set if current block must be flushed

			// Insert the string window_[strstart .. strstart+2] in the
			// dictionary, and set hash_head to the head of the hash chain:
			INSERT_STRING();

			// Find the longest match, discarding those <= prev_length.
			// At this point we have always match_length < MIN_MATCH
			if (hash_head !== NIL && strstart - hash_head <= MAX_DIST) {
				// To simplify the code, we prevent matches with the string
				// of window index 0 (in particular we have to avoid a match
				// of the string with itself at the start of the input file).
				match_length = longest_match(hash_head);
				// longest_match() sets match_start */
				if (match_length > lookahead) {
					match_length = lookahead;
				}
			}
			if (match_length >= MIN_MATCH) {
				// check_match(strstart, match_start, match_length);

				flush = ct_tally(strstart - match_start, match_length - MIN_MATCH);
				lookahead -= match_length;

				// Insert new strings in the hash table only if the match length
				// is not too large. This saves time but degrades compression.
				if (match_length <= max_lazy_match) {
					match_length--; // string at strstart already in hash table
					do {
						strstart++;
						INSERT_STRING();
						// strstart never exceeds WSIZE-MAX_MATCH, so there are
						// always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
						// these bytes are garbage, but it does not matter since
						// the next lookahead bytes will be emitted as literals.
					} while (--match_length !== 0);
					strstart++;
				} else {
					strstart += match_length;
					match_length = 0;
					ins_h = window_[strstart] & 0xff;
					// UPDATE_HASH(ins_h, window_[strstart + 1]);
					ins_h = ((ins_h << H_SHIFT) ^ (window_[strstart + 1] & 0xff)) & HASH_MASK;

				//#if MIN_MATCH !== 3
				//		Call UPDATE_HASH() MIN_MATCH-3 more times
				//#endif

				}
			} else {
				// No match, output a literal byte */
				flush = ct_tally(0, window_[strstart] & 0xff);
				lookahead--;
				strstart++;
			}
			if (flush) {
				flush_block(0);
				block_start = strstart;
			}

			// Make sure that we always have enough lookahead, except
			// at the end of the input file. We need MAX_MATCH bytes
			// for the next match, plus MIN_MATCH bytes to insert the
			// string following the next match.
			while (lookahead < MIN_LOOKAHEAD && !eofile) {
				fill_window();
			}
		}
	}

	function deflate_better() {
		// Process the input block. */
		while (lookahead !== 0 && qhead === null) {
			// Insert the string window_[strstart .. strstart+2] in the
			// dictionary, and set hash_head to the head of the hash chain:
			INSERT_STRING();

			// Find the longest match, discarding those <= prev_length.
			prev_length = match_length;
			prev_match = match_start;
			match_length = MIN_MATCH - 1;

			if (hash_head !== NIL && prev_length < max_lazy_match && strstart - hash_head <= MAX_DIST) {
				// To simplify the code, we prevent matches with the string
				// of window index 0 (in particular we have to avoid a match
				// of the string with itself at the start of the input file).
				match_length = longest_match(hash_head);
				// longest_match() sets match_start */
				if (match_length > lookahead) {
					match_length = lookahead;
				}

				// Ignore a length 3 match if it is too distant: */
				if (match_length === MIN_MATCH && strstart - match_start > TOO_FAR) {
					// If prev_match is also MIN_MATCH, match_start is garbage
					// but we will ignore the current match anyway.
					match_length--;
				}
			}
			// If there was a match at the previous step and the current
			// match is not better, output the previous match:
			if (prev_length >= MIN_MATCH && match_length <= prev_length) {
				var flush; // set if current block must be flushed

				// check_match(strstart - 1, prev_match, prev_length);
				flush = ct_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);

				// Insert in hash table all strings up to the end of the match.
				// strstart-1 and strstart are already inserted.
				lookahead -= prev_length - 1;
				prev_length -= 2;
				do {
					strstart++;
					INSERT_STRING();
					// strstart never exceeds WSIZE-MAX_MATCH, so there are
					// always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
					// these bytes are garbage, but it does not matter since the
					// next lookahead bytes will always be emitted as literals.
				} while (--prev_length !== 0);
				match_available = false;
				match_length = MIN_MATCH - 1;
				strstart++;
				if (flush) {
					flush_block(0);
					block_start = strstart;
				}
			} else if (match_available) {
				// If there was no match at the previous position, output a
				// single literal. If there was a match but the current match
				// is longer, truncate the previous match to a single literal.
				if (ct_tally(0, window_[strstart - 1] & 0xff)) {
					flush_block(0);
					block_start = strstart;
				}
				strstart++;
				lookahead--;
			} else {
				// There is no previous match to compare with, wait for
				// the next step to decide.
				match_available = true;
				strstart++;
				lookahead--;
			}

			// Make sure that we always have enough lookahead, except
			// at the end of the input file. We need MAX_MATCH bytes
			// for the next match, plus MIN_MATCH bytes to insert the
			// string following the next match.
			while (lookahead < MIN_LOOKAHEAD && !eofile) {
				fill_window();
			}
		}
	}

	function init_deflate() {
		if (eofile) {
			return;
		}
		bi_buf = 0;
		bi_valid = 0;
		ct_init();
		lm_init();

		qhead = null;
		outcnt = 0;
		outoff = 0;

		if (compr_level <= 3) {
			prev_length = MIN_MATCH - 1;
			match_length = 0;
		} else {
			match_length = MIN_MATCH - 1;
			match_available = false;
		}

		complete = false;
	}

	/* ==========================================================================
	 * Same as above, but achieves better compression. We use a lazy
	 * evaluation for matches: a match is finally adopted only if there is
	 * no better match at the next window position.
	 */
	function deflate_internal(buff, off, buff_size) {
		var n;

		if (!initflag) {
			init_deflate();
			initflag = true;
			if (lookahead === 0) { // empty
				complete = true;
				return 0;
			}
		}

		n = qcopy(buff, off, buff_size);
		if (n === buff_size) {
			return buff_size;
		}

		if (complete) {
			return n;
		}

		if (compr_level <= 3) {
			// optimized for speed
			deflate_fast();
		} else {
			deflate_better();
		}

		if (lookahead === 0) {
			if (match_available) {
				ct_tally(0, window_[strstart - 1] & 0xff);
			}
			flush_block(1);
			complete = true;
		}

		return n + qcopy(buff, n + off, buff_size - n);
	}

	function qcopy(buff, off, buff_size) {
		var n, i, j;

		n = 0;
		while (qhead !== null && n < buff_size) {
			i = buff_size - n;
			if (i > qhead.len) {
				i = qhead.len;
			}
			// System.arraycopy(qhead.ptr, qhead.off, buff, off + n, i);
			for (j = 0; j < i; j++) {
				buff[off + n + j] = qhead.ptr[qhead.off + j];
			}

			qhead.off += i;
			qhead.len -= i;
			n += i;
			if (qhead.len === 0) {
				var p;
				p = qhead;
				qhead = qhead.next;
				reuse_queue(p);
			}
		}

		if (n === buff_size) {
			return n;
		}

		if (outoff < outcnt) {
			i = buff_size - n;
			if (i > outcnt - outoff) {
				i = outcnt - outoff;
			}
			// System.arraycopy(outbuf, outoff, buff, off + n, i);
			for (j = 0; j < i; j++) {
				buff[off + n + j] = outbuf[outoff + j];
			}
			outoff += i;
			n += i;
			if (outcnt === outoff) {
				outcnt = outoff = 0;
			}
		}
		return n;
	}

	/* ==========================================================================
	 * Allocate the match buffer, initialize the various tables and save the
	 * location of the internal file attribute (ascii/binary) and method
	 * (DEFLATE/STORE).
	 */
	function ct_init() {
		var n; // iterates over tree elements
		var bits; // bit counter
		var length; // length value
		var code; // code value
		var dist; // distance index

		if (static_dtree[0].dl !== 0) {
			return; // ct_init already called
		}

		l_desc.dyn_tree = dyn_ltree;
		l_desc.static_tree = static_ltree;
		l_desc.extra_bits = extra_lbits;
		l_desc.extra_base = LITERALS + 1;
		l_desc.elems = L_CODES;
		l_desc.max_length = MAX_BITS;
		l_desc.max_code = 0;

		d_desc.dyn_tree = dyn_dtree;
		d_desc.static_tree = static_dtree;
		d_desc.extra_bits = extra_dbits;
		d_desc.extra_base = 0;
		d_desc.elems = D_CODES;
		d_desc.max_length = MAX_BITS;
		d_desc.max_code = 0;

		bl_desc.dyn_tree = bl_tree;
		bl_desc.static_tree = null;
		bl_desc.extra_bits = extra_blbits;
		bl_desc.extra_base = 0;
		bl_desc.elems = BL_CODES;
		bl_desc.max_length = MAX_BL_BITS;
		bl_desc.max_code = 0;

	 // Initialize the mapping length (0..255) -> length code (0..28)
		length = 0;
		for (code = 0; code < LENGTH_CODES - 1; code++) {
			base_length[code] = length;
			for (n = 0; n < (1 << extra_lbits[code]); n++) {
				length_code[length++] = code;
			}
		}
	 // Assert (length === 256, "ct_init: length !== 256");

		// Note that the length 255 (match length 258) can be represented
		// in two different ways: code 284 + 5 bits or code 285, so we
		// overwrite length_code[255] to use the best encoding:
		length_code[length - 1] = code;

		// Initialize the mapping dist (0..32K) -> dist code (0..29) */
		dist = 0;
		for (code = 0; code < 16; code++) {
			base_dist[code] = dist;
			for (n = 0; n < (1 << extra_dbits[code]); n++) {
				dist_code[dist++] = code;
			}
		}
		// Assert (dist === 256, "ct_init: dist !== 256");
		// from now on, all distances are divided by 128
		for (dist >>= 7; code < D_CODES; code++) {
			base_dist[code] = dist << 7;
			for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
				dist_code[256 + dist++] = code;
			}
		}
		// Assert (dist === 256, "ct_init: 256+dist !== 512");

		// Construct the codes of the static literal tree
		for (bits = 0; bits <= MAX_BITS; bits++) {
			bl_count[bits] = 0;
		}
		n = 0;
		while (n <= 143) {
			static_ltree[n++].dl = 8;
			bl_count[8]++;
		}
		while (n <= 255) {
			static_ltree[n++].dl = 9;
			bl_count[9]++;
		}
		while (n <= 279) {
			static_ltree[n++].dl = 7;
			bl_count[7]++;
		}
		while (n <= 287) {
			static_ltree[n++].dl = 8;
			bl_count[8]++;
		}
		// Codes 286 and 287 do not exist, but we must include them in the
		// tree construction to get a canonical Huffman tree (longest code
		// all ones)
		gen_codes(static_ltree, L_CODES + 1);

		// The static distance tree is trivial: */
		for (n = 0; n < D_CODES; n++) {
			static_dtree[n].dl = 5;
			static_dtree[n].fc = bi_reverse(n, 5);
		}

		// Initialize the first block of the first file:
		init_block();
	}

	/* ==========================================================================
	 * Initialize a new block.
	 */
	function init_block() {
		var n; // iterates over tree elements

		// Initialize the trees.
		for (n = 0; n < L_CODES;  n++) {
			dyn_ltree[n].fc = 0;
		}
		for (n = 0; n < D_CODES;  n++) {
			dyn_dtree[n].fc = 0;
		}
		for (n = 0; n < BL_CODES; n++) {
			bl_tree[n].fc = 0;
		}

		dyn_ltree[END_BLOCK].fc = 1;
		opt_len = static_len = 0;
		last_lit = last_dist = last_flags = 0;
		flags = 0;
		flag_bit = 1;
	}

	/* ==========================================================================
	 * Restore the heap property by moving down the tree starting at node k,
	 * exchanging a node with the smallest of its two sons if necessary, stopping
	 * when the heap property is re-established (each father smaller than its
	 * two sons).
	 *
	 * @param tree- tree to restore
	 * @param k- node to move down
	 */
	function pqdownheap(tree, k) {
		var v = heap[k],
			j = k << 1; // left son of k

		while (j <= heap_len) {
			// Set j to the smallest of the two sons:
			if (j < heap_len && SMALLER(tree, heap[j + 1], heap[j])) {
				j++;
			}

			// Exit if v is smaller than both sons
			if (SMALLER(tree, v, heap[j])) {
				break;
			}

			// Exchange v with the smallest son
			heap[k] = heap[j];
			k = j;

			// And continue down the tree, setting j to the left son of k
			j <<= 1;
		}
		heap[k] = v;
	}

	/* ==========================================================================
	 * Compute the optimal bit lengths for a tree and update the total bit length
	 * for the current block.
	 * IN assertion: the fields freq and dad are set, heap[heap_max] and
	 *    above are the tree nodes sorted by increasing frequency.
	 * OUT assertions: the field len is set to the optimal bit length, the
	 *     array bl_count contains the frequencies for each bit length.
	 *     The length opt_len is updated; static_len is also updated if stree is
	 *     not null.
	 */
	function gen_bitlen(desc) { // the tree descriptor
		var tree = desc.dyn_tree;
		var extra = desc.extra_bits;
		var base = desc.extra_base;
		var max_code = desc.max_code;
		var max_length = desc.max_length;
		var stree = desc.static_tree;
		var h; // heap index
		var n, m; // iterate over the tree elements
		var bits; // bit length
		var xbits; // extra bits
		var f; // frequency
		var overflow = 0; // number of elements with bit length too large

		for (bits = 0; bits <= MAX_BITS; bits++) {
			bl_count[bits] = 0;
		}

		// In a first pass, compute the optimal bit lengths (which may
		// overflow in the case of the bit length tree).
		tree[heap[heap_max]].dl = 0; // root of the heap

		for (h = heap_max + 1; h < HEAP_SIZE; h++) {
			n = heap[h];
			bits = tree[tree[n].dl].dl + 1;
			if (bits > max_length) {
				bits = max_length;
				overflow++;
			}
			tree[n].dl = bits;
			// We overwrite tree[n].dl which is no longer needed

			if (n > max_code) {
				continue; // not a leaf node
			}

			bl_count[bits]++;
			xbits = 0;
			if (n >= base) {
				xbits = extra[n - base];
			}
			f = tree[n].fc;
			opt_len += f * (bits + xbits);
			if (stree !== null) {
				static_len += f * (stree[n].dl + xbits);
			}
		}
		if (overflow === 0) {
			return;
		}

		// This happens for example on obj2 and pic of the Calgary corpus

		// Find the first bit length which could increase:
		do {
			bits = max_length - 1;
			while (bl_count[bits] === 0) {
				bits--;
			}
			bl_count[bits]--; // move one leaf down the tree
			bl_count[bits + 1] += 2; // move one overflow item as its brother
			bl_count[max_length]--;
			// The brother of the overflow item also moves one step up,
			// but this does not affect bl_count[max_length]
			overflow -= 2;
		} while (overflow > 0);

		// Now recompute all bit lengths, scanning in increasing frequency.
		// h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
		// lengths instead of fixing only the wrong ones. This idea is taken
		// from 'ar' written by Haruhiko Okumura.)
		for (bits = max_length; bits !== 0; bits--) {
			n = bl_count[bits];
			while (n !== 0) {
				m = heap[--h];
				if (m > max_code) {
					continue;
				}
				if (tree[m].dl !== bits) {
					opt_len += (bits - tree[m].dl) * tree[m].fc;
					tree[m].fc = bits;
				}
				n--;
			}
		}
	}

	  /* ==========================================================================
	   * Generate the codes for a given tree and bit counts (which need not be
	   * optimal).
	   * IN assertion: the array bl_count contains the bit length statistics for
	   * the given tree and the field len is set for all tree elements.
	   * OUT assertion: the field code is set for all tree elements of non
	   *     zero code length.
	   * @param tree- the tree to decorate
	   * @param max_code- largest code with non-zero frequency
	   */
	function gen_codes(tree, max_code) {
		var next_code = []; // new Array(MAX_BITS + 1); // next code value for each bit length
		var code = 0; // running code value
		var bits; // bit index
		var n; // code index

		// The distribution counts are first used to generate the code values
		// without bit reversal.
		for (bits = 1; bits <= MAX_BITS; bits++) {
			code = ((code + bl_count[bits - 1]) << 1);
			next_code[bits] = code;
		}

		// Check that the bit counts in bl_count are consistent. The last code
		// must be all ones.
		// Assert (code + encoder->bl_count[MAX_BITS]-1 === (1<<MAX_BITS)-1, "inconsistent bit counts");
		// Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

		for (n = 0; n <= max_code; n++) {
			var len = tree[n].dl;
			if (len === 0) {
				continue;
			}
			// Now reverse the bits
			tree[n].fc = bi_reverse(next_code[len]++, len);

			// Tracec(tree !== static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ", n, (isgraph(n) ? n : ' '), len, tree[n].fc, next_code[len]-1));
		}
	}

	/* ==========================================================================
	 * Construct one Huffman tree and assigns the code bit strings and lengths.
	 * Update the total bit length for the current block.
	 * IN assertion: the field freq is set for all tree elements.
	 * OUT assertions: the fields len and code are set to the optimal bit length
	 *     and corresponding code. The length opt_len is updated; static_len is
	 *     also updated if stree is not null. The field max_code is set.
	 */
	function build_tree(desc) { // the tree descriptor
		var tree = desc.dyn_tree;
		var stree = desc.static_tree;
		var elems = desc.elems;
		var n, m; // iterate over heap elements
		var max_code = -1; // largest code with non zero frequency
		var node = elems; // next internal node of the tree

		// Construct the initial heap, with least frequent element in
		// heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
		// heap[0] is not used.
		heap_len = 0;
		heap_max = HEAP_SIZE;

		for (n = 0; n < elems; n++) {
			if (tree[n].fc !== 0) {
				heap[++heap_len] = max_code = n;
				depth[n] = 0;
			} else {
				tree[n].dl = 0;
			}
		}

		// The pkzip format requires that at least one distance code exists,
		// and that at least one bit should be sent even if there is only one
		// possible code. So to avoid special checks later on we force at least
		// two codes of non zero frequency.
		while (heap_len < 2) {
			var xnew = heap[++heap_len] = (max_code < 2 ? ++max_code : 0);
			tree[xnew].fc = 1;
			depth[xnew] = 0;
			opt_len--;
			if (stree !== null) {
				static_len -= stree[xnew].dl;
			}
			// new is 0 or 1 so it does not have extra bits
		}
		desc.max_code = max_code;

		// The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
		// establish sub-heaps of increasing lengths:
		for (n = heap_len >> 1; n >= 1; n--) {
			pqdownheap(tree, n);
		}

		// Construct the Huffman tree by repeatedly combining the least two
		// frequent nodes.
		do {
			n = heap[SMALLEST];
			heap[SMALLEST] = heap[heap_len--];
			pqdownheap(tree, SMALLEST);

			m = heap[SMALLEST]; // m = node of next least frequency

			// keep the nodes sorted by frequency
			heap[--heap_max] = n;
			heap[--heap_max] = m;

			// Create a new node father of n and m
			tree[node].fc = tree[n].fc + tree[m].fc;
			//	depth[node] = (char)(MAX(depth[n], depth[m]) + 1);
			if (depth[n] > depth[m] + 1) {
				depth[node] = depth[n];
			} else {
				depth[node] = depth[m] + 1;
			}
			tree[n].dl = tree[m].dl = node;

			// and insert the new node in the heap
			heap[SMALLEST] = node++;
			pqdownheap(tree, SMALLEST);

		} while (heap_len >= 2);

		heap[--heap_max] = heap[SMALLEST];

		// At this point, the fields freq and dad are set. We can now
		// generate the bit lengths.
		gen_bitlen(desc);

		// The field len is now set, we can generate the bit codes
		gen_codes(tree, max_code);
	}

	/* ==========================================================================
	 * Scan a literal or distance tree to determine the frequencies of the codes
	 * in the bit length tree. Updates opt_len to take into account the repeat
	 * counts. (The contribution of the bit length codes will be added later
	 * during the construction of bl_tree.)
	 *
	 * @param tree- the tree to be scanned
	 * @param max_code- and its largest code of non zero frequency
	 */
	function scan_tree(tree, max_code) {
		var n, // iterates over all tree elements
			prevlen = -1, // last emitted length
			curlen, // length of current code
			nextlen = tree[0].dl, // length of next code
			count = 0, // repeat count of the current code
			max_count = 7, // max repeat count
			min_count = 4; // min repeat count

		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		}
		tree[max_code + 1].dl = 0xffff; // guard

		for (n = 0; n <= max_code; n++) {
			curlen = nextlen;
			nextlen = tree[n + 1].dl;
			if (++count < max_count && curlen === nextlen) {
				continue;
			} else if (count < min_count) {
				bl_tree[curlen].fc += count;
			} else if (curlen !== 0) {
				if (curlen !== prevlen) {
					bl_tree[curlen].fc++;
				}
				bl_tree[REP_3_6].fc++;
			} else if (count <= 10) {
				bl_tree[REPZ_3_10].fc++;
			} else {
				bl_tree[REPZ_11_138].fc++;
			}
			count = 0; prevlen = curlen;
			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			} else if (curlen === nextlen) {
				max_count = 6;
				min_count = 3;
			} else {
				max_count = 7;
				min_count = 4;
			}
		}
	}

	/* ==========================================================================
	 * Send a literal or distance tree in compressed form, using the codes in
	 * bl_tree.
	 *
	 * @param tree- the tree to be scanned
	 * @param max_code- and its largest code of non zero frequency
	 */
	function send_tree(tree, max_code) {
		var n; // iterates over all tree elements
		var prevlen = -1; // last emitted length
		var curlen; // length of current code
		var nextlen = tree[0].dl; // length of next code
		var count = 0; // repeat count of the current code
		var max_count = 7; // max repeat count
		var min_count = 4; // min repeat count

		// tree[max_code+1].dl = -1; */  /* guard already set */
		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		}

		for (n = 0; n <= max_code; n++) {
			curlen = nextlen;
			nextlen = tree[n + 1].dl;
			if (++count < max_count && curlen === nextlen) {
				continue;
			} else if (count < min_count) {
				do {
					SEND_CODE(curlen, bl_tree);
				} while (--count !== 0);
			} else if (curlen !== 0) {
				if (curlen !== prevlen) {
					SEND_CODE(curlen, bl_tree);
					count--;
				}
			// Assert(count >= 3 && count <= 6, " 3_6?");
				SEND_CODE(REP_3_6, bl_tree);
				send_bits(count - 3, 2);
			} else if (count <= 10) {
				SEND_CODE(REPZ_3_10, bl_tree);
				send_bits(count - 3, 3);
			} else {
				SEND_CODE(REPZ_11_138, bl_tree);
				send_bits(count - 11, 7);
			}
			count = 0;
			prevlen = curlen;
			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			} else if (curlen === nextlen) {
				max_count = 6;
				min_count = 3;
			} else {
				max_count = 7;
				min_count = 4;
			}
		}
	}

	/* ==========================================================================
	 * Construct the Huffman tree for the bit lengths and return the index in
	 * bl_order of the last bit length code to send.
	 */
	function build_bl_tree() {
		var max_blindex; // index of last bit length code of non zero freq

		// Determine the bit length frequencies for literal and distance trees
		scan_tree(dyn_ltree, l_desc.max_code);
		scan_tree(dyn_dtree, d_desc.max_code);

		// Build the bit length tree:
		build_tree(bl_desc);
		// opt_len now includes the length of the tree representations, except
		// the lengths of the bit lengths codes and the 5+5+4 bits for the counts.

		// Determine the number of bit length codes to send. The pkzip format
		// requires that at least 4 bit length codes be sent. (appnote.txt says
		// 3 but the actual value used is 4.)
		for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
			if (bl_tree[bl_order[max_blindex]].dl !== 0) {
				break;
			}
		}
		// Update opt_len to include the bit length tree and counts */
		opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
		// Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
		// encoder->opt_len, encoder->static_len));

		return max_blindex;
	}

	/* ==========================================================================
	 * Send the header for a block using dynamic Huffman trees: the counts, the
	 * lengths of the bit length codes, the literal tree and the distance tree.
	 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
	 */
	function send_all_trees(lcodes, dcodes, blcodes) { // number of codes for each tree
		var rank; // index in bl_order

		// Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
		// Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES, "too many codes");
		// Tracev((stderr, "\nbl counts: "));
		send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
		send_bits(dcodes - 1,   5);
		send_bits(blcodes - 4,  4); // not -3 as stated in appnote.txt
		for (rank = 0; rank < blcodes; rank++) {
			// Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
			send_bits(bl_tree[bl_order[rank]].dl, 3);
		}

		// send the literal tree
		send_tree(dyn_ltree, lcodes - 1);

		// send the distance tree
		send_tree(dyn_dtree, dcodes - 1);
	}

	/* ==========================================================================
	 * Determine the best encoding for the current block: dynamic trees, static
	 * trees or store, and output the encoded block to the zip file.
	 */
	function flush_block(eof) { // true if this is the last block for a file
		var opt_lenb, static_lenb, // opt_len and static_len in bytes
			max_blindex, // index of last bit length code of non zero freq
			stored_len, // length of input block
			i;

		stored_len = strstart - block_start;
		flag_buf[last_flags] = flags; // Save the flags for the last 8 items

		// Construct the literal and distance trees
		build_tree(l_desc);
		// Tracev((stderr, "\nlit data: dyn %ld, stat %ld",
		// encoder->opt_len, encoder->static_len));

		build_tree(d_desc);
		// Tracev((stderr, "\ndist data: dyn %ld, stat %ld",
		// encoder->opt_len, encoder->static_len));
		// At this point, opt_len and static_len are the total bit lengths of
		// the compressed block data, excluding the tree representations.

		// Build the bit length tree for the above two trees, and get the index
		// in bl_order of the last bit length code to send.
		max_blindex = build_bl_tree();

	 // Determine the best encoding. Compute first the block length in bytes
		opt_lenb = (opt_len + 3 + 7) >> 3;
		static_lenb = (static_len + 3 + 7) >> 3;

	//  Trace((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u dist %u ", opt_lenb, encoder->opt_len, static_lenb, encoder->static_len, stored_len, encoder->last_lit, encoder->last_dist));

		if (static_lenb <= opt_lenb) {
			opt_lenb = static_lenb;
		}
		if (stored_len + 4 <= opt_lenb && block_start >= 0) { // 4: two words for the lengths
			// The test buf !== NULL is only necessary if LIT_BUFSIZE > WSIZE.
			// Otherwise we can't have processed more than WSIZE input bytes since
			// the last block flush, because compression would have been
			// successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
			// transform a block into a stored block.
			send_bits((STORED_BLOCK << 1) + eof, 3);  /* send block type */
			bi_windup();         /* align on byte boundary */
			put_short(stored_len);
			put_short(~stored_len);

			// copy block
			/*
				p = &window_[block_start];
				for (i = 0; i < stored_len; i++) {
					put_byte(p[i]);
				}
			*/
			for (i = 0; i < stored_len; i++) {
				put_byte(window_[block_start + i]);
			}
		} else if (static_lenb === opt_lenb) {
			send_bits((STATIC_TREES << 1) + eof, 3);
			compress_block(static_ltree, static_dtree);
		} else {
			send_bits((DYN_TREES << 1) + eof, 3);
			send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
			compress_block(dyn_ltree, dyn_dtree);
		}

		init_block();

		if (eof !== 0) {
			bi_windup();
		}
	}

	/* ==========================================================================
	 * Save the match info and tally the frequency counts. Return true if
	 * the current block must be flushed.
	 *
	 * @param dist- distance of matched string
	 * @param lc- (match length - MIN_MATCH) or unmatched char (if dist === 0)
	 */
	function ct_tally(dist, lc) {
		l_buf[last_lit++] = lc;
		if (dist === 0) {
			// lc is the unmatched char
			dyn_ltree[lc].fc++;
		} else {
			// Here, lc is the match length - MIN_MATCH
			dist--; // dist = match distance - 1
			// Assert((ush)dist < (ush)MAX_DIST && (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) && (ush)D_CODE(dist) < (ush)D_CODES,  "ct_tally: bad match");

			dyn_ltree[length_code[lc] + LITERALS + 1].fc++;
			dyn_dtree[D_CODE(dist)].fc++;

			d_buf[last_dist++] = dist;
			flags |= flag_bit;
		}
		flag_bit <<= 1;

		// Output the flags if they fill a byte
		if ((last_lit & 7) === 0) {
			flag_buf[last_flags++] = flags;
			flags = 0;
			flag_bit = 1;
		}
		// Try to guess if it is profitable to stop the current block here
		if (compr_level > 2 && (last_lit & 0xfff) === 0) {
			// Compute an upper bound for the compressed length
			var out_length = last_lit * 8;
			var in_length = strstart - block_start;
			var dcode;

			for (dcode = 0; dcode < D_CODES; dcode++) {
				out_length += dyn_dtree[dcode].fc * (5 + extra_dbits[dcode]);
			}
			out_length >>= 3;
			// Trace((stderr,"\nlast_lit %u, last_dist %u, in %ld, out ~%ld(%ld%%) ", encoder->last_lit, encoder->last_dist, in_length, out_length, 100L - out_length*100L/in_length));
			if (last_dist < parseInt(last_lit / 2, 10) && out_length < parseInt(in_length / 2, 10)) {
				return true;
			}
		}
		return (last_lit === LIT_BUFSIZE - 1 || last_dist === DIST_BUFSIZE);
		// We avoid equality with LIT_BUFSIZE because of wraparound at 64K
		// on 16 bit machines and because stored blocks are restricted to
		// 64K-1 bytes.
	}

	  /* ==========================================================================
	   * Send the block data compressed using the given Huffman trees
	   *
	   * @param ltree- literal tree
	   * @param dtree- distance tree
	   */
	function compress_block(ltree, dtree) {
		var dist; // distance of matched string
		var lc; // match length or unmatched char (if dist === 0)
		var lx = 0; // running index in l_buf
		var dx = 0; // running index in d_buf
		var fx = 0; // running index in flag_buf
		var flag = 0; // current flags
		var code; // the code to send
		var extra; // number of extra bits to send

		if (last_lit !== 0) {
			do {
				if ((lx & 7) === 0) {
					flag = flag_buf[fx++];
				}
				lc = l_buf[lx++] & 0xff;
				if ((flag & 1) === 0) {
					SEND_CODE(lc, ltree); /* send a literal byte */
					//	Tracecv(isgraph(lc), (stderr," '%c' ", lc));
				} else {
					// Here, lc is the match length - MIN_MATCH
					code = length_code[lc];
					SEND_CODE(code + LITERALS + 1, ltree); // send the length code
					extra = extra_lbits[code];
					if (extra !== 0) {
						lc -= base_length[code];
						send_bits(lc, extra); // send the extra length bits
					}
					dist = d_buf[dx++];
					// Here, dist is the match distance - 1
					code = D_CODE(dist);
					//	Assert (code < D_CODES, "bad d_code");

					SEND_CODE(code, dtree); // send the distance code
					extra = extra_dbits[code];
					if (extra !== 0) {
						dist -= base_dist[code];
						send_bits(dist, extra); // send the extra distance bits
					}
				} // literal or match pair ?
				flag >>= 1;
			} while (lx < last_lit);
		}

		SEND_CODE(END_BLOCK, ltree);
	}

	/* ==========================================================================
	 * Send a value on a given number of bits.
	 * IN assertion: length <= 16 and value fits in length bits.
	 *
	 * @param value- value to send
	 * @param length- number of bits
	 */
	var Buf_size = 16; // bit size of bi_buf
	function send_bits(value, length) {
		// If not enough room in bi_buf, use (valid) bits from bi_buf and
		// (16 - bi_valid) bits from value, leaving (width - (16-bi_valid))
		// unused bits in value.
		if (bi_valid > Buf_size - length) {
			bi_buf |= (value << bi_valid);
			put_short(bi_buf);
			bi_buf = (value >> (Buf_size - bi_valid));
			bi_valid += length - Buf_size;
		} else {
			bi_buf |= value << bi_valid;
			bi_valid += length;
		}
	}

	/* ==========================================================================
	 * Reverse the first len bits of a code, using straightforward code (a faster
	 * method would use a table)
	 * IN assertion: 1 <= len <= 15
	 *
	 * @param code- the value to invert
	 * @param len- its bit length
	 */
	function bi_reverse(code, len) {
		var res = 0;
		do {
			res |= code & 1;
			code >>= 1;
			res <<= 1;
		} while (--len > 0);
		return res >> 1;
	}

	/* ==========================================================================
	 * Write out any remaining bits in an incomplete byte.
	 */
	function bi_windup() {
		if (bi_valid > 8) {
			put_short(bi_buf);
		} else if (bi_valid > 0) {
			put_byte(bi_buf);
		}
		bi_buf = 0;
		bi_valid = 0;
	}

	function qoutbuf() {
		var q, i;
		if (outcnt !== 0) {
			q = new_queue();
			if (qhead === null) {
				qhead = qtail = q;
			} else {
				qtail = qtail.next = q;
			}
			q.len = outcnt - outoff;
			// System.arraycopy(outbuf, outoff, q.ptr, 0, q.len);
			for (i = 0; i < q.len; i++) {
				q.ptr[i] = outbuf[outoff + i];
			}
			outcnt = outoff = 0;
		}
	}

	function deflate(arr, level) {
		var i, j, buff, str;

		// Fix: Convert from string
		if (typeof arr === "string") {
			str = arr;
			arr = [];
			for (i = 0; i < str.length; i++)
				arr[i] = str.charCodeAt(i);
		}

		deflate_data = arr;
		deflate_pos = 0;
		if (typeof level === "undefined") {
			level = DEFAULT_LEVEL;
		}
		deflate_start(level);

		buff = [];

		do {
			i = deflate_internal(buff, buff.length, 1024);
		} while (i > 0);

		deflate_data = null; // G.C.

		// Fix: Convert to string
		str = "";
		for (i = 0; i < buff.length; i++)
			str += String.fromCharCode(buff[i]);

		return str;
	}

    if (!window.RawDeflate) window.RawDeflate = {};
    window.RawDeflate.deflate = deflate;
}());

/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: t; -*-
 *
 * $Id: rawinflate.js,v 0.2 2009/03/01 18:32:24 dankogai Exp $
 *
 * original:
 * http://www.onicos.com/staff/iz/amuse/javascript/expert/inflate.txt
 */

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0.0.1
 * LastModified: Dec 25 1999
 */

/* Interface:
 * data = inflate(src);
 */

(function () {
	/* constant parameters */
	var WSIZE = 32768, // Sliding Window size
		STORED_BLOCK = 0,
		STATIC_TREES = 1,
		DYN_TREES = 2,

	/* for inflate */
		lbits = 9, // bits in base literal/length lookup table
		dbits = 6, // bits in base distance lookup table

	/* variables (inflate) */
		slide,
		wp, // current position in slide
		fixed_tl = null, // inflate static
		fixed_td, // inflate static
		fixed_bl, // inflate static
		fixed_bd, // inflate static
		bit_buf, // bit buffer
		bit_len, // bits in bit buffer
		method,
		eof,
		copy_leng,
		copy_dist,
		tl, // literal length decoder table
		td, // literal distance decoder table
		bl, // number of bits decoded by tl
		bd, // number of bits decoded by td

		inflate_data,
		inflate_pos,


/* constant tables (inflate) */
		MASK_BITS = [
			0x0000,
			0x0001, 0x0003, 0x0007, 0x000f, 0x001f, 0x003f, 0x007f, 0x00ff,
			0x01ff, 0x03ff, 0x07ff, 0x0fff, 0x1fff, 0x3fff, 0x7fff, 0xffff
		],
		// Tables for deflate from PKZIP's appnote.txt.
		// Copy lengths for literal codes 257..285
		cplens = [
			3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
			35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
		],
/* note: see note #13 above about the 258 in this list. */
		// Extra bits for literal codes 257..285
		cplext = [
			0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
			3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99 // 99==invalid
		],
		// Copy offsets for distance codes 0..29
		cpdist = [
			1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
			257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
			8193, 12289, 16385, 24577
		],
		// Extra bits for distance codes
		cpdext = [
			0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,
			7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
			12, 12, 13, 13
		],
		// Order of the bit length code lengths
		border = [
			16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
		];
	/* objects (inflate) */

	function HuftList() {
		this.next = null;
		this.list = null;
	}

	function HuftNode() {
		this.e = 0; // number of extra bits or operation
		this.b = 0; // number of bits in this code or subcode

		// union
		this.n = 0; // literal, length base, or distance base
		this.t = null; // (HuftNode) pointer to next level of table
	}

	/*
	 * @param b-  code lengths in bits (all assumed <= BMAX)
	 * @param n- number of codes (assumed <= N_MAX)
	 * @param s- number of simple-valued codes (0..s-1)
	 * @param d- list of base values for non-simple codes
	 * @param e- list of extra bits for non-simple codes
	 * @param mm- maximum lookup bits
	 */
	function HuftBuild(b, n, s, d, e, mm) {
		this.BMAX = 16; // maximum bit length of any code
		this.N_MAX = 288; // maximum number of codes in any set
		this.status = 0; // 0: success, 1: incomplete table, 2: bad input
		this.root = null; // (HuftList) starting table
		this.m = 0; // maximum lookup bits, returns actual

	/* Given a list of code lengths and a maximum table size, make a set of
	   tables to decode that set of codes. Return zero on success, one if
	   the given code set is incomplete (the tables are still built in this
	   case), two if the input is invalid (all zero length codes or an
	   oversubscribed set of lengths), and three if not enough memory.
	   The code with value 256 is special, and the tables are constructed
	   so that no bits beyond that code are fetched when that code is
	   decoded. */
		var a; // counter for codes of length k
		var c = [];
		var el; // length of EOB code (value 256)
		var f; // i repeats in table every f entries
		var g; // maximum code length
		var h; // table level
		var i; // counter, current code
		var j; // counter
		var k; // number of bits in current code
		var lx = [];
		var p; // pointer into c[], b[], or v[]
		var pidx; // index of p
		var q; // (HuftNode) points to current table
		var r = new HuftNode(); // table entry for structure assignment
		var u = [];
		var v = [];
		var w;
		var x = [];
		var xp; // pointer into x or c
		var y; // number of dummy codes added
		var z; // number of entries in current table
		var o;
		var tail; // (HuftList)

		tail = this.root = null;

		// bit length count table
		for (i = 0; i < this.BMAX + 1; i++) {
			c[i] = 0;
		}
		// stack of bits per table
		for (i = 0; i < this.BMAX + 1; i++) {
			lx[i] = 0;
		}
		// HuftNode[BMAX][]  table stack
		for (i = 0; i < this.BMAX; i++) {
			u[i] = null;
		}
		// values in order of bit length
		for (i = 0; i < this.N_MAX; i++) {
			v[i] = 0;
		}
		// bit offsets, then code stack
		for (i = 0; i < this.BMAX + 1; i++) {
			x[i] = 0;
		}

		// Generate counts for each bit length
		el = n > 256 ? b[256] : this.BMAX; // set length of EOB code, if any
		p = b; pidx = 0;
		i = n;
		do {
			c[p[pidx]]++; // assume all entries <= BMAX
			pidx++;
		} while (--i > 0);
		if (c[0] === n) { // null input--all zero length codes
			this.root = null;
			this.m = 0;
			this.status = 0;
			return;
		}

		// Find minimum and maximum length, bound *m by those
		for (j = 1; j <= this.BMAX; j++) {
			if (c[j] !== 0) {
				break;
			}
		}
		k = j; // minimum code length
		if (mm < j) {
			mm = j;
		}
		for (i = this.BMAX; i !== 0; i--) {
			if (c[i] !== 0) {
				break;
			}
		}
		g = i; // maximum code length
		if (mm > i) {
			mm = i;
		}

		// Adjust last length count to fill out codes, if needed
		for (y = 1 << j; j < i; j++, y <<= 1) {
			if ((y -= c[j]) < 0) {
				this.status = 2; // bad input: more codes than bits
				this.m = mm;
				return;
			}
		}
		if ((y -= c[i]) < 0) {
			this.status = 2;
			this.m = mm;
			return;
		}
		c[i] += y;

		// Generate starting offsets into the value table for each length
		x[1] = j = 0;
		p = c;
		pidx = 1;
		xp = 2;
		while (--i > 0) { // note that i == g from above
			x[xp++] = (j += p[pidx++]);
		}

		// Make a table of values in order of bit lengths
		p = b; pidx = 0;
		i = 0;
		do {
			if ((j = p[pidx++]) !== 0) {
				v[x[j]++] = i;
			}
		} while (++i < n);
		n = x[g]; // set n to length of v

		// Generate the Huffman codes and for each, make the table entries
		x[0] = i = 0; // first Huffman code is zero
		p = v; pidx = 0; // grab values in bit order
		h = -1; // no tables yet--level -1
		w = lx[0] = 0; // no bits decoded yet
		q = null; // ditto
		z = 0; // ditto

		// go through the bit lengths (k already is bits in shortest code)
		for (null; k <= g; k++) {
			a = c[k];
			while (a-- > 0) {
				// here i is the Huffman code of length k bits for value p[pidx]
				// make tables up to required level
				while (k > w + lx[1 + h]) {
					w += lx[1 + h]; // add bits already decoded
					h++;

					// compute minimum size table less than or equal to *m bits
					z = (z = g - w) > mm ? mm : z; // upper limit
					if ((f = 1 << (j = k - w)) > a + 1) { // try a k-w bit table
						// too few codes for k-w bit table
						f -= a + 1; // deduct codes from patterns left
						xp = k;
						while (++j < z) { // try smaller tables up to z bits
							if ((f <<= 1) <= c[++xp]) {
								break; // enough codes to use up j bits
							}
							f -= c[xp]; // else deduct codes from patterns
						}
					}
					if (w + j > el && w < el) {
						j = el - w; // make EOB code end at table
					}
					z = 1 << j; // table entries for j-bit table
					lx[1 + h] = j; // set table size in stack

					// allocate and link in new table
					q = [];
					for (o = 0; o < z; o++) {
						q[o] = new HuftNode();
					}

					if (!tail) {
						tail = this.root = new HuftList();
					} else {
						tail = tail.next = new HuftList();
					}
					tail.next = null;
					tail.list = q;
					u[h] = q; // table starts after link

					/* connect to last table, if there is one */
					if (h > 0) {
						x[h] = i; // save pattern for backing up
						r.b = lx[h]; // bits to dump before this table
						r.e = 16 + j; // bits in this table
						r.t = q; // pointer to this table
						j = (i & ((1 << w) - 1)) >> (w - lx[h]);
						u[h - 1][j].e = r.e;
						u[h - 1][j].b = r.b;
						u[h - 1][j].n = r.n;
						u[h - 1][j].t = r.t;
					}
				}

				// set up table entry in r
				r.b = k - w;
				if (pidx >= n) {
					r.e = 99; // out of values--invalid code
				} else if (p[pidx] < s) {
					r.e = (p[pidx] < 256 ? 16 : 15); // 256 is end-of-block code
					r.n = p[pidx++]; // simple code is just the value
				} else {
					r.e = e[p[pidx] - s]; // non-simple--look up in lists
					r.n = d[p[pidx++] - s];
				}

				// fill code-like entries with r //
				f = 1 << (k - w);
				for (j = i >> w; j < z; j += f) {
					q[j].e = r.e;
					q[j].b = r.b;
					q[j].n = r.n;
					q[j].t = r.t;
				}

				// backwards increment the k-bit code i
				for (j = 1 << (k - 1); (i & j) !== 0; j >>= 1) {
					i ^= j;
				}
				i ^= j;

				// backup over finished tables
				while ((i & ((1 << w) - 1)) !== x[h]) {
					w -= lx[h]; // don't need to update q
					h--;
				}
			}
		}

		/* return actual size of base table */
		this.m = lx[1];

		/* Return true (1) if we were given an incomplete table */
		this.status = ((y !== 0 && g !== 1) ? 1 : 0);
	}


	/* routines (inflate) */

	function GET_BYTE() {
		if (inflate_data.length === inflate_pos) {
			return -1;
		}
		return inflate_data[inflate_pos++] & 0xff;
	}

	function NEEDBITS(n) {
		while (bit_len < n) {
			bit_buf |= GET_BYTE() << bit_len;
			bit_len += 8;
		}
	}

	function GETBITS(n) {
		return bit_buf & MASK_BITS[n];
	}

	function DUMPBITS(n) {
		bit_buf >>= n;
		bit_len -= n;
	}

	function inflate_codes(buff, off, size) {
		// inflate (decompress) the codes in a deflated (compressed) block.
		// Return an error code or zero if it all goes ok.
		var e; // table entry flag/number of extra bits
		var t; // (HuftNode) pointer to table entry
		var n;

		if (size === 0) {
			return 0;
		}

		// inflate the coded data
		n = 0;
		for (;;) { // do until end of block
			NEEDBITS(bl);
			t = tl.list[GETBITS(bl)];
			e = t.e;
			while (e > 16) {
				if (e === 99) {
					return -1;
				}
				DUMPBITS(t.b);
				e -= 16;
				NEEDBITS(e);
				t = t.t[GETBITS(e)];
				e = t.e;
			}
			DUMPBITS(t.b);

			if (e === 16) { // then it's a literal
				wp &= WSIZE - 1;
				buff[off + n++] = slide[wp++] = t.n;
				if (n === size) {
					return size;
				}
				continue;
			}

			// exit if end of block
			if (e === 15) {
				break;
			}

			// it's an EOB or a length

			// get length of block to copy
			NEEDBITS(e);
			copy_leng = t.n + GETBITS(e);
			DUMPBITS(e);

			// decode distance of block to copy
			NEEDBITS(bd);
			t = td.list[GETBITS(bd)];
			e = t.e;

			while (e > 16) {
				if (e === 99) {
					return -1;
				}
				DUMPBITS(t.b);
				e -= 16;
				NEEDBITS(e);
				t = t.t[GETBITS(e)];
				e = t.e;
			}
			DUMPBITS(t.b);
			NEEDBITS(e);
			copy_dist = wp - t.n - GETBITS(e);
			DUMPBITS(e);

			// do the copy
			while (copy_leng > 0 && n < size) {
				copy_leng--;
				copy_dist &= WSIZE - 1;
				wp &= WSIZE - 1;
				buff[off + n++] = slide[wp++] = slide[copy_dist++];
			}

			if (n === size) {
				return size;
			}
		}

		method = -1; // done
		return n;
	}

	function inflate_stored(buff, off, size) {
		/* "decompress" an inflated type 0 (stored) block. */
		var n;

		// go to byte boundary
		n = bit_len & 7;
		DUMPBITS(n);

		// get the length and its complement
		NEEDBITS(16);
		n = GETBITS(16);
		DUMPBITS(16);
		NEEDBITS(16);
		if (n !== ((~bit_buf) & 0xffff)) {
			return -1; // error in compressed data
		}
		DUMPBITS(16);

		// read and output the compressed data
		copy_leng = n;

		n = 0;
		while (copy_leng > 0 && n < size) {
			copy_leng--;
			wp &= WSIZE - 1;
			NEEDBITS(8);
			buff[off + n++] = slide[wp++] = GETBITS(8);
			DUMPBITS(8);
		}

		if (copy_leng === 0) {
			method = -1; // done
		}
		return n;
	}

	function inflate_fixed(buff, off, size) {
		// decompress an inflated type 1 (fixed Huffman codes) block.  We should
		// either replace this with a custom decoder, or at least precompute the
		// Huffman tables.

		// if first time, set up tables for fixed blocks
		if (!fixed_tl) {
			var i; // temporary variable
			var l = []; // 288 length list for huft_build (initialized below)
			var h; // HuftBuild

			// literal table
			for (i = 0; i < 144; i++) {
				l[i] = 8;
			}
			for (null; i < 256; i++) {
				l[i] = 9;
			}
			for (null; i < 280; i++) {
				l[i] = 7;
			}
			for (null; i < 288; i++) { // make a complete, but wrong code set
				l[i] = 8;
			}
			fixed_bl = 7;

			h = new HuftBuild(l, 288, 257, cplens, cplext, fixed_bl);
			if (h.status !== 0) {
				console.error("HufBuild error: " + h.status);
				return -1;
			}
			fixed_tl = h.root;
			fixed_bl = h.m;

			// distance table
			for (i = 0; i < 30; i++) { // make an incomplete code set
				l[i] = 5;
			}
			fixed_bd = 5;

			h = new HuftBuild(l, 30, 0, cpdist, cpdext, fixed_bd);
			if (h.status > 1) {
				fixed_tl = null;
				console.error("HufBuild error: " + h.status);
				return -1;
			}
			fixed_td = h.root;
			fixed_bd = h.m;
		}

		tl = fixed_tl;
		td = fixed_td;
		bl = fixed_bl;
		bd = fixed_bd;
		return inflate_codes(buff, off, size);
	}

	function inflate_dynamic(buff, off, size) {
		// decompress an inflated type 2 (dynamic Huffman codes) block.
		var i; // temporary variables
		var j;
		var l; // last length
		var n; // number of lengths to get
		var t; // (HuftNode) literal/length code table
		var nb; // number of bit length codes
		var nl; // number of literal/length codes
		var nd; // number of distance codes
		var ll = [];
		var h; // (HuftBuild)

		// literal/length and distance code lengths
		for (i = 0; i < 286 + 30; i++) {
			ll[i] = 0;
		}

		// read in table lengths
		NEEDBITS(5);
		nl = 257 + GETBITS(5); // number of literal/length codes
		DUMPBITS(5);
		NEEDBITS(5);
		nd = 1 + GETBITS(5); // number of distance codes
		DUMPBITS(5);
		NEEDBITS(4);
		nb = 4 + GETBITS(4); // number of bit length codes
		DUMPBITS(4);
		if (nl > 286 || nd > 30) {
			return -1; // bad lengths
		}

		// read in bit-length-code lengths
		for (j = 0; j < nb; j++) {
			NEEDBITS(3);
			ll[border[j]] = GETBITS(3);
			DUMPBITS(3);
		}
		for (null; j < 19; j++) {
			ll[border[j]] = 0;
		}

		// build decoding table for trees--single level, 7 bit lookup
		bl = 7;
		h = new HuftBuild(ll, 19, 19, null, null, bl);
		if (h.status !== 0) {
			return -1; // incomplete code set
		}

		tl = h.root;
		bl = h.m;

		// read in literal and distance code lengths
		n = nl + nd;
		i = l = 0;
		while (i < n) {
			NEEDBITS(bl);
			t = tl.list[GETBITS(bl)];
			j = t.b;
			DUMPBITS(j);
			j = t.n;
			if (j < 16) { // length of code in bits (0..15)
				ll[i++] = l = j; // save last length in l
			} else if (j === 16) { // repeat last length 3 to 6 times
				NEEDBITS(2);
				j = 3 + GETBITS(2);
				DUMPBITS(2);
				if (i + j > n) {
					return -1;
				}
				while (j-- > 0) {
					ll[i++] = l;
				}
			} else if (j === 17) { // 3 to 10 zero length codes
				NEEDBITS(3);
				j = 3 + GETBITS(3);
				DUMPBITS(3);
				if (i + j > n) {
					return -1;
				}
				while (j-- > 0) {
					ll[i++] = 0;
				}
				l = 0;
			} else { // j === 18: 11 to 138 zero length codes
				NEEDBITS(7);
				j = 11 + GETBITS(7);
				DUMPBITS(7);
				if (i + j > n) {
					return -1;
				}
				while (j-- > 0) {
					ll[i++] = 0;
				}
				l = 0;
			}
		}

		// build the decoding tables for literal/length and distance codes
		bl = lbits;
		h = new HuftBuild(ll, nl, 257, cplens, cplext, bl);
		if (bl === 0) { // no literals or lengths
			h.status = 1;
		}
		if (h.status !== 0) {
			if (h.status !== 1) {
				return -1; // incomplete code set
			}
			// **incomplete literal tree**
		}
		tl = h.root;
		bl = h.m;

		for (i = 0; i < nd; i++) {
			ll[i] = ll[i + nl];
		}
		bd = dbits;
		h = new HuftBuild(ll, nd, 0, cpdist, cpdext, bd);
		td = h.root;
		bd = h.m;

		if (bd === 0 && nl > 257) { // lengths but no distances
			// **incomplete distance tree**
			return -1;
		}
/*
		if (h.status === 1) {
			// **incomplete distance tree**
		}
*/
		if (h.status !== 0) {
			return -1;
		}

		// decompress until an end-of-block code
		return inflate_codes(buff, off, size);
	}

	function inflate_start() {
		if (!slide) {
			slide = []; // new Array(2 * WSIZE); // slide.length is never called
		}
		wp = 0;
		bit_buf = 0;
		bit_len = 0;
		method = -1;
		eof = false;
		copy_leng = copy_dist = 0;
		tl = null;
	}

	function inflate_internal(buff, off, size) {
		// decompress an inflated entry
		var n, i;

		n = 0;
		while (n < size) {
			if (eof && method === -1) {
				return n;
			}

			if (copy_leng > 0) {
				if (method !== STORED_BLOCK) {
					// STATIC_TREES or DYN_TREES
					while (copy_leng > 0 && n < size) {
						copy_leng--;
						copy_dist &= WSIZE - 1;
						wp &= WSIZE - 1;
						buff[off + n++] = slide[wp++] = slide[copy_dist++];
					}
				} else {
					while (copy_leng > 0 && n < size) {
						copy_leng--;
						wp &= WSIZE - 1;
						NEEDBITS(8);
						buff[off + n++] = slide[wp++] = GETBITS(8);
						DUMPBITS(8);
					}
					if (copy_leng === 0) {
						method = -1; // done
					}
				}
				if (n === size) {
					return n;
				}
			}

			if (method === -1) {
				if (eof) {
					break;
				}

				// read in last block bit
				NEEDBITS(1);
				if (GETBITS(1) !== 0) {
					eof = true;
				}
				DUMPBITS(1);

				// read in block type
				NEEDBITS(2);
				method = GETBITS(2);
				DUMPBITS(2);
				tl = null;
				copy_leng = 0;
			}

			switch (method) {
			case STORED_BLOCK:
				i = inflate_stored(buff, off + n, size - n);
				break;

			case STATIC_TREES:
				if (tl) {
					i = inflate_codes(buff, off + n, size - n);
				} else {
					i = inflate_fixed(buff, off + n, size - n);
				}
				break;

			case DYN_TREES:
				if (tl) {
					i = inflate_codes(buff, off + n, size - n);
				} else {
					i = inflate_dynamic(buff, off + n, size - n);
				}
				break;

			default: // error
				i = -1;
				break;
			}

			if (i === -1) {
				if (eof) {
					return 0;
				}
				return -1;
			}
			n += i;
		}
		return n;
	}

	function inflate(arr) {
		var buff = [], i, str;

        // Fix: Convert from string
		if (typeof arr === "string") {
			str = arr;
			arr = [];
			for (i = 0; i < str.length; i++)
				arr[i] = str.charCodeAt(i);
		}

		inflate_start();
		inflate_data = arr;
		inflate_pos = 0;

		do {
			i = inflate_internal(buff, buff.length, 1024);
		} while (i > 0);
		inflate_data = null; // G.C.

		// Fix: Convert to string
		str = "";
		for (i = 0; i < buff.length; i++)
			str += String.fromCharCode(buff[i]);

		return str;
	}

    if (!window.RawDeflate) window.RawDeflate = {};
    window.RawDeflate.inflate = inflate;
}());

/* Blob.js
 * A Blob implementation.
 * 2013-06-20
 * 
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/eboyjr
 * Modified by Marcus Geelnard (2013-07-06) to support really large blobs
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

if (typeof Blob !== "function" || typeof URL === "undefined")
if (typeof Blob === "function" && typeof webkitURL !== "undefined") var URL = webkitURL;
else var Blob = (function (view) {
	"use strict";

	var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || view.MSBlobBuilder || (function(view) {
		var
			  get_class = function(object) {
				return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
			}
			, FakeBlobBuilder = function BlobBuilder() {
				this.data = [];
			}
			, FakeBlob = function Blob(data, type, encoding) {
				this.data = data;
				this.size = data.length;
				this.type = type;
				this.encoding = encoding;
			}
			, FBB_proto = FakeBlobBuilder.prototype
			, FB_proto = FakeBlob.prototype
			, FileReaderSync = view.FileReaderSync
			, FileException = function(type) {
				this.code = this[this.name = type];
			}
			, file_ex_codes = (
				  "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
				+ "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
			).split(" ")
			, file_ex_code = file_ex_codes.length
			, real_URL = view.URL || view.webkitURL || view
			, real_create_object_URL = real_URL.createObjectURL
			, real_revoke_object_URL = real_URL.revokeObjectURL
			, URL = real_URL
			, btoa = view.btoa
			, atob = view.atob
			, can_apply_typed_arrays = false
			, can_apply_typed_arrays_test = function(pass) {
				can_apply_typed_arrays = !pass;
			}
			
			, ArrayBuffer = view.ArrayBuffer
			, Uint8Array = view.Uint8Array
		;
		FakeBlob.fake = FB_proto.fake = true;
		while (file_ex_code--) {
			FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
		}
		try {
			if (Uint8Array) {
				can_apply_typed_arrays_test.apply(0, new Uint8Array(200 * 44100 * 4));
			}
		} catch (ex) {}
		if (!real_URL.createObjectURL) {
			URL = view.URL = {};
		}
		URL.createObjectURL = function(blob) {
			var
				  type = blob.type
				, data_URI_header
			;
			if (type === null) {
				type = "application/octet-stream";
			}
			if (blob instanceof FakeBlob) {
				data_URI_header = "data:" + type;
				if (blob.encoding === "base64") {
					return data_URI_header + ";base64," + blob.data;
				} else if (blob.encoding === "URI") {
					return data_URI_header + "," + decodeURIComponent(blob.data);
				} if (btoa) {
					return data_URI_header + ";base64," + btoa(blob.data);
				} else {
					return data_URI_header + "," + encodeURIComponent(blob.data);
				}
			} else if (real_create_object_URL) {
				return real_create_object_URL.call(real_URL, blob);
			}
		};
		URL.revokeObjectURL = function(object_URL) {
			if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
				real_revoke_object_URL.call(real_URL, object_URL);
			}
		};
		FBB_proto.append = function(data/*, endings*/) {
			var bb = this.data;
			// decode data to a binary string
			if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
				if (can_apply_typed_arrays) {
					bb.push(String.fromCharCode.apply(String, new Uint8Array(data)));
				} else {
					var
						  str = ""
						, buf = new Uint8Array(data)
						, i = 0
						, buf_len = buf.length
					;
					for (; i < buf_len; i++) {
						str += String.fromCharCode(buf[i]);
					}
					bb.push(str);
				}
			} else if (get_class(data) === "Blob" || get_class(data) === "File") {
				if (FileReaderSync) {
					var fr = new FileReaderSync;
					bb.push(fr.readAsBinaryString(data));
				} else {
					// async FileReader won't work as BlobBuilder is sync
					throw new FileException("NOT_READABLE_ERR");
				}
			} else if (data instanceof FakeBlob) {
				if (data.encoding === "base64" && atob) {
					bb.push(atob(data.data));
				} else if (data.encoding === "URI") {
					bb.push(decodeURIComponent(data.data));
				} else if (data.encoding === "raw") {
					bb.push(data.data);
				}
			} else {
				if (typeof data !== "string") {
					data += ""; // convert unsupported types to strings
				}
				// decode UTF-16 to binary string
				bb.push(unescape(encodeURIComponent(data)));
			}
		};
		FBB_proto.getBlob = function(type) {
			if (!arguments.length) {
				type = null;
			}
			return new FakeBlob(this.data.join(""), type, "raw");
		};
		FBB_proto.toString = function() {
			return "[object BlobBuilder]";
		};
		FB_proto.slice = function(start, end, type) {
			var args = arguments.length;
			if (args < 3) {
				type = null;
			}
			return new FakeBlob(
				  this.data.slice(start, args > 1 ? end : this.data.length)
				, type
				, this.encoding
			);
		};
		FB_proto.toString = function() {
			return "[object Blob]";
		};
		return FakeBlobBuilder;
	}(view));

	return function Blob(blobParts, options) {
		var type = options ? (options.type || "") : "";
		var builder = new BlobBuilder();
		if (blobParts) {
			for (var i = 0, len = blobParts.length; i < len; i++) {
				builder.append(blobParts[i]);
			}
		}
		return builder.getBlob(type);
	};
}(self));

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2013-01-23
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  || (navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator))
  || (function(view) {
	"use strict";
	var
		  doc = view.document
		  // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, URL = view.URL || view.webkitURL || view
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function (ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					URL.revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
                        window.open(object_url, "_blank");
                    }
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				save_link.href = object_url;
				save_link.download = name;
				click(save_link);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	return saveAs;
}(self));

/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// Initialize the MIDI library.
(function (global) {
    'use strict';
    var midiIO, _requestMIDIAccess, MIDIAccess, _onReady, MIDIPort, MIDIInput, MIDIOutput, _midiProc;

    function Promise() {

    }

    Promise.prototype.then = function(accept, reject) {
        this.accept = accept; 
        this.reject = reject;
    }

    Promise.prototype.succeed = function(access) {
        if (this.accept)
            this.accept(access);
    }

    Promise.prototype.fail = function(error) {
        if (this.reject)
            this.reject(error);
    }

    function _JazzInstance() {
        this.inputInUse = false;
        this.outputInUse = false;

        // load the Jazz plugin
        var o1 = document.createElement("object");
        o1.id = "_Jazz" + Math.random() + "ie";
        o1.classid = "CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90";

        this.activeX = o1;

        var o2 = document.createElement("object");
        o2.id = "_Jazz" + Math.random();
        o2.type="audio/x-jazz";
        o1.appendChild(o2);

        this.objRef = o2;

        var e = document.createElement("p");
        e.appendChild(document.createTextNode("This page requires the "));

        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Jazz plugin"));
        a.href = "http://jazz-soft.net/";

        e.appendChild(a);
        e.appendChild(document.createTextNode("."));
        o2.appendChild(e);

        var insertionPoint = document.getElementById("MIDIPlugin");
        if (!insertionPoint) {
            // Create hidden element
            var insertionPoint = document.createElement("div");
            insertionPoint.id = "MIDIPlugin";
            insertionPoint.style.position = "absolute";
            insertionPoint.style.visibility = "hidden";
            insertionPoint.style.left = "-9999px";
            insertionPoint.style.top = "-9999px";
            document.body.appendChild(insertionPoint);
        }
        insertionPoint.appendChild(o1);

        if (this.objRef.isJazz)
            this._Jazz = this.objRef;
        else if (this.activeX.isJazz)
            this._Jazz = this.activeX;
        else
            this._Jazz = null;
        if (this._Jazz) {
            this._Jazz._jazzTimeZero = this._Jazz.Time();
            this._Jazz._perfTimeZero = window.performance.now();
        }
    }

    _requestMIDIAccess = function _requestMIDIAccess() {
        var access = new MIDIAccess();
        return access._promise;
    };

    // API Methods

    function MIDIAccess() {
        this._jazzInstances = new Array();
        this._jazzInstances.push( new _JazzInstance() );
        this._promise = new Promise;

        if (this._jazzInstances[0]._Jazz) {
            this._Jazz = this._jazzInstances[0]._Jazz;
            window.setTimeout( _onReady.bind(this), 3 );
        } else {
            window.setTimeout( _onNotReady.bind(this), 3 );
        }
    };

    _onReady = function _onReady() {
        if (this._promise)
            this._promise.succeed(this);
    };

    function _onNotReady() {
        if (this._promise)
            this._promise.fail( { code: 1 } );
    };

    MIDIAccess.prototype.inputs = function(  ) {
        if (!this._Jazz)
              return null;
        var list=this._Jazz.MidiInList();
        var inputs = new Array( list.length );

        for ( var i=0; i<list.length; i++ ) {
            inputs[i] = new MIDIInput( this, list[i], i );
        }
        return inputs;
    }

    MIDIAccess.prototype.outputs = function(  ) {
        if (!this._Jazz)
            return null;
        var list=this._Jazz.MidiOutList();
        var outputs = new Array( list.length );

        for ( var i=0; i<list.length; i++ ) {
            outputs[i] = new MIDIOutput( this, list[i], i );
        }
        return outputs;
    };

    MIDIInput = function MIDIInput( midiAccess, name, index ) {
        this._listeners = [];
        this._midiAccess = midiAccess;
        this._index = index;
        this._inLongSysexMessage = false;
        this._sysexBuffer = new Uint8Array();
        this.id = "" + index + "." + name;
        this.manufacturer = "";
        this.name = name;
        this.type = "input";
        this.version = "";
        this.onmidimessage = null;

        var inputInstance = null;
        for (var i=0; (i<midiAccess._jazzInstances.length)&&(!inputInstance); i++) {
            if (!midiAccess._jazzInstances[i].inputInUse)
                inputInstance=midiAccess._jazzInstances[i];
        }
        if (!inputInstance) {
            inputInstance = new _JazzInstance();
            midiAccess._jazzInstances.push( inputInstance );
        }
        inputInstance.inputInUse = true;

        this._jazzInstance = inputInstance._Jazz;
        this._input = this._jazzInstance.MidiInOpen( this._index, _midiProc.bind(this) );
    };

    // Introduced in DOM Level 2:
    MIDIInput.prototype.addEventListener = function (type, listener, useCapture ) {
        if (type !== "midimessage")
            return;
        for (var i=0; i<this._listeners.length; i++)
            if (this._listeners[i] == listener)
                return;
        this._listeners.push( listener );
    };

    MIDIInput.prototype.removeEventListener = function (type, listener, useCapture ) {
        if (type !== "midimessage")
            return;
        for (var i=0; i<this._listeners.length; i++)
            if (this._listeners[i] == listener) {
                this._listeners.splice( i, 1 );  //remove it
                return;
            }
    };

    MIDIInput.prototype.preventDefault = function() {
        this._pvtDef = true;
    };

    MIDIInput.prototype.dispatchEvent = function (evt) {
        this._pvtDef = false;

        // dispatch to listeners
        for (var i=0; i<this._listeners.length; i++)
            if (this._listeners[i].handleEvent)
                this._listeners[i].handleEvent.bind(this)( evt );
            else
                this._listeners[i].bind(this)( evt );

        if (this.onmidimessage)
            this.onmidimessage( evt );

        return this._pvtDef;
    };

    MIDIInput.prototype.appendToSysexBuffer = function ( data ) {
        var oldLength = this._sysexBuffer.length;
        var tmpBuffer = new Uint8Array( oldLength + data.length );
        tmpBuffer.set( this._sysexBuffer );
        tmpBuffer.set( data, oldLength );
        this._sysexBuffer = tmpBuffer;
    };

    MIDIInput.prototype.bufferLongSysex = function ( data, initialOffset ) {
        var j = initialOffset;
        while (j<data.length) {
            if (data[j] == 0xF7) {
                // end of sysex!
                j++;
                this.appendToSysexBuffer( data.slice(initialOffset, j) );
                return j;
            }
            j++;
        }
        // didn't reach the end; just tack it on.
        this.appendToSysexBuffer( data.slice(initialOffset, j) );
        this._inLongSysexMessage = true;
        return j;
    };

    _midiProc = function _midiProc( timestamp, data ) {
        // Have to use createEvent/initEvent because IE10 fails on new CustomEvent.  Thanks, IE!
        var length = 0;
        var i,j;
        var isSysexMessage = false;

        // Jazz sometimes passes us multiple messages at once, so we need to parse them out
        // and pass them one at a time.

        for (i=0; i<data.length; i+=length) {
            if (this._inLongSysexMessage) {
                i = this.bufferLongSysex(data,i);
                if ( data[i-1] != 0xf7 ) {
                    // ran off the end without hitting the end of the sysex message
                    return;
                }
                isSysexMessage = true;
            } else {
                isSysexMessage = false;
                switch (data[i] & 0xF0) {
                    case 0x80:  // note off
                    case 0x90:  // note on
                    case 0xA0:  // polyphonic aftertouch
                    case 0xB0:  // control change
                    case 0xE0:  // channel mode
                        length = 3;
                        break;

                    case 0xC0:  // program change
                    case 0xD0:  // channel aftertouch
                        length = 2;
                        break;

                    case 0xF0:
                        switch (data[i]) {
                            case 0xf0:  // variable-length sysex.
                                i = this.bufferLongSysex(data,i);
                                if ( data[i-1] != 0xf7 ) {
                                    // ran off the end without hitting the end of the sysex message
                                    return;
                                }
                                isSysexMessage = true;
                                break;

                            case 0xF1:  // MTC quarter frame
                            case 0xF3:  // song select
                                length = 2;
                                break;

                            case 0xF2:  // song position pointer
                                length = 3;
                                break;

                            default:
                                length = 1;
                                break;
                        }
                        break;
                }
            }
            var evt = document.createEvent( "Event" );
            evt.initEvent( "midimessage", false, false );
            evt.receivedTime = parseFloat( timestamp.toString()) + this._jazzInstance._perfTimeZero;
            if (isSysexMessage || this._inLongSysexMessage) {
                evt.data = new Uint8Array( this._sysexBuffer );
                this._sysexBuffer.length = 0;
                this._inLongSysexMessage = false;
            } else
                evt.data = new Uint8Array(data.slice(i, length+i));
            this.dispatchEvent( evt );
        }
    };

    MIDIOutput = function MIDIOutput( midiAccess, name, index ) {
        this._listeners = [];
        this._midiAccess = midiAccess;
        this._index = index;
        this.id = "" + index + "." + name;
        this.manufacturer = "";
        this.name = name;
        this.type = "output";
        this.version = "";

        var outputInstance = null;
        for (var i=0; (i<midiAccess._jazzInstances.length)&&(!outputInstance); i++) {
            if (!midiAccess._jazzInstances[i].outputInUse)
                outputInstance=midiAccess._jazzInstances[i];
        }
        if (!outputInstance) {
            outputInstance = new _JazzInstance();
            midiAccess._jazzInstances.push( outputInstance );
        }
        outputInstance.outputInUse = true;

        this._jazzInstance = outputInstance._Jazz;
        this._jazzInstance.MidiOutOpen(this.name);
    };

    function _sendLater() {
        this.jazz.MidiOutLong( this.data );    // handle send as sysex
    }

    MIDIOutput.prototype.send = function( data, timestamp ) {
        var delayBeforeSend = 0;
        if (data.length === 0)
            return false;

        if (timestamp)
            delayBeforeSend = Math.floor( timestamp - window.performance.now() );

        if (timestamp && (delayBeforeSend>1)) {
            var sendObj = new Object();
            sendObj.jazz = this._jazzInstance;
            sendObj.data = data;

            window.setTimeout( _sendLater.bind(sendObj), delayBeforeSend );
        } else {
            this._jazzInstance.MidiOutLong( data );
        }
        return true;
    };

    //init: create plugin
    if (!window.navigator.requestMIDIAccess)
        window.navigator.requestMIDIAccess = _requestMIDIAccess;

}(window));

// Polyfill window.performance.now() if necessary.
(function (exports) {
    var perf = {}, props;

    function findAlt() {
        var prefix = ['moz', 'webkit', 'o', 'ms'],
        i = prefix.length,
            //worst case, we use Date.now()
            props = {
                value: (function (start) {
                    return function () {
                        return Date.now() - start;
                    };
                }(Date.now()))
            };

        //seach for vendor prefixed version
        for (; i >= 0; i--) {
            if ((prefix[i] + "Now") in exports.performance) {
                props.value = function (method) {
                    return function () {
                        exports.performance[method]();
                    }
                }(prefix[i] + "Now");
                return props;
            }
        }

        //otherwise, try to use connectionStart
        if ("timing" in exports.performance && "connectStart" in exports.performance.timing) {
            //this pretty much approximates performance.now() to the millisecond
            props.value = (function (start) {
                return function() {
                    Date.now() - start;
                };
            }(exports.performance.timing.connectStart));
        }
        return props;
    }

    //if already defined, bail
    if (("performance" in exports) && ("now" in exports.performance))
        return;
    if (!("performance" in exports))
        Object.defineProperty(exports, "performance", {
            get: function () {
                return perf;
            }});
        //otherwise, performance is there, but not "now()"

    props = findAlt();
    Object.defineProperty(exports.performance, "now", props);
}(window));

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
"use strict";

/**
 * Helper class for getting high precision timing info from an audio element
 * (e.g. Firefox Audio.currentTime has < 60 Hz precision, leading to choppy
 * animations etc).
 */
var CAudioTimer = function () {
    var mAudioElement = null,
        mStartT       = 0,
        mErrHist      = [0, 0, 0, 0, 0, 0],
        mErrHistPos   = 0;

    this.setAudioElement = function (audioElement) {
        mAudioElement = audioElement;
    };

    this.currentTime = function () {
        if (!mAudioElement) {
            return 0;
        }

        // Calculate current time according to Date()
        var t           = (new Date()).getTime() * 0.001,
            currentTime = t - mStartT,
            i;

        // Get current time according to the audio element
        var audioCurrentTime = mAudioElement.currentTime;

        // Check if we are off by too much - in which case we will use the time
        // from the audio element
        var err = audioCurrentTime - currentTime;

        if (audioCurrentTime < 0.01 || err > 0.2 || err < -0.2) {
            currentTime = audioCurrentTime;
            mStartT = t - currentTime;

            for (i = 0; i < mErrHist.length; i++) {
                mErrHist[i] = 0;
            }
        }

        // Error compensation (this should fix the problem when we're constantly
        // slightly off)
        var comp = 0;

        for (i = 0; i < mErrHist.length; i++) {
            comp += mErrHist[i];
        }

        comp /= mErrHist.length;
        mErrHist[mErrHistPos] = err;
        mErrHistPos = (mErrHistPos + 1) % mErrHist.length;

        return currentTime + comp;
    };

    this.reset = function () {
        mStartT = (new Date()).getTime() * 0.001;

        for (var i = 0; i < mErrHist.length; i++) {
            mErrHist[i] = 0;
        }
    };
};
"use strict";

//------------------------------------------------------------------------------
// GUI class
//------------------------------------------------------------------------------

var CGUI = function () {
    var imgPath = "tracker/image/gui/";

    // Edit modes
    var EDIT_NONE     = 0,
        EDIT_SEQUENCE = 1,
        EDIT_PATTERN  = 2,
        EDIT_FXTRACK  = 3;

    // Misc constants
    var MAX_SONG_ROWS = 128,
        MAX_PATTERNS  = 36;

    // Edit/gui state
    var mEditMode              = EDIT_PATTERN,
        mKeyboardOctave        = 5,
        mPatternCol            = 0,
        mPatternRow            = 0,
        mPatternCol2           = 0,
        mPatternRow2           = 0,
        mSeqCol                = 0,
        mSeqRow                = 0,
        mSeqCol2               = 0,
        mSeqRow2               = 0,
        mFxTrackRow            = 0,
        mFxTrackRow2           = 0,
        mSelectingSeqRange     = false,
        mSelectingPatternRange = false,
        mSelectingFxRange      = false,
        mSeqCopyBuffer         = [],
        mPatCopyBuffer         = [],
        mFxCopyBuffer          = [],
        mInstrCopyBuffer       = [];

    // Parsed URL data
    var mBaseURL,
        mGETParams;

    // Resources
    var mSong       = {},
        mAudio      = null,
        mAudioTimer = new CAudioTimer(),
        mPlayer     = new CPlayer(),
        mJammer     = new CJammer();

    // Constant look-up-tables
    var mNoteNames = [
        'C-', 'C#', 'D-', 'D#', 'E-', 'F-', 'F#', 'G-', 'G#', 'A-', 'A#', 'B-'
    ];

    var mBlackKeyPos = [
        26, 1, 63, 3, 116, 6, 150, 8, 184, 10, 238, 13, 274, 15, 327, 18, 362, 20, 394, 22
    ];

    // Prealoaded resources
    var mPreload = [];

    //--------------------------------------------------------------------------
    // URL parsing & generation
    //--------------------------------------------------------------------------

    var getURLBase = function (url) {
        var queryStart = url.indexOf("?");
        return url.slice(0, queryStart >= 0 ? queryStart : url.length);
    };

    var parseURLGetData = function (url) {
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
    };

    var getURLSongData = function (dataParam) {
        var songData = undefined;

        if (dataParam) {
            var str = dataParam, str2 = "";

            if (str.indexOf("data:") == 0) {
                // This is a data: URI (e.g. data:application/x-extension-sbx;base64,....)
                var idx = str.indexOf("base64,");

                if (idx > 0) {
                    str2 = str.substr(idx + 7);
                }
            } else {
                // This is GET data from an http URL
                for (var i = 0; i < str.length; ++i) {
                    var chr = str[i];

                    if (chr === "-") {
                        chr = "+";
                    }

                    if (chr === "_") {
                        chr = "/";
                    }

                    str2 += chr;
                }
            }

            try {
                //noinspection JSValidateTypes
                songData = atob(str2);
            } catch (err) {
                songData = undefined;
            }
        }

        return songData;
    };

    var makeURLSongData = function (data) {
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

        return mBaseURL + "?data=" + str2;
    };

    //--------------------------------------------------------------------------
    // Song import/export functions
    //--------------------------------------------------------------------------

    var calcSamplesPerRow = function (bpm) {
        return Math.round((60 * 44100 / 4) / bpm);
    };

    var getBPM = function () {
        return Math.round((60 * 44100 / 4) / mSong.rowLen);
    };

    // Instrument property indices
    var OSC1_WAVEFORM = 0,
        OSC1_VOL      = 1,
        OSC1_SEMI     = 2,
        OSC1_XENV     = 3,

        OSC2_WAVEFORM = 4,
        OSC2_VOL      = 5,
        OSC2_SEMI     = 6,
        OSC2_DETUNE   = 7,
        OSC2_XENV     = 8,

        NOISE_VOL     = 9,

        ENV_ATTACK    = 10,
        ENV_SUSTAIN   = 11,
        ENV_RELEASE   = 12,

        LFO_WAVEFORM  = 13,
        LFO_AMT       = 14,
        LFO_FREQ      = 15,
        LFO_FX_FREQ   = 16,

        FX_FILTER     = 17,
        FX_FREQ       = 18,
        FX_RESONANCE  = 19,
        FX_DIST       = 20,
        FX_DRIVE      = 21,
        FX_PAN_AMT    = 22,
        FX_PAN_FREQ   = 23,
        FX_DELAY_AMT  = 24,
        FX_DELAY_TIME = 25;

    var makeNewSong = function () {
        var song = {}, i, j, k, instr, col;

        // Row length
        song.rowLen = calcSamplesPerRow(120);

        // Last pattern to play
        song.endPattern = 2;

        // Rows per pattern
        song.patternLen = 32;

        // Select the default instrument from the presets
        var defaultInstr;

        for (i = 0; i < gInstrumentPresets.length; ++i) {
            if (gInstrumentPresets[i].i) {
                defaultInstr = gInstrumentPresets[i];
                break;
            }
        }

        // All 8 instruments
        song.songData = [];

        for (i = 0; i < 8; i++) {
            instr = {};
            instr.i = [];

            // Copy the default instrument
            for (j = 0; j <= defaultInstr.i.length; ++j) {
                instr.i[j] = defaultInstr.i[j];
            }

            // Sequence
            instr.p = [];
            for (j = 0; j < MAX_SONG_ROWS; j++) {
                instr.p[j] = 0;
            }

            // Patterns
            instr.c = [];

            for (j = 0; j < MAX_PATTERNS; j++) {
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

            song.songData[i] = instr;
        }

        // Make a first empty pattern
        song.songData[0].p[0] = 1;

        return song;
    };

    var songToBin = function (song) {
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
            bin.putUBYTE(instr.i[OSC1_WAVEFORM]);
            bin.putUBYTE(instr.i[OSC1_VOL]);
            bin.putUBYTE(instr.i[OSC1_SEMI]);
            bin.putUBYTE(instr.i[OSC1_XENV]);

            // Oscillator 2
            bin.putUBYTE(instr.i[OSC2_WAVEFORM]);
            bin.putUBYTE(instr.i[OSC2_VOL]);
            bin.putUBYTE(instr.i[OSC2_SEMI]);
            bin.putUBYTE(instr.i[OSC2_DETUNE]);
            bin.putUBYTE(instr.i[OSC2_XENV]);

            // Noise oscillator
            bin.putUBYTE(instr.i[NOISE_VOL]);

            // Envelope
            bin.putUBYTE(instr.i[ENV_ATTACK]);
            bin.putUBYTE(instr.i[ENV_SUSTAIN]);
            bin.putUBYTE(instr.i[ENV_RELEASE]);

            // LFO
            bin.putUBYTE(instr.i[LFO_WAVEFORM]);
            bin.putUBYTE(instr.i[LFO_AMT]);
            bin.putUBYTE(instr.i[LFO_FREQ]);
            bin.putUBYTE(instr.i[LFO_FX_FREQ]);

            // Effects
            bin.putUBYTE(instr.i[FX_FILTER]);
            bin.putUBYTE(instr.i[FX_FREQ]);
            bin.putUBYTE(instr.i[FX_RESONANCE]);
            bin.putUBYTE(instr.i[FX_DIST]);
            bin.putUBYTE(instr.i[FX_DRIVE]);
            bin.putUBYTE(instr.i[FX_PAN_AMT]);
            bin.putUBYTE(instr.i[FX_PAN_FREQ]);
            bin.putUBYTE(instr.i[FX_DELAY_AMT]);
            bin.putUBYTE(instr.i[FX_DELAY_TIME]);

            // Patterns
            for (j = 0; j < MAX_SONG_ROWS; j++) {
                bin.putUBYTE(instr.p[j]);
            }

            // Columns
            for (j = 0; j < MAX_PATTERNS; j++) {
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
    };

    var soundboxBinToSong = function (d) {
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
                instr.i[OSC1_SEMI] = bin.getUBYTE();
                instr.i[OSC1_XENV] = bin.getUBYTE();
                instr.i[OSC1_VOL] = bin.getUBYTE();
                instr.i[OSC1_WAVEFORM] = bin.getUBYTE();
            } else {
                instr.i[OSC1_WAVEFORM] = bin.getUBYTE();
                instr.i[OSC1_VOL] = bin.getUBYTE();
                instr.i[OSC1_SEMI] = bin.getUBYTE();
                instr.i[OSC1_XENV] = bin.getUBYTE();
            }

            // Oscillator 2
            if (version < 6) {
                instr.i[OSC2_SEMI] = bin.getUBYTE();
                instr.i[OSC2_DETUNE] = bin.getUBYTE();
                instr.i[OSC2_XENV] = bin.getUBYTE();
                instr.i[OSC2_VOL] = bin.getUBYTE();
                instr.i[OSC2_WAVEFORM] = bin.getUBYTE();
            } else {
                instr.i[OSC2_WAVEFORM] = bin.getUBYTE();
                instr.i[OSC2_VOL] = bin.getUBYTE();
                instr.i[OSC2_SEMI] = bin.getUBYTE();
                instr.i[OSC2_DETUNE] = bin.getUBYTE();
                instr.i[OSC2_XENV] = bin.getUBYTE();
            }

            // Noise oscillator
            instr.i[NOISE_VOL] = bin.getUBYTE();

            // Envelope
            if (version < 5) {
                instr.i[ENV_ATTACK] = Math.round(Math.sqrt(bin.getULONG()) / 2);
                instr.i[ENV_SUSTAIN] = Math.round(Math.sqrt(bin.getULONG()) / 2);
                instr.i[ENV_RELEASE] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            } else {
                instr.i[ENV_ATTACK] = bin.getUBYTE();
                instr.i[ENV_SUSTAIN] = bin.getUBYTE();
                instr.i[ENV_RELEASE] = bin.getUBYTE();
            }

            if (version < 6) {
                // Effects
                instr.i[FX_FILTER] = bin.getUBYTE();

                if (version < 5) {
                    instr.i[FX_FREQ] = Math.round(bin.getUSHORT() / 43.23529);
                } else {
                    instr.i[FX_FREQ] = bin.getUBYTE();
                }

                instr.i[FX_RESONANCE] = bin.getUBYTE();

                instr.i[FX_DELAY_TIME] = bin.getUBYTE();
                instr.i[FX_DELAY_AMT] = bin.getUBYTE();
                instr.i[FX_PAN_FREQ] = bin.getUBYTE();
                instr.i[FX_PAN_AMT] = bin.getUBYTE();
                instr.i[FX_DIST] = bin.getUBYTE();
                instr.i[FX_DRIVE] = bin.getUBYTE();

                // LFO
                instr.i[LFO_FX_FREQ] = bin.getUBYTE();
                instr.i[LFO_FREQ] = bin.getUBYTE();
                instr.i[LFO_AMT] = bin.getUBYTE();
                instr.i[LFO_WAVEFORM] = bin.getUBYTE();
            }
            else {
                // LFO
                instr.i[LFO_WAVEFORM] = bin.getUBYTE();
                instr.i[LFO_AMT] = bin.getUBYTE();
                instr.i[LFO_FREQ] = bin.getUBYTE();
                instr.i[LFO_FX_FREQ] = bin.getUBYTE();

                // Effects
                instr.i[FX_FILTER] = bin.getUBYTE();
                instr.i[FX_FREQ] = bin.getUBYTE();
                instr.i[FX_RESONANCE] = bin.getUBYTE();
                instr.i[FX_DIST] = bin.getUBYTE();
                instr.i[FX_DRIVE] = bin.getUBYTE();
                instr.i[FX_PAN_AMT] = bin.getUBYTE();
                instr.i[FX_PAN_FREQ] = bin.getUBYTE();
                instr.i[FX_DELAY_AMT] = bin.getUBYTE();
                instr.i[FX_DELAY_TIME] = bin.getUBYTE();
            }

            // Patterns
            var song_rows = version < 9 ? 48 : MAX_SONG_ROWS;
            instr.p = [];

            for (j = 0; j < song_rows; j++) {
                instr.p[j] = bin.getUBYTE();
            }

            for (j = song_rows; j < MAX_SONG_ROWS; j++) {
                instr.p[j] = 0;
            }

            // Columns
            var num_patterns = version < 9 ? 10 : MAX_PATTERNS;

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

            for (j = num_patterns; j < MAX_PATTERNS; j++) {
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
                if (instr.i[OSC1_WAVEFORM] == 2) {
                    instr.i[OSC1_VOL] = Math.round(instr.i[OSC1_VOL] / 2);
                }

                if (instr.i[OSC2_WAVEFORM] == 2) {
                    instr.i[OSC2_VOL] = Math.round(instr.i[OSC2_VOL] / 2);
                }

                if (instr.i[LFO_WAVEFORM] == 2) {
                    instr.i[LFO_AMT] = Math.round(instr.i[LFO_AMT] / 2);
                }

                instr.i[FX_DRIVE] = instr.i[FX_DRIVE] < 224 ? instr.i[FX_DRIVE] + 32 : 255;
            }

            if (version < 7) {
                instr.i[FX_RESONANCE] = 255 - instr.i[FX_RESONANCE];
            }

            song.songData[i] = instr;
        }

        return song;
    };

    var sonantBinToSong = function (d) {
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
            instr.i[OSC1_SEMI] = 12 * (bin.getUBYTE() - 8) + 128;
            instr.i[OSC1_SEMI] += bin.getUBYTE();
            bin.getUBYTE(); // Skip (detune)
            instr.i[OSC1_XENV] = bin.getUBYTE();
            instr.i[OSC1_VOL] = bin.getUBYTE();
            instr.i[OSC1_WAVEFORM] = bin.getUBYTE();

            // Oscillator 2
            instr.i[OSC2_SEMI] = 12 * (bin.getUBYTE() - 8) + 128;
            instr.i[OSC2_SEMI] += bin.getUBYTE();
            instr.i[OSC2_DETUNE] = bin.getUBYTE();
            instr.i[OSC2_XENV] = bin.getUBYTE();
            instr.i[OSC2_VOL] = bin.getUBYTE();
            instr.i[OSC2_WAVEFORM] = bin.getUBYTE();

            // Noise oscillator
            instr.i[NOISE_VOL] = bin.getUBYTE();
            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!

            // Envelope
            instr.i[ENV_ATTACK] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            instr.i[ENV_SUSTAIN] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            instr.i[ENV_RELEASE] = Math.round(Math.sqrt(bin.getULONG()) / 2);
            master = bin.getUBYTE(); // env_master

            // Effects
            instr.i[FX_FILTER] = bin.getUBYTE();
            bin.getUBYTE(); // Pad!
            bin.getUBYTE(); // Pad!
            instr.i[FX_FREQ] = Math.round(bin.getFLOAT() / 43.23529);
            instr.i[FX_RESONANCE] = 255 - bin.getUBYTE();
            instr.i[FX_DELAY_TIME] = bin.getUBYTE();
            instr.i[FX_DELAY_AMT] = bin.getUBYTE();
            instr.i[FX_PAN_FREQ] = bin.getUBYTE();
            instr.i[FX_PAN_AMT] = bin.getUBYTE();
            instr.i[FX_DIST] = 0;
            instr.i[FX_DRIVE] = 32;

            // LFO
            bin.getUBYTE(); // Skip! (lfo_osc1_freq)
            instr.i[LFO_FX_FREQ] = bin.getUBYTE();
            instr.i[LFO_FREQ] = bin.getUBYTE();
            instr.i[LFO_AMT] = bin.getUBYTE();
            instr.i[LFO_WAVEFORM] = bin.getUBYTE();

            // Patterns
            instr.p = [];

            for (j = 0; j < 48; j++) {
                instr.p[j] = bin.getUBYTE();
            }

            for (j = 48; j < MAX_SONG_ROWS; j++) {
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

            for (j = 10; j < MAX_PATTERNS; j++) {
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
            if (instr.i[FX_FILTER] < 1 || instr.i[FX_FILTER] > 3) {
                instr.i[FX_FILTER] = 2;
                instr.i[FX_FREQ] = 255; // 11025;
            }

            instr.i[OSC1_VOL] *= master / 255;
            instr.i[OSC2_VOL] *= master / 255;
            instr.i[NOISE_VOL] *= master / 255;

            if (instr.i[OSC1_WAVEFORM] == 2) {
                instr.i[OSC1_VOL] /= 2;
            }

            if (instr.i[OSC2_WAVEFORM] == 2) {
                instr.i[OSC2_VOL] /= 2;
            }

            if (instr.i[LFO_WAVEFORM] == 2) {
                instr.i[LFO_AMT] /= 2;
            }

            instr.i[OSC1_VOL] = Math.round(instr.i[OSC1_VOL]);
            instr.i[OSC2_VOL] = Math.round(instr.i[OSC2_VOL]);
            instr.i[NOISE_VOL] = Math.round(instr.i[NOISE_VOL]);
            instr.i[LFO_AMT] = Math.round(instr.i[LFO_AMT]);

            song.songData[i] = instr;
        }

        // Last pattern to play
        song.endPattern = bin.getUBYTE() + 2;

        return song;
    };

    var binToSong = function (d) {
        // Try to parse the binary data as a SoundBox song
        var song = soundboxBinToSong(d);

        // Try to parse the binary data as a Sonant song
        if (!song) {
            song = sonantBinToSong(d);
        }

        // If we couldn't parse the song, just make a clean new song
        if (!song) {
            alert("Song format not recognized.");
            return undefined;
        }

        return song;
    };

    var songToJS = function (song) {
        var i, j, k, pattern,
            jsData = "";

        jsData += "    // This music has been exported by SoundBox. You can use it with\n";
        jsData += "    // http://sb.bitsnbites.eu/player-small.js in your own product.\n\n";

        jsData += "    // See http://sb.bitsnbites.eu/demo.html for an example of how to\n";
        jsData += "    // use it in a demo.\n\n";

        jsData += "    // Song data\n";
        jsData += "    var song = {\n";

        jsData += "      songData: [\n";

        for (i = 0; i < 8; i++) {
            var instr = song.songData[i];

            jsData += "        { // Instrument " + i + "\n";
            jsData += "          i: [\n";
            jsData += "          " + instr.i[OSC1_WAVEFORM] + ", // OSC1_WAVEFORM\n";
            jsData += "          " + instr.i[OSC1_VOL] + ", // OSC1_VOL\n";
            jsData += "          " + instr.i[OSC1_SEMI] + ", // OSC1_SEMI\n";
            jsData += "          " + instr.i[OSC1_XENV] + ", // OSC1_XENV\n";
            jsData += "          " + instr.i[OSC2_WAVEFORM] + ", // OSC2_WAVEFORM\n";
            jsData += "          " + instr.i[OSC2_VOL] + ", // OSC2_VOL\n";
            jsData += "          " + instr.i[OSC2_SEMI] + ", // OSC2_SEMI\n";
            jsData += "          " + instr.i[OSC2_DETUNE] + ", // OSC2_DETUNE\n";
            jsData += "          " + instr.i[OSC2_XENV] + ", // OSC2_XENV\n";
            jsData += "          " + instr.i[NOISE_VOL] + ", // NOISE_VOL\n";
            jsData += "          " + instr.i[ENV_ATTACK] + ", // ENV_ATTACK\n";
            jsData += "          " + instr.i[ENV_SUSTAIN] + ", // ENV_SUSTAIN\n";
            jsData += "          " + instr.i[ENV_RELEASE] + ", // ENV_RELEASE\n";
            jsData += "          " + instr.i[LFO_WAVEFORM] + ", // LFO_WAVEFORM\n";
            jsData += "          " + instr.i[LFO_AMT] + ", // LFO_AMT\n";
            jsData += "          " + instr.i[LFO_FREQ] + ", // LFO_FREQ\n";
            jsData += "          " + instr.i[LFO_FX_FREQ] + ", // LFO_FX_FREQ\n";
            jsData += "          " + instr.i[FX_FILTER] + ", // FX_FILTER\n";
            jsData += "          " + instr.i[FX_FREQ] + ", // FX_FREQ\n";
            jsData += "          " + instr.i[FX_RESONANCE] + ", // FX_RESONANCE\n";
            jsData += "          " + instr.i[FX_DIST] + ", // FX_DIST\n";
            jsData += "          " + instr.i[FX_DRIVE] + ", // FX_DRIVE\n";
            jsData += "          " + instr.i[FX_PAN_AMT] + ", // FX_PAN_AMT\n";
            jsData += "          " + instr.i[FX_PAN_FREQ] + ", // FX_PAN_FREQ\n";
            jsData += "          " + instr.i[FX_DELAY_AMT] + ", // FX_DELAY_AMT\n";
            jsData += "          " + instr.i[FX_DELAY_TIME] + " // FX_DELAY_TIME\n";
            jsData += "          ],\n";

            // Sequencer data for this instrument
            jsData += "          // Patterns\n";
            jsData += "          p: [";

            var lastRow    = song.endPattern - 2,
                maxPattern = 0, lastNonZero = 0;

            for (j = 0; j <= lastRow; j++) {
                pattern = instr.p[j];

                if (pattern > maxPattern) {
                    maxPattern = pattern;
                }

                if (pattern) {
                    lastNonZero = j;
                }
            }

            for (j = 0; j <= lastNonZero; j++) {
                pattern = instr.p[j];

                if (pattern) {
                    jsData += pattern;
                }

                if (j < lastNonZero) {
                    jsData += ",";
                }
            }

            jsData += "],\n";

            // Pattern data for this instrument
            jsData += "          // Columns\n";
            jsData += "          c: [\n";

            for (j = 0; j < maxPattern; j++) {
                jsData += "            {n: [";
                lastNonZero = 0;

                for (k = 0; k < song.patternLen * 4; k++) {
                    if (instr.c[j].n[k]) {
                        lastNonZero = k;
                    }
                }

                for (k = 0; k <= lastNonZero; k++) {
                    var note = instr.c[j].n[k];

                    if (note) {
                        jsData += note;
                    }

                    if (k < lastNonZero) {
                        jsData += ",";
                    }
                }

                jsData += "],\n";
                jsData += "             f: [";
                lastNonZero = 0;

                for (k = 0; k < song.patternLen * 2; k++) {
                    if (instr.c[j].f[k]) {
                        lastNonZero = k;
                    }
                }

                for (k = 0; k <= lastNonZero; k++) {
                    var fx = instr.c[j].f[k];

                    if (fx) {
                        jsData += fx;
                    }

                    if (k < lastNonZero) {
                        jsData += ",";
                    }
                }

                jsData += "]}";

                if (j < maxPattern - 1) {
                    jsData += ",";
                }

                jsData += "\n";
            }

            jsData += "          ]\n";
            jsData += "        }";

            if (i < 7) {
                jsData += ",";
            }

            jsData += "\n";
        }

        jsData += "      ],\n";
        jsData += "      rowLen: " + song.rowLen + ",   // In sample lengths\n";
        jsData += "      patternLen: " + song.patternLen + ",  // Rows per pattern\n";
        jsData += "      endPattern: " + song.endPattern + "  // End pattern\n";
        jsData += "    };\n";

        return jsData;
    };

    //----------------------------------------------------------------------------
    // Midi interaction.
    // Based on example code by Chris Wilson.
    //----------------------------------------------------------------------------

    var mSelectMIDI,
        mMIDIAccess,
        mMIDIIn;

    var midiMessageReceived = function (ev) {
        var cmd        = ev.data[0] >> 4,
            channel    = ev.data[0] & 0xf,
            noteNumber = ev.data[1],
            velocity   = ev.data[2];

        if (channel == 9) {
            return;
        }

        if (cmd == 9 && velocity > 0) {
            // Note on (note on with velocity zero is the same as note off).
            // NOTE: Note no. 69 is A4 (440 Hz), which is note no. 57 in SoundBox.
            playNote(noteNumber - 12);
        } else if (cmd == 14) {
            // Pitch wheel
            //var pitch = ((velocity * 128.0 + noteNumber) - 8192) / 8192.0;
            // TODO(m): We could use this for controlling something. I think it would
            // be neat to use the pitch wheel for moving up/down in the pattern
            // editor.
        }
    };

    //noinspection JSUnusedLocalSymbols
    var selectMIDIIn = function (ev) {
        mMIDIIn = mMIDIAccess.inputs()[mSelectMIDI.selectedIndex];
        mMIDIIn.onmidimessage = midiMessageReceived;
    };

    var onMIDIStarted = function (midi) {
        mMIDIAccess = midi;

        var list = typeof mMIDIAccess.inputs == "function" ? mMIDIAccess.inputs() : [],
            i;

        // Detect preferred device.
        var preferredIndex = 0;

        for (i = 0; i < list.length; i++) {
            var str = list[i].name.toString().toLowerCase();

            if ((str.indexOf("keyboard") != -1)) {
                preferredIndex = i;
                break;
            }
        }

        // Populate the MIDI input selection drop down box.
        mSelectMIDI.options.length = 0;

        if (list.length) {
            for (i = 0; i < list.length; i++) {
                //noinspection JSUnresolvedVariable
                mSelectMIDI.options[i] = new Option(list[i].name, list[i].fingerprint,
                    i == preferredIndex, i == preferredIndex);
            }

            mMIDIIn = list[preferredIndex];
            mMIDIIn.onmidimessage = midiMessageReceived;

            mSelectMIDI.onchange = selectMIDIIn;

            // Show the MIDI input selection box.
            mSelectMIDI.style.display = "inline";
        }
    };

    var onMIDISystemError = function (err) {
        // TODO(m): Log an error message somehow (err.code)...
    };

    var initMIDI = function () {
        if (navigator.requestMIDIAccess) {
            mSelectMIDI = document.getElementById("midiInput");
            navigator.requestMIDIAccess().then(onMIDIStarted, onMIDISystemError);
        }
    };

    //--------------------------------------------------------------------------
    // Helper functions
    //--------------------------------------------------------------------------

    var preloadImage = function (url) {
        var img = new Image();
        img.src = url;
        mPreload.push(img);
    };

    var initPresets = function () {
        var parent = document.getElementById("instrPreset"),
            o, instr;

        for (var i = 0; i < gInstrumentPresets.length; ++i) {
            instr = gInstrumentPresets[i];
            o = document.createElement("option");
            o.value = instr.i ? "" + i : "";
            o.appendChild(document.createTextNode(instr.name));
            parent.appendChild(o);
        }
    };

    var getElementPos = function (o) {
        var left = 0, top = 0;

        if (o.offsetParent) {
            do {
                left += o.offsetLeft;
                top += o.offsetTop;
            } while (o = o.offsetParent);
        }
        return [left, top];
    };

    var getEventElement = function (e) {
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
    };

    var getMousePos = function (e, rel) {
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
        var pElem = getElementPos(getEventElement(e));
        return [p[0] - pElem[0], p[1] - pElem[1]];
    };

    var unfocusHTMLInputElements = function () {
        document.getElementById("instrPreset").blur();
    };

    var setEditMode = function (mode) {
        if (mode === mEditMode) {
            return;
        }

        mEditMode = mode;

        // Set the style for the different edit sections
        document.getElementById("sequencer").className = (mEditMode == EDIT_SEQUENCE ? "edit" : "");
        document.getElementById("pattern").className = (mEditMode == EDIT_PATTERN ? "edit" : "");
        document.getElementById("fxtrack").className = (mEditMode == EDIT_FXTRACK ? "edit" : "");

        // Unfocus any focused input elements
        if (mEditMode != EDIT_NONE) {
            unfocusHTMLInputElements();
            updateSongSpeed();
            updatePatternLength();
        }
    };

    var updateSongInfo = function () {
        document.getElementById("bpm").value = getBPM();
        document.getElementById("rpp").value = mSong.patternLen;
    };

    var updateSequencer = function (scrollIntoView, selectionOnly) {
        var o;

        // Update sequencer element contents and selection
        for (var i = 0; i < MAX_SONG_ROWS; ++i) {
            for (var j = 0; j < 8; ++j) {
                o = document.getElementById("sc" + j + "r" + i);

                if (!selectionOnly) {
                    var pat = mSong.songData[j].p[i];

                    if (pat > 0) {
                        o.innerHTML = "" + (pat <= 10 ? pat - 1 : String.fromCharCode(64 + pat - 10));
                    } else {
                        o.innerHTML = "";
                    }
                }

                if (i >= mSeqRow && i <= mSeqRow2 &&
                    j >= mSeqCol && j <= mSeqCol2) {
                    o.className = "selected";
                } else {
                    o.className = "";
                }
            }
        }

        // Scroll the row into view? (only when needed)
        if (scrollIntoView) {
            o = document.getElementById("spr" + mSeqRow);

            if (o.scrollIntoView) {
                var so = document.getElementById("sequencer"),
                    oy = o.offsetTop - so.scrollTop;

                if (oy < 0 || (oy + 10) > so.offsetHeight) {
                    o.scrollIntoView(oy < 0);
                }
            }
        }
    };

    var updatePattern = function (scrollIntoView, selectionOnly) {
        buildPatternTable();
        var singlePattern = (mSeqCol == mSeqCol2 && mSeqRow == mSeqRow2),
            pat           = singlePattern ? mSong.songData[mSeqCol].p[mSeqRow] - 1 : -1,
            o;

        for (var i = 0; i < mSong.patternLen; ++i) {
            for (var j = 0; j < 4; ++j) {
                o = document.getElementById("pc" + j + "r" + i);

                if (!selectionOnly) {
                    var noteName = "";

                    if (pat >= 0) {
                        var n = mSong.songData[mSeqCol].c[pat].n[i + j * mSong.patternLen] - 87;
                        if (n > 0)
                            noteName = mNoteNames[n % 12] + Math.floor(n / 12);
                    }

                    if (o.innerHTML != noteName) {
                        o.innerHTML = noteName;
                    }
                }

                if (i >= mPatternRow && i <= mPatternRow2 &&
                    j >= mPatternCol && j <= mPatternCol2) {
                    o.className = "selected";
                } else {
                    o.className = "";
                }
            }
        }

        // Scroll the row into view? (only when needed)
        //noinspection JSBitwiseOperatorUsage
        if (scrollIntoView & singlePattern) {
            o = document.getElementById("pc0r" + mPatternRow);

            if (o.scrollIntoView) {
                var so = document.getElementById("pattern");
                var oy = o.offsetTop - so.scrollTop;

                if (oy < 0 || (oy + 10) > so.offsetHeight) {
                    o.scrollIntoView(oy < 0);
                }
            }
        }
    };

    var toHex = function (num, count) {
        var s            = num.toString(16).toUpperCase(),
            leadingZeros = count - s.length;

        for (var i = 0; i < leadingZeros; ++i) {
            s = "0" + s;
        }

        return s;
    };

    var updateFxTrack = function (scrollIntoView, selectionOnly) {
        buildFxTable();

        var singlePattern = (mSeqCol == mSeqCol2 && mSeqRow == mSeqRow2),
            pat           = singlePattern ? mSong.songData[mSeqCol].p[mSeqRow] - 1 : -1,
            o;

        for (var i = 0; i < mSong.patternLen; ++i) {
            o = document.getElementById("fxr" + i);

            if (!selectionOnly) {
                var fxTxt = ":";

                if (pat >= 0) {
                    var fxCmd = mSong.songData[mSeqCol].c[pat].f[i];

                    if (fxCmd) {
                        var fxVal = mSong.songData[mSeqCol].c[pat].f[i + mSong.patternLen];
                        fxTxt = toHex(fxCmd, 2) + ":" + toHex(fxVal, 2);
                    }
                }

                if (o.innerHTML != fxTxt) {
                    o.innerHTML = fxTxt;
                }
            }

            if (i >= mFxTrackRow && i <= mFxTrackRow2) {
                o.className = "selected";
            } else {
                o.className = "";
            }
        }

        // Scroll the row into view? (only when needed)
        //noinspection JSBitwiseOperatorUsage
        if (scrollIntoView & singlePattern) {
            o = document.getElementById("fxr" + mFxTrackRow);

            if (o.scrollIntoView) {
                var so = document.getElementById("fxtrack"),
                    oy = o.offsetTop - so.scrollTop;

                if (oy < 0 || (oy + 10) > so.offsetHeight) {
                    o.scrollIntoView(oy < 0);
                }
            }
        }
    };

    var setSelectedPatternCell = function (col, row) {
        mPatternCol = col;
        mPatternRow = row;
        mPatternCol2 = col;
        mPatternRow2 = row;

        for (var i = 0; i < mSong.patternLen; ++i) {
            for (var j = 0; j < 4; ++j) {
                var o = document.getElementById("pc" + j + "r" + i);

                if (i == row && j == col) {
                    o.className = "selected";
                } else {
                    o.className = "";
                }
            }
        }

        updatePattern(true, true);
    };

    var setSelectedPatternCell2 = function (col, row) {
        mPatternCol2 = col >= mPatternCol ? col : mPatternCol;
        mPatternRow2 = row >= mPatternRow ? row : mPatternRow;

        for (var i = 0; i < mSong.patternLen; ++i) {
            for (var j = 0; j < 4; ++j) {
                var o = document.getElementById("pc" + j + "r" + i);

                if (i >= mPatternRow && i <= mPatternRow2 &&
                    j >= mPatternCol && j <= mPatternCol2) {
                    o.className = "selected";
                } else {
                    o.className = "";
                }
            }
        }

        updatePattern(false, true);
    };

    var setSelectedSequencerCell = function (col, row) {
        mSeqCol = col;
        mSeqRow = row;
        mSeqCol2 = col;
        mSeqRow2 = row;

        updateSequencer(true, true);
    };

    var setSelectedSequencerCell2 = function (col, row) {
        mSeqCol2 = col >= mSeqCol ? col : mSeqCol;
        mSeqRow2 = row >= mSeqRow ? row : mSeqRow;

        updateSequencer(false, true);
    };

    var setSelectedFxTrackRow = function (row) {
        mFxTrackRow = row;
        mFxTrackRow2 = row;

        for (var i = 0; i < mSong.patternLen; ++i) {
            var o = document.getElementById("fxr" + i);

            if (i >= mFxTrackRow && i <= mFxTrackRow2) {
                o.className = "selected";
            } else {
                o.className = "";
            }
        }

        updateFxTrack(true, true);
    };

    var setSelectedFxTrackRow2 = function (row) {
        mFxTrackRow2 = row >= mFxTrackRow ? row : mFxTrackRow;

        for (var i = 0; i < mSong.patternLen; ++i) {
            var o = document.getElementById("fxr" + i);

            if (i >= mFxTrackRow && i <= mFxTrackRow2) {
                o.className = "selected";
            } else {
                o.className = "";
            }
        }

        updateFxTrack(false, true);
    };

    var playNote = function (n) {
        // Calculate note number and trigger a new note in the jammer.
        var note = n + 87;
        mJammer.addNote(note);

        // Edit pattern if we're in pattern edit mode.
        if (mEditMode == EDIT_PATTERN &&
            mSeqCol == mSeqCol2 && mSeqRow == mSeqRow2 &&
            mPatternCol == mPatternCol2 && mPatternRow == mPatternRow2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                mSong.songData[mSeqCol].c[pat].n[mPatternRow + mPatternCol * mSong.patternLen] = note;
                setSelectedPatternCell(mPatternCol, (mPatternRow + 1) % mSong.patternLen);
                updatePattern();
                return true;
            }
        }

        return false;
    };

    var updateSlider = function (o, x, ignore) {
        console.log("update");
        console.log("ignore", ignore);

        if (!ignore) {
            var range = $(o);
            range.rsSlider("value", x);
        }
    };

    var updateCheckBox = function (o, check) {
        $(o).prop("checked", !!check);
    };

    var clearPresetSelection = function () {
        var o = document.getElementById("instrPreset");
        o.selectedIndex = 0;
    };

    var updateRadio = function (name, value) {
        $("[name='" + name + "'][value='" + value + "']")
            .attr("checked", "checked")
            .parent().addClass("active")
            .siblings().removeClass("active");
    };

    var updateInstrument = function (resetPreset) {
        var instr = mSong.songData[mSeqCol];

        // Osc #1
        updateRadio("osc1_wave", instr.i[OSC1_WAVEFORM]);
        updateSlider(document.getElementById("osc1_vol"), instr.i[OSC1_VOL]);
        updateSlider(document.getElementById("osc1_semi"), instr.i[OSC1_SEMI]);
        updateCheckBox(document.getElementById("osc1_xenv"), instr.i[OSC1_XENV]);

        // Osc #2
        updateRadio("osc2_wave", instr.i[OSC2_WAVEFORM]);
        updateSlider(document.getElementById("osc2_vol"), instr.i[OSC2_VOL]);
        updateSlider(document.getElementById("osc2_semi"), instr.i[OSC2_SEMI]);
        updateSlider(document.getElementById("osc2_det"), instr.i[OSC2_DETUNE]);
        updateCheckBox(document.getElementById("osc2_xenv"), instr.i[OSC2_XENV]);

        // Noise
        updateSlider(document.getElementById("noise_vol"), instr.i[NOISE_VOL]);

        // Envelope
        updateSlider(document.getElementById("env_att"), instr.i[ENV_ATTACK]);
        updateSlider(document.getElementById("env_sust"), instr.i[ENV_SUSTAIN]);
        updateSlider(document.getElementById("env_rel"), instr.i[ENV_RELEASE]);

        // LFO
        updateRadio("lfo_wave", instr.i[LFO_WAVEFORM]);
        updateSlider(document.getElementById("lfo_amt"), instr.i[LFO_AMT]);
        updateSlider(document.getElementById("lfo_freq"), instr.i[LFO_FREQ]);
        updateCheckBox(document.getElementById("lfo_fxfreq"), instr.i[LFO_FX_FREQ]);

        // FX
        updateRadio("fx_filt", instr.i[FX_FILTER]);
        updateSlider(document.getElementById("fx_freq"), instr.i[FX_FREQ]);
        updateSlider(document.getElementById("fx_res"), instr.i[FX_RESONANCE]);
        updateSlider(document.getElementById("fx_dly_amt"), instr.i[FX_DELAY_AMT]);
        updateSlider(document.getElementById("fx_dly_time"), instr.i[FX_DELAY_TIME]);
        updateSlider(document.getElementById("fx_pan_amt"), instr.i[FX_PAN_AMT]);
        updateSlider(document.getElementById("fx_pan_freq"), instr.i[FX_PAN_FREQ]);
        updateSlider(document.getElementById("fx_dist"), instr.i[FX_DIST]);
        updateSlider(document.getElementById("fx_drive"), instr.i[FX_DRIVE]);

        // Clear the preset selection?
        if (resetPreset) {
            clearPresetSelection();
        }

        // Update the jammer instrument
        mJammer.updateInstr(instr.i);
    };

    var updateSongSpeed = function () {
        // Determine song speed
        var bpm = parseInt(document.getElementById("bpm").value);

        if (bpm && (bpm >= 10) && (bpm <= 1000)) {
            mSong.rowLen = calcSamplesPerRow(bpm);
            mJammer.updateRowLen(mSong.rowLen);
        }
    };

    var setPatternLength = function (length) {
        if (mSong.patternLen === length) {
            return;
        }

        // Stop song if it's currently playing (the song will be wrong and the
        // follower will be off)
        stopAudio();

        // Truncate/extend patterns
        var i, j, k, col, notes, fx;

        for (i = 0; i < 8; i++) {
            for (j = 0; j < MAX_PATTERNS; j++) {
                col = mSong.songData[i].c[j];
                notes = [];
                fx = [];

                for (k = 0; k < 4 * length; k++) {
                    notes[k] = 0;
                }

                for (k = 0; k < 2 * length; k++) {
                    fx[k] = 0;
                }

                for (k = 0; k < Math.min(mSong.patternLen, length); k++) {
                    notes[k] = col.n[k];
                    notes[k + length] = col.n[k + mSong.patternLen];
                    notes[k + 2 * length] = col.n[k + 2 * mSong.patternLen];
                    notes[k + 3 * length] = col.n[k + 3 * mSong.patternLen];
                    fx[k] = col.f[k];
                    fx[k + length] = col.f[k + mSong.patternLen];
                }

                col.n = notes;
                col.f = fx;
            }
        }

        // Update pattern length
        mSong.patternLen = length;
    };

    var updatePatternLength = function () {
        var rpp = parseInt(document.getElementById("rpp").value);

        if (rpp && (rpp >= 1) && (rpp <= 256)) {
            // Update the pattern length of the song data
            setPatternLength(rpp);

            // Update UI
            buildPatternTable();
            buildFxTable();
            updatePattern();
            updateFxTrack();
        }
    };

    var updateSongRanges = function () {
        var i, j, emptyRow;

        // Determine the last song pattern
        mSong.endPattern = MAX_SONG_ROWS + 1;
        for (i = MAX_SONG_ROWS - 1; i >= 0; --i) {
            emptyRow = true;

            for (j = 0; j < 8; ++j) {
                if (mSong.songData[j].p[i] > 0) {
                    emptyRow = false;
                    break;
                }
            }

            if (!emptyRow) break;
            mSong.endPattern--;
        }

        // Update the song speed
        updateSongSpeed();
    };

    var showProgressDialog = function (msg) {
        var $modal    = $("#modal-progress"),
            $title    = $("#modal-progressLabel"),
            $progress = $("#progressBar");

        $title.text(msg);
        $progress.css("width", "0%");
        $modal.modal();
    };

    var loadSongFromData = function (songData) {
        var song = binToSong(songData);

        if (song) {
            stopAudio();
            mSong = song;
            updateSongInfo();
            updateSequencer();
            updatePattern();
            updateFxTrack();
            updateInstrument(true);
        }
    };

    var showOpenDialog = function () {
        var $modal = $("#modal-open"),
            $body  = $modal.find(".modal-body"),
            form   = $body.find("form").get(0);

        form.innerHTML = "";

        var listDiv = document.createElement("div");

        // List demo songs...
        for (var i = 0; i < gDemoSongs.length; i++) {
            var $row = $("<div />", {
                "class": "radio"
            });

            var $label = $("<label />");

            $label
                .append($("<input/>", {
                    type:    "radio",
                    name:    "radiogroup1",
                    value:   gDemoSongs[i].name,
                    checked: i === 0
                }))
                .append($("<span/>", {
                    html: gDemoSongs[i].description
                }));

            $row.append($label);
            listDiv.appendChild($row.get(0));
        }

        // Add input for a custom data URL
        $row = $("<div />", {
            "class": "radio"
        });

        $label = $("<label />");

        $label
            .append($("<input/>", {
                type:  "radio",
                name:  "radiogroup1",
                value: "custom",
                id:    "open-custom-radio"
            }))
            .append($("<span/>", {
                html: "Data URL:"
            }));

        $row.append($label);
        listDiv.appendChild($row.get(0));

        var customURLElement = document.createElement("input");
        customURLElement.type = "text";
        customURLElement.className = "form-control input-sm";
        customURLElement.id = "open-data-url";
        customURLElement.title = "Paste a saved song data URL here";
        customURLElement.placeholder = customURLElement.title;

        customURLElement.onchange = function () {
            $("#open-custom-radio").prop("checked", true);
        };

        customURLElement.onkeydown = customURLElement.onchange;
        customURLElement.onclick = customURLElement.onchange;
        customURLElement.onpaste = customURLElement.onchange;
        listDiv.appendChild(customURLElement);

        form.appendChild(listDiv);

        $modal.modal();
    };

    var onOpenSongClick = function (e) {
        e.preventDefault();

        var songData = null,
            $modal   = $("#modal-open"),
            $current = $modal.find(":radio:checked");

        if (!$current || !$current.length) {
            return;
        }

        if ($current.val() == "custom") {
            // Convert custom data URL to song data
            var params = parseURLGetData($("#open-data-url").val());
            songData = getURLSongData(params && params.data && params.data[0]);
        } else {
            var name = $current.val();

            // Pick a demo song
            for (var j = 0; j < gDemoSongs.length; j++) {
                if (gDemoSongs[j].name === name) {
                    if (gDemoSongs[j].data) {
                        songData = gDemoSongs[j].data;
                    } else {
                        songData = getURLSongData(gDemoSongs[j].base64);
                    }

                    break;
                }
            }
        }

        // Load the song
        if (songData) {
            loadSongFromData(songData);
        }

        $modal.modal("hide");
    };

    var showSaveDialog = function () {
        var $modal  = $("#modal-save"),
            $link   = $("#save-song-data"),
            $button = $("#save-song-button");

        var url      = makeURLSongData(songToBin(mSong)),
            shortURL = url.length < 70 ? url : url.slice(0, 67) + "...";

        $link.attr("title", url);
        $link.attr("href", url);
        $link.text(shortURL);

        $button.on("click", function (e) {
            e.preventDefault();
            var dataURI = "data:application/octet-stream;base64," + btoa(songToBin(mSong));
            window.open(dataURI);
            $modal.modal("hide");
        });

        $modal.modal();
    };

    var showAboutDialog = function () {
        $("#modal-about").modal();
    };

    //--------------------------------------------------------------------------
    // Event handlers
    //--------------------------------------------------------------------------

    var about = function (e) {
        e.preventDefault();
        showAboutDialog();
    };

    //noinspection JSUnusedLocalSymbols
    var newSong = function (e) {
        mSong = makeNewSong();

        // Update GUI
        updateSongInfo();
        updateSequencer();
        updatePattern();
        updateFxTrack();
        updateInstrument();

        // Initialize the song
        setEditMode(EDIT_PATTERN);
        setSelectedPatternCell(0, 0);
        setSelectedSequencerCell(0, 0);
        setSelectedFxTrackRow(0);

        return false;
    };

    var openSong = function (e) {
        e.preventDefault();
        showOpenDialog();
    };

    var saveSong = function (e) {
        // Update song ranges
        updateSongRanges();

        showSaveDialog();
        e.preventDefault();
    };

    var exportWAV = function (e) {
        e.preventDefault();

        // Update song ranges
        updateSongRanges();

        // Generate audio data
        var doneFun = function (wave) {
            var blob = new Blob([wave], {type: "application/octet-stream"});
            saveAs(blob, "rendered.wav");
        };

        generateAudio(doneFun);
    };

    var exportJS = function (e) {
        // Update song ranges
        updateSongRanges();

        // Generate JS song data
        var dataURI = "data:text/javascript;base64," + btoa(songToJS(mSong));
        window.open(dataURI);

        return false;
    };

    var setStatus = function (msg) {
        document.getElementById("statusText").innerHTML = msg;
    };

    var generateAudio = function (doneFun, opts) {
        // Show dialog
        showProgressDialog("Generating sound...");

        // Start time measurement
        var d1 = new Date();

        // Generate audio data in a worker.
        mPlayer = new CPlayer();

        mPlayer.generate(mSong, opts, function (progress) {
            // Update progress bar
            var o = document.getElementById("progressBar");
            o.style.width = Math.floor(100 * progress) + "%";

            if (progress >= 1) {
                // Create the wave file
                var wave = mPlayer.createWave();

                // Stop time measurement
                var d2 = new Date();
                setStatus("Generation time: " + (d2.getTime() - d1.getTime()) / 1000 + "s");

                // Hide dialog
                $("#modal-progress").modal("hide");

                // Call the callback function
                doneFun(wave);
            }
        });
    };

    var stopAudio = function () {
        mLeds.css("opacity", 0);

        stopFollower();

        if (mAudio) {
            mAudio.pause();
            mAudioTimer.reset();
        }
    };

    //----------------------------------------------------------------------------
    // Playback follower
    //----------------------------------------------------------------------------

    var mFollowerTimerID     = -1,
        mFollowerFirstRow    = 0,
        mFollowerLastRow     = 0,
        mFollowerFirstCol    = 0,
        mFollowerLastCol     = 0,
        mFollowerActive      = false,
        mFollowerLastVULeft  = 0,
        mFollowerLastVURight = 0;

    var getSamplesSinceNote = function (t, chan) {
        var nFloat  = t * 44100 / mSong.rowLen,
            n       = Math.floor(nFloat),
            seqPos0 = Math.floor(n / mSong.patternLen) + mFollowerFirstRow,
            patPos0 = n % mSong.patternLen;

        for (var k = 0; k < mSong.patternLen; ++k) {
            var seqPos = seqPos0,
                patPos = patPos0 - k;

            while (patPos < 0) {
                --seqPos;

                if (seqPos < mFollowerFirstRow) {
                    return -1;
                }

                patPos += mSong.patternLen;
            }

            var pat = mSong.songData[chan].p[seqPos] - 1;

            for (var patCol = 0; patCol < 4; patCol++) {
                if (pat >= 0 && mSong.songData[chan].c[pat].n[patPos + patCol * mSong.patternLen] > 0) {
                    return (k + (nFloat - n)) * mSong.rowLen;
                }
            }
        }

        return -1;
    };

    var mLeds = $(".led");

    var redrawPlayerGfx = function (t) {
        // Calculate singal powers
        var pl = 0, pr = 0;

        if (mFollowerActive && t >= 0) {
            // Get the waveform
            var wave = mPlayer.getData(t, 1000);

            // Calculate volume
            var i, l, r,
                sl = 0, sr = 0, l_old = 0, r_old = 0;

            for (i = 1; i < wave.length; i += 2) {
                l = wave[i - 1];
                r = wave[i];

                // Band-pass filter (low-pass + high-pass)
                sl = 0.8 * l + 0.1 * sl - 0.3 * l_old;
                sr = 0.8 * r + 0.1 * sr - 0.3 * r_old;

                l_old = l;
                r_old = r;

                // Sum of squares
                pl += sl * sl;
                pr += sr * sr;
            }

            // Low-pass filtered mean power (RMS)
            pl = Math.sqrt(pl / wave.length) * 0.2 + mFollowerLastVULeft * 0.8;
            pr = Math.sqrt(pr / wave.length) * 0.2 + mFollowerLastVURight * 0.8;

            mFollowerLastVULeft = pl;
            mFollowerLastVURight = pr;
        }

        mPanLeft.css("width", Math.min(Math.floor(pl * 100 * 5), 100) + "%");
        mPanRight.css("width", Math.min(Math.floor(pr * 100 * 5), 100) + "%");

        // Draw leds
        for (i = 0; i < 8; ++i) {
            if (i >= mFollowerFirstCol && i <= mFollowerLastCol) {
                // Get envelope profile for this channel
                var env_a = mSong.songData[i].i[ENV_ATTACK],
                    env_s = mSong.songData[i].i[ENV_SUSTAIN],
                    env_r = mSong.songData[i].i[ENV_RELEASE];

                env_a = env_a * env_a * 4;
                env_r = env_s * env_s * 4 + env_r * env_r * 4;

                var env_tot = env_a + env_r;

                if (env_tot < 10000) {
                    env_tot = 10000;
                    env_r = env_tot - env_a;
                }

                // Get number of samples since last new note
                var numSamp = getSamplesSinceNote(t, i);

                if (numSamp >= 0 && numSamp < env_tot) {
                    // Calculate current envelope (same method as the synth, except
                    // sustain)
                    var alpha;

                    if (numSamp < env_a) {
                        alpha = numSamp / env_a;
                    } else {
                        alpha = 1 - (numSamp - env_a) / env_r;
                    }

                    // Draw lit led with alpha blending
                    mLeds.eq(i).css("opacity", alpha);
                }
            }
        }
    };

    var updateFollower = function () {
        if (mAudio == null) {
            return;
        }

        // Get current time
        var t = mAudioTimer.currentTime(),
            i, o;

        // Are we past the play range (i.e. stop the follower?)
        if (mAudio.ended || (mAudio.duration && ((mAudio.duration - t) < 0.1))) {
            stopFollower();

            // Reset pattern position
            mPatternRow = 0;
            mPatternRow2 = 0;
            updatePattern();

            mFxTrackRow = 0;
            mFxTrackRow2 = 0;
            updateFxTrack();

            return;
        }

        // Calculate current song position
        var n      = Math.floor(t * 44100 / mSong.rowLen),
            seqPos = Math.floor(n / mSong.patternLen) + mFollowerFirstRow,
            patPos = n % mSong.patternLen;

        // Have we stepped?
        var newSeqPos = (seqPos != mSeqRow),
            newPatPos = newSeqPos || (patPos != mPatternRow);

        // Update the sequencer
        if (newSeqPos) {
            if (seqPos >= 0) {
                mSeqRow = seqPos;
                mSeqRow2 = seqPos;
                updateSequencer(true, true);
            }

            for (i = 0; i < MAX_SONG_ROWS; ++i) {
                o = document.getElementById("spr" + i);
                o.className = (i == seqPos ? "playpos" : "");
            }
        }

        // Update the pattern
        if (newPatPos) {
            if (patPos >= 0) {
                mPatternRow = patPos;
                mPatternRow2 = patPos;
                updatePattern(true, !newSeqPos);

                mFxTrackRow = patPos;
                mFxTrackRow2 = patPos;
                updateFxTrack(true, !newSeqPos);
            }

            for (i = 0; i < mSong.patternLen; ++i) {
                o = document.getElementById("ppr" + i);
                o.className = (i == patPos ? "playpos" : "");
            }
        }

        // Player graphics
        redrawPlayerGfx(t);
    };

    var startFollower = function () {
        // Update the sequencer selection
        mSeqRow = mFollowerFirstRow;
        mSeqRow2 = mFollowerFirstRow;
        mSeqCol2 = mSeqCol;

        updateSequencer(true, true);
        updatePattern();
        updateFxTrack();

        // Start the follower
        mFollowerActive = true;
        mFollowerTimerID = setInterval(updateFollower, 16);
    };

    var stopFollower = function () {
        if (mFollowerActive) {
            // Stop the follower
            if (mFollowerTimerID !== -1) {
                clearInterval(mFollowerTimerID);
                mFollowerTimerID = -1;
            }

            var i;

            // Clear the follower markers
            for (i = 0; i < MAX_SONG_ROWS; ++i) {
                document.getElementById("spr" + i).className = "";
            }

            for (i = 0; i < mSong.patternLen; ++i) {
                document.getElementById("ppr" + i).className = "";
            }

            // Clear player gfx
            redrawPlayerGfx(-1);

            mFollowerActive = false;
        }
    };

    //----------------------------------------------------------------------------
    // (end of playback follower)
    //----------------------------------------------------------------------------

    var playSong = function (e) {
        e = e || window.event;
        e.preventDefault();

        // Stop the currently playing audio
        stopAudio();

        // Update song ranges
        updateSongRanges();

        // Select range to play
        mFollowerFirstRow = 0;
        mFollowerLastRow = mSong.endPattern - 2;
        mFollowerFirstCol = 0;
        mFollowerLastCol = 7;

        // Generate audio data
        var doneFun = function (wave) {
            if (mAudio == null) {
                alert("Audio element unavailable.");
                return;
            }

            try {
                // Start the follower
                startFollower();

                // Load the data into the audio element (it will start playing as soon
                // as the data has been loaded)
                mAudio.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));

                // Hack
                mAudioTimer.reset();
                mAudio.play();
            } catch (err) {
                alert("Error playing: " + err.message);
            }
        };

        generateAudio(doneFun);
    };

    var playRange = function (e) {
        e = e || window.event;
        e.preventDefault();

        // Stop the currently playing audio
        stopAudio();

        // Update song ranges
        updateSongRanges();

        // Select range to play
        var opts = {
            firstRow: mSeqRow,
            lastRow:  mSeqRow2,
            firstCol: mSeqCol,
            lastCol:  mSeqCol2
        };

        mFollowerFirstRow = mSeqRow;
        mFollowerLastRow = mSeqRow2;
        mFollowerFirstCol = mSeqCol;
        mFollowerLastCol = mSeqCol2;

        // Generate audio data
        var doneFun = function (wave) {
            if (mAudio == null) {
                alert("Audio element unavailable.");
                return;
            }

            try {
                // Restart the follower
                startFollower();

                // Load the data into the audio element (it will start playing as soon
                // as the data has been loaded)
                mAudio.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));

                // Hack
                mAudio.play();
                mAudioTimer.reset();
            } catch (err) {
                alert("Error playing: " + err.message);
            }
        };

        generateAudio(doneFun, opts);
    };

    var stopPlaying = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mAudio == null) {
            alert("Audio element unavailable.");
            return;
        }

        stopAudio();
    };

    //noinspection JSUnusedLocalSymbols
    var bpmFocus = function (e) {
        setEditMode(EDIT_NONE);
        return true;
    };

    //noinspection JSUnusedLocalSymbols
    var rppFocus = function (e) {
        setEditMode(EDIT_NONE);
        return true;
    };

    //noinspection JSUnusedLocalSymbols
    var instrPresetFocus = function (e) {
        setEditMode(EDIT_NONE);
        return true;
    };

    var instrCopyMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            mInstrCopyBuffer = [];
            var instr = mSong.songData[mSeqCol];

            for (var i = 0; i <= instr.i.length; ++i) {
                mInstrCopyBuffer[i] = instr.i[i];
            }
        }
    };

    var instrPasteMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2 && mInstrCopyBuffer.length > 0) {
            var instr = mSong.songData[mSeqCol];
            instr.i = [];

            for (var i = 0; i <= mInstrCopyBuffer.length; ++i) {
                instr.i[i] = mInstrCopyBuffer[i];
            }
        }

        updateInstrument(true);
    };

    var patternCopyMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                mPatCopyBuffer = [];

                for (var row = mPatternRow; row <= mPatternRow2; ++row) {
                    var arr = [];

                    for (var col = mPatternCol; col <= mPatternCol2; ++col) {
                        arr.push(mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen]);
                    }

                    mPatCopyBuffer.push(arr);
                }
            }
        }
    };

    var patternPasteMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                for (var row = mPatternRow, i = 0; row < mSong.patternLen && i < mPatCopyBuffer.length; ++row, ++i) {
                    for (var col = mPatternCol, j = 0; col < 4 && j < mPatCopyBuffer[i].length; ++col, ++j) {
                        mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen] = mPatCopyBuffer[i][j];
                    }
                }

                updatePattern();
            }
        }
    };

    var patternNoteUpMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                for (var row = mPatternRow; row <= mPatternRow2; ++row) {
                    for (var col = mPatternCol; col <= mPatternCol2; ++col) {
                        var n = mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen];

                        if (n > 0) {
                            mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen] = n + 1;
                        }
                    }
                }

                updatePattern();
            }
        }
    };

    var patternNoteDownMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                for (var row = mPatternRow; row <= mPatternRow2; ++row) {
                    for (var col = mPatternCol; col <= mPatternCol2; ++col) {
                        var n = mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen];

                        if (n > 1) {
                            mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen] = n - 1;
                        }
                    }
                }

                updatePattern();
            }
        }
    };

    var patternOctaveUpMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                for (var row = mPatternRow; row <= mPatternRow2; ++row) {
                    for (var col = mPatternCol; col <= mPatternCol2; ++col) {
                        var n = mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen];

                        if (n > 0) {
                            mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen] = n + 12;
                        }
                    }
                }

                updatePattern();
            }
        }
    };

    var patternOctaveDownMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                for (var row = mPatternRow; row <= mPatternRow2; ++row) {
                    for (var col = mPatternCol; col <= mPatternCol2; ++col) {
                        var n = mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen];

                        if (n > 12) {
                            mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen] = n - 12;
                        }
                    }
                }

                updatePattern();
            }
        }
    };

    var sequencerCopyMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        mSeqCopyBuffer = [];

        for (var row = mSeqRow; row <= mSeqRow2; ++row) {
            var arr = [];

            for (var col = mSeqCol; col <= mSeqCol2; ++col) {
                arr.push(mSong.songData[col].p[row]);
            }

            mSeqCopyBuffer.push(arr);
        }
    };

    var sequencerPasteMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        for (var row = mSeqRow, i = 0; row < MAX_SONG_ROWS && i < mSeqCopyBuffer.length; ++row, ++i) {
            for (var col = mSeqCol, j = 0; col < 8 && j < mSeqCopyBuffer[i].length; ++col, ++j) {
                mSong.songData[col].p[row] = mSeqCopyBuffer[i][j];
            }
        }

        updateSequencer();
    };

    var sequencerPatUpMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        for (var row = mSeqRow; row <= mSeqRow2; ++row) {
            for (var col = mSeqCol; col <= mSeqCol2; ++col) {
                var pat = mSong.songData[col].p[row];

                if (pat < MAX_PATTERNS) {
                    mSong.songData[col].p[row] = pat + 1;
                }
            }
        }

        updateSequencer();
        updatePattern();
        updateFxTrack();
    };

    var sequencerPatDownMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        for (var row = mSeqRow; row <= mSeqRow2; ++row) {
            for (var col = mSeqCol; col <= mSeqCol2; ++col) {
                var pat = mSong.songData[col].p[row];

                if (pat > 0) {
                    mSong.songData[col].p[row] = pat - 1;
                }
            }
        }

        updateSequencer();
        updatePattern();
        updateFxTrack();
    };

    var fxCopyMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                mFxCopyBuffer = [];
                for (var row = mFxTrackRow; row <= mFxTrackRow2; ++row) {
                    var arr = [];

                    arr.push(mSong.songData[mSeqCol].c[pat].f[row]);
                    arr.push(mSong.songData[mSeqCol].c[pat].f[row + mSong.patternLen]);
                    mFxCopyBuffer.push(arr);
                }
            }
        }
    };

    var fxPasteMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
            var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

            if (pat >= 0) {
                for (var row = mFxTrackRow, i = 0; row < mSong.patternLen && i < mFxCopyBuffer.length; ++row, ++i) {
                    var arr = mFxCopyBuffer[i];

                    mSong.songData[mSeqCol].c[pat].f[row] = arr[0];
                    mSong.songData[mSeqCol].c[pat].f[row + mSong.patternLen] = arr[1];
                }

                updateFxTrack();
            }
        }
    };

    var onCheckboxChange = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            var o = getEventElement(e);

            // Check which instrument parameter was changed
            var fxCmd = -1;

            if (o.id === "osc1_xenv") {
                fxCmd = OSC1_XENV;
            } else if (o.id === "osc2_xenv") {
                fxCmd = OSC2_XENV;
            } else if (o.id === "lfo_fxfreq") {
                fxCmd = LFO_FX_FREQ;
            }

            // Update the instrument (toggle boolean)
            var fxValue;

            if (fxCmd >= 0) {
                fxValue = +($(o).is(":checked"));
                mSong.songData[mSeqCol].i[fxCmd] = fxValue;
            }

            // Edit the fx track
            if (mEditMode == EDIT_FXTRACK && mSeqRow == mSeqRow2 &&
                mFxTrackRow == mFxTrackRow2 && fxCmd) {
                var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                if (pat >= 0) {
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow] = fxCmd + 1;
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow + mSong.patternLen] = fxValue;
                    updateFxTrack();
                }
            }

            updateInstrument(true);
            unfocusHTMLInputElements();
        }
    };

    var onOsc1WaveChange = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            var wave = e.currentTarget.value;

            if (mEditMode == EDIT_FXTRACK
                && mSeqRow == mSeqRow2
                && mFxTrackRow == mFxTrackRow2) {
                var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                if (pat >= 0) {
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow] = OSC1_WAVEFORM + 1;
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow + mSong.patternLen] = wave;
                    updateFxTrack();
                }
            }

            mSong.songData[mSeqCol].i[OSC1_WAVEFORM] = wave;
            updateInstrument();
            unfocusHTMLInputElements();
        }
    };

    var onOsc2WaveChange = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            var wave = e.currentTarget.value;

            if (mEditMode == EDIT_FXTRACK
                && mSeqRow == mSeqRow2
                && mFxTrackRow == mFxTrackRow2) {
                var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                if (pat >= 0) {
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow] = OSC2_WAVEFORM + 1;
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow + mSong.patternLen] = wave;
                    updateFxTrack();
                }
            }

            mSong.songData[mSeqCol].i[OSC2_WAVEFORM] = wave;
            updateInstrument(true);
            unfocusHTMLInputElements();
        }
    };

    var onLfoWaveChange = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            var wave = e.currentTarget.value;

            if (mEditMode == EDIT_FXTRACK
                && mSeqRow == mSeqRow2
                && mFxTrackRow == mFxTrackRow2) {
                var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                if (pat >= 0) {
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow] = LFO_WAVEFORM + 1;
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow + mSong.patternLen] = wave;
                    updateFxTrack();
                }
            }

            mSong.songData[mSeqCol].i[LFO_WAVEFORM] = wave;
            updateInstrument(true);
            unfocusHTMLInputElements();
        }
    };

    var onFxFiltChange = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            var filt = e.currentTarget.value;

            if (mEditMode == EDIT_FXTRACK
                && mSeqRow == mSeqRow2
                && mFxTrackRow == mFxTrackRow2) {
                var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                if (pat >= 0) {
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow] = FX_FILTER + 1;
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow + mSong.patternLen] = filt;
                    updateFxTrack();
                }
            }

            mSong.songData[mSeqCol].i[FX_FILTER] = filt;
            updateInstrument(true);
            unfocusHTMLInputElements();
        }
    };

    var onOctaveUpClick = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mKeyboardOctave < 8) {
            mKeyboardOctave++;
            $("#keyboardOctave").text(mKeyboardOctave);
        }
    };

    var onOctaveDownClick = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mKeyboardOctave > 1) {
            mKeyboardOctave--;
            $("#keyboardOctave").text(mKeyboardOctave);
        }
    };

    var selectPreset = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (mSeqCol == mSeqCol2) {
            var o   = getEventElement(e),
                val = o.options[o.selectedIndex].value;

            if (val !== "") {
                val = parseInt(val);

                if (val) {
                    // Clone instrument settings
                    var src = gInstrumentPresets[val];

                    for (var i = 0; i < src.i.length; ++i) {
                        mSong.songData[mSeqCol].i[i] = src.i[i];
                    }

                    updateInstrument(false);
                }
            }
        }
    };

    var onKeyboardClick = function (e) {
        e = e || window.event;

        var p = getMousePos(e, true);

        // Calculate keyboard position
        var n = 0;

        if (p[1] < 68) {
            // Possible black key
            for (var i = 0; i < mBlackKeyPos.length; i += 2) {
                if (p[0] >= (mBlackKeyPos[i] - 10) &&
                    p[0] <= (mBlackKeyPos[i] + 10)) {
                    n = mBlackKeyPos[i + 1];

                    break;
                }
            }
        }

        if (!n) {
            // Must be a white key
            n = Math.floor((p[0] * 14) / 420) * 2;
            var comp = 0;

            if (n >= 20) {
                comp++;
            }

            if (n >= 14) {
                comp++;
            }

            if (n >= 6) {
                comp++;
            }

            n -= comp;
        }

        // Play the note
        if (playNote(n + mKeyboardOctave * 12)) {
            e.preventDefault();
        }
    };

    var onFxTrackMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (!mFollowerActive) {
            var o   = getEventElement(e),
                row = parseInt(o.id.slice(3));

            setSelectedFxTrackRow(row);
            mSelectingFxRange = true;
        }

        setEditMode(EDIT_FXTRACK);
    };

    var onFxTrackMouseOver = function (e) {
        if (mSelectingFxRange) {
            e = e || window.event;
            e.preventDefault();

            var o   = getEventElement(e),
                row = parseInt(o.id.slice(3));

            setSelectedFxTrackRow2(row);
        }
    };

    var onFxTrackMouseUp = function (e) {
        if (mSelectingFxRange) {
            e = e || window.event;
            e.preventDefault();

            var o   = getEventElement(e),
                row = parseInt(o.id.slice(3));

            setSelectedFxTrackRow2(row);
            mSelectingFxRange = false;
        }
    };

    var onPatternMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        if (!mFollowerActive) {
            var o   = getEventElement(e),
                col = parseInt(o.id.slice(2, 3)),
                row = parseInt(o.id.slice(4));

            setSelectedPatternCell(col, row);
            mSelectingPatternRange = true;
        }

        setEditMode(EDIT_PATTERN);
    };

    var onPatternMouseOver = function (e) {
        if (mSelectingPatternRange) {
            e = e || window.event;
            e.preventDefault();

            var o   = getEventElement(e),
                col = parseInt(o.id.slice(2, 3)),
                row = parseInt(o.id.slice(4));

            setSelectedPatternCell2(col, row);
        }
    };

    var onPatternMouseUp = function (e) {
        if (mSelectingPatternRange) {
            e = e || window.event;
            e.preventDefault();

            var o   = getEventElement(e),
                col = parseInt(o.id.slice(2, 3)),
                row = parseInt(o.id.slice(4));

            setSelectedPatternCell2(col, row);
            mSelectingPatternRange = false;
        }
    };

    var onSequencerMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();

        var o   = getEventElement(e),
            col = parseInt(o.id.slice(2, 3)),
            row;

        if (!mFollowerActive) {
            row = parseInt(o.id.slice(4));
        } else {
            row = mSeqRow;
        }

        var newChannel = col != mSeqCol || mSeqCol != mSeqCol2;

        setSelectedSequencerCell(col, row);

        if (!mFollowerActive) {
            mSelectingSeqRange = true;
        }

        setEditMode(EDIT_SEQUENCE);
        updatePattern();
        updateFxTrack();
        updateInstrument(newChannel);
    };

    var onSequencerMouseOver = function (e) {
        if (mSelectingSeqRange) {
            e = e || window.event;
            e.preventDefault();

            var o   = getEventElement(e),
                col = parseInt(o.id.slice(2, 3)),
                row = parseInt(o.id.slice(4));

            setSelectedSequencerCell2(col, row);
            updatePattern();
            updateFxTrack();
            updateInstrument(true);
        }
    };

    var onSequencerMouseUp = function (e) {
        if (mSelectingSeqRange) {
            e = e || window.event;
            e.preventDefault();

            var o          = getEventElement(e),
                col        = parseInt(o.id.slice(2, 3)),
                row        = parseInt(o.id.slice(4)),
                newChannel = col != mSeqCol2 || mSeqCol != mSeqCol2;

            setSelectedSequencerCell2(col, row);
            mSelectingSeqRange = false;
            updatePattern();
            updateFxTrack();
            updateInstrument(newChannel);
        }
    };

    var onSliderChange = function (e) {
        if (mSeqCol == mSeqCol2) {
            e = e || window.event;

            updateSliderParam($(e.currentTarget));
            unfocusHTMLInputElements();
        }
    };

    //@formatter:off
    var sliderProps = {
        osc1_vol:    {min: 0,  max: 255, cmd: OSC1_VOL},
        osc1_semi:   {min: 92, max: 164, cmd: OSC1_SEMI},
        osc2_vol:    {min: 0,  max: 255, cmd: OSC2_VOL},
        osc2_semi:   {min: 92, max: 164, cmd: OSC2_SEMI},
        osc2_det:    {min: 0,  max: 255, cmd: OSC2_DETUNE, nonLinear: true},
        noise_vol:   {min: 0,  max: 255, cmd: NOISE_VOL},
        env_att:     {min: 0,  max: 255, cmd: ENV_ATTACK},
        env_sust:    {min: 0,  max: 255, cmd: ENV_SUSTAIN},
        env_rel:     {min: 0,  max: 255, cmd: ENV_RELEASE},
        lfo_amt:     {min: 0,  max: 255, cmd: LFO_AMT},
        lfo_freq:    {min: 0,  max: 16,  cmd: LFO_FREQ},
        fx_freq:     {min: 0,  max: 255, cmd: FX_FREQ,     nonLinear: true},
        fx_res:      {min: 0,  max: 254, cmd: FX_RESONANCE},
        fx_dist:     {min: 0,  max: 255, cmd: FX_DIST,     nonLinear: true},
        fx_drive:    {min: 0,  max: 255, cmd: FX_DRIVE},
        fx_pan_amt:  {min: 0,  max: 255, cmd: FX_PAN_AMT},
        fx_pan_freq: {min: 0,  max: 16,  cmd: FX_PAN_FREQ},
        fx_dly_amt:  {min: 0,  max: 255, cmd: FX_DELAY_AMT},
        fx_dly_time: {min: 0,  max: 16,  cmd: FX_DELAY_TIME}
    };
    //@formatter:on

    var updateSliderParam = function ($e) {
        var x     = $e.val(),
            props = sliderProps[$e.attr("id")];

        if (!props) {
            throw new Error("Unknown slider");
        }

        // Adapt to the range of the slider
        if (props.nonLinear) {
            x *= x;
        }

        // Check which instrument property to update
        var cmdNo = sliderProps[$e.attr("id")].cmd,
            instr = mSong.songData[mSeqCol];

        if (mEditMode == EDIT_FXTRACK && mFxTrackRow == mFxTrackRow2) {
            // Update the effect command in the FX track
            if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
                var pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                if (pat >= 0) {
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow] = cmdNo + 1;
                    mSong.songData[mSeqCol].c[pat].f[mFxTrackRow + mSong.patternLen] = x;
                    updateFxTrack();
                }
            }
        }

        // Update the instrument property
        if (cmdNo >= 0) {
            instr.i[cmdNo] = x;
        }

        // Update the jammer instrument
        mJammer.updateInstr(instr.i);

        clearPresetSelection();
    };

    var keyDown = function (e) {
        e = e || window.event;

        // Check if we're editing BPM / RPP
        //noinspection JSValidateTypes
        var editingBpmRpp =
                document.activeElement === document.getElementById("bpm") ||
                document.activeElement === document.getElementById("rpp");

        var row, col, n;

        // Sequencer editing
        if (mEditMode == EDIT_SEQUENCE &&
            mSeqCol == mSeqCol2 && mSeqRow == mSeqRow2) {
            // 0 - 9
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                mSong.songData[mSeqCol].p[mSeqRow] = e.keyCode - 47;
                updateSequencer();
                updatePattern();
                updateFxTrack();
                return false;
            }

            // A - Z
            if (e.keyCode >= 64 && e.keyCode <= 90) {
                mSong.songData[mSeqCol].p[mSeqRow] = e.keyCode - 54;
                updateSequencer();
                updatePattern();
                updateFxTrack();
                return false;
            }
        }

        // Emulate a piano through keyboard input.
        if (mEditMode != EDIT_SEQUENCE && !editingBpmRpp) {
            n = -1;

            switch (e.keyCode) {
                // First octave on the ZXCVB... row
                case 90:
                    n = 0;
                    break;
                case 83:
                    n = 1;
                    break;
                case 88:
                    n = 2;
                    break;
                case 68:
                    n = 3;
                    break;
                case 67:
                    n = 4;
                    break;
                case 86:
                    n = 5;
                    break;
                case 71:
                    n = 6;
                    break;
                case 66:
                    n = 7;
                    break;
                case 72:
                    n = 8;
                    break;
                case 78:
                    n = 9;
                    break;
                case 74:
                    n = 10;
                    break;
                case 77:
                    n = 11;
                    break;
                // "Bonus keys" 1 (extensions of first octave into second octave)
                case 188:
                    n = 12;
                    break;
                case 76:
                    n = 13;
                    break;
                case 190:
                    n = 14;
                    break;
                case 186:
                    n = 15;
                    break;
                case 191:
                    n = 16;
                    break;
                // Second octave on the QWERTY... row
                case 81:
                    n = 12;
                    break;
                case 50:
                    n = 13;
                    break;
                case 87:
                    n = 14;
                    break;
                case 51:
                    n = 15;
                    break;
                case 69:
                    n = 16;
                    break;
                case 82:
                    n = 17;
                    break;
                case 53:
                    n = 18;
                    break;
                case 84:
                    n = 19;
                    break;
                case 54:
                    n = 20;
                    break;
                case 89:
                    n = 21;
                    break;
                case 55:
                    n = 22;
                    break;
                case 85:
                    n = 23;
                    break;
                // "Bonus keys" 2 (extensions of second octave into third octave)
                case 73:
                    n = 24;
                    break;
                case 57:
                    n = 25;
                    break;
                case 79:
                    n = 26;
                    break;
                case 48:
                    n = 27;
                    break;
                case 80:
                    n = 28;
                    break;
            }

            if (n >= 0) {
                if (playNote(n + mKeyboardOctave * 12)) {
                    return false;
                }
            }
        }

        var pat;

        // The rest of the key presses...
        switch (e.keyCode) {
            case 39:  // RIGHT
                if (mEditMode == EDIT_SEQUENCE) {
                    setSelectedSequencerCell((mSeqCol + 1) % 8, mSeqRow);
                    updatePattern();
                    updateFxTrack();
                    updateInstrument(true);

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    setSelectedPatternCell((mPatternCol + 1) % 4, mPatternRow);

                    return false;
                }

                break;

            case 37:  // LEFT
                if (mEditMode == EDIT_SEQUENCE) {
                    setSelectedSequencerCell((mSeqCol - 1 + 8) % 8, mSeqRow);
                    updatePattern();
                    updateFxTrack();
                    updateInstrument(true);

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    setSelectedPatternCell((mPatternCol - 1 + 4) % 4, mPatternRow);

                    return false;
                }

                break;

            case 40:  // DOWN
                if (mEditMode == EDIT_SEQUENCE) {
                    setSelectedSequencerCell(mSeqCol, (mSeqRow + 1) % MAX_SONG_ROWS);
                    updatePattern();
                    updateFxTrack();

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    setSelectedPatternCell(mPatternCol, (mPatternRow + 1) % mSong.patternLen);

                    return false;
                } else if (mEditMode == EDIT_FXTRACK) {
                    setSelectedFxTrackRow((mFxTrackRow + 1) % mSong.patternLen);

                    return false;
                }

                break;

            case 38:  // UP
                if (mEditMode == EDIT_SEQUENCE) {
                    setSelectedSequencerCell(mSeqCol, (mSeqRow - 1 + MAX_SONG_ROWS) % MAX_SONG_ROWS);
                    updatePattern();
                    updateFxTrack();

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    setSelectedPatternCell(mPatternCol, (mPatternRow - 1 + mSong.patternLen) % mSong.patternLen);

                    return false;
                } else if (mEditMode == EDIT_FXTRACK) {
                    setSelectedFxTrackRow((mFxTrackRow - 1 + mSong.patternLen) % mSong.patternLen);

                    return false;
                }

                break;

            case 36:  // HOME
                if (mEditMode == EDIT_SEQUENCE) {
                    setSelectedSequencerCell(mSeqCol, 0);
                    updatePattern();
                    updateFxTrack();

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    setSelectedPatternCell(mPatternCol, 0);

                    return false;
                } else if (mEditMode == EDIT_FXTRACK) {
                    setSelectedFxTrackRow(0);

                    return false;
                }

                break;

            case 35:  // END
                if (mEditMode == EDIT_SEQUENCE) {
                    setSelectedSequencerCell(mSeqCol, MAX_SONG_ROWS - 1);
                    updatePattern();
                    updateFxTrack();

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    setSelectedPatternCell(mPatternCol, mSong.patternLen - 1);

                    return false;
                } else if (mEditMode == EDIT_FXTRACK) {
                    setSelectedFxTrackRow(mSong.patternLen - 1);

                    return false;
                }

                break;

            case 32: // SPACE
                if (mEditMode != EDIT_NONE) {
                    playRange(e);

                    return false;
                }

                break;

            case 8:   // BACKSPACE (Mac delete)
            case 46:  // DELETE
                if (mEditMode == EDIT_SEQUENCE) {
                    for (row = mSeqRow; row <= mSeqRow2; ++row) {
                        for (col = mSeqCol; col <= mSeqCol2; ++col) {
                            mSong.songData[col].p[row] = 0;
                        }
                    }

                    updateSequencer();
                    updatePattern();
                    updateFxTrack();

                    return false;
                } else if (mEditMode == EDIT_PATTERN) {
                    if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
                        pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                        if (pat >= 0) {
                            for (row = mPatternRow; row <= mPatternRow2; ++row) {
                                for (col = mPatternCol; col <= mPatternCol2; ++col) {
                                    mSong.songData[mSeqCol].c[pat].n[row + col * mSong.patternLen] = 0;
                                }
                            }

                            if (mPatternRow == mPatternRow2) {
                                setSelectedPatternCell(mPatternCol, (mPatternRow + 1) % mSong.patternLen);
                            }

                            updatePattern();
                        }

                        return false;
                    }
                } else if (mEditMode == EDIT_FXTRACK) {
                    if (mSeqRow == mSeqRow2 && mSeqCol == mSeqCol2) {
                        pat = mSong.songData[mSeqCol].p[mSeqRow] - 1;

                        if (pat >= 0) {
                            for (row = mFxTrackRow; row <= mFxTrackRow2; ++row) {
                                mSong.songData[mSeqCol].c[pat].f[row] = 0;
                                mSong.songData[mSeqCol].c[pat].f[row + mSong.patternLen] = 0;
                            }

                            if (mFxTrackRow == mFxTrackRow2) {
                                setSelectedFxTrackRow((mFxTrackRow + 1) % mSong.patternLen);
                            }

                            updateFxTrack();
                        }

                        return false;
                    }
                }

                break;

            case 13:  // ENTER / RETURN
                if (editingBpmRpp) {
                    updateSongSpeed();
                    updatePatternLength();
                    document.getElementById("bpm").blur();
                    document.getElementById("rpp").blur();
                }

                break;

            default:
                // alert("onkeydown: " + e.keyCode);
                break;
        }

        return true;
    };

    var onFileDrop = function (e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();

        // Get the dropped file
        //noinspection JSUnresolvedVariable
        var files = e.dataTransfer.files;

        if (files.length && files.length != 1) {
            alert("Only open one file at a time.");
            return;
        }

        var file = files[0];

        // Load the file into the editor
        var reader = new FileReader();

        reader.onload = function (e) {
            loadSongFromData(getURLSongData(e.target.result));
        };

        reader.readAsDataURL(file);
    };

    var activateMasterEvents = function () {
        // Set up the master mouse event handlers
        document.onmousedown = null;
//        document.addEventListener("mousemove", mouseMove, false);
//        document.addEventListener("touchmove", mouseMove, false);
//        document.addEventListener("mouseup", mouseUp, false);
//        document.addEventListener("touchend", mouseUp, false);

        // Set up the master key event handler
        document.onkeydown = keyDown;

        // Set up the drag'n'drop handler
        var dropElement = document.body.parentNode;

        dropElement.addEventListener("dragenter", function dragenter(e) {
            e.stopPropagation();
            e.preventDefault();
        }, false);

        dropElement.addEventListener("dragover", function dragenter(e) {
            e.stopPropagation();
            e.preventDefault();
        }, false);

        dropElement.addEventListener("drop", onFileDrop, false);
    };

    var deactivateMasterEvents = function () {
        // Set up the master mouse event handlers
        document.onmousedown = function () {
            return true;
        };

        document.onmousemove = null;
        document.onmouseup = null;

        // Set up the master key event handler
        document.onkeydown = null;
    };

    var buildSequencerTable = function () {
        var table = document.getElementById("sequencer-table"),
            tr, th, td;

        for (var row = 0; row < MAX_SONG_ROWS; row++) {
            tr = document.createElement("tr");

            if (row % 4 === 0) {
                tr.className = "beat";
            }

            th = document.createElement("th");
            th.id = "spr" + row;
            th.textContent = "" + row;
            tr.appendChild(th);

            for (var col = 0; col < 8; col++) {
                td = document.createElement("td");
                td.id = "sc" + col + "r" + row;
                td.textContent = " ";
                td.addEventListener("mousedown", onSequencerMouseDown, false);
                td.addEventListener("mouseover", onSequencerMouseOver, false);
                td.addEventListener("mouseup", onSequencerMouseUp, false);
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }
    };

    var getCurrentBeatDistance = function (table) {
        var beatDistance = 1;

        while (beatDistance < table.children.length) {
            if (table.children[beatDistance].className === "beat") {
                break;
            }

            beatDistance++;
        }

        return beatDistance;
    };

    var getBeatDistance = function () {
        var bpm          = getBPM(),
            beatDistance = 4;

        if (mSong.patternLen % 3 === 0) {
            beatDistance = 3;
        } else if (mSong.patternLen % 4 === 0) {
            beatDistance = 4;
        } else if (mSong.patternLen % 2 === 0) {
            beatDistance = 2;
        } else if (mSong.patternLen % 5 === 0) {
            beatDistance = 5;
        }

        if ((bpm / beatDistance) >= 40 && mSong.patternLen > 24 && (mSong.patternLen % (beatDistance * 2) === 0)) {
            beatDistance *= 2;
        }

        return beatDistance;
    };

    var buildPatternTable = function () {
        var beatDistance = getBeatDistance(),
            table        = document.getElementById("pattern-table");

        if (table.children.length === mSong.patternLen && getCurrentBeatDistance(table) === beatDistance) {
            return;
        }

        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        var tr, th, td;

        for (var row = 0; row < mSong.patternLen; row++) {
            tr = document.createElement("tr");

            if (row % beatDistance === 0) {
                tr.className = "beat";
            }

            th = document.createElement("th");
            th.id = "ppr" + row;
            th.textContent = "" + row;
            tr.appendChild(th);

            for (var col = 0; col < 4; col++) {
                td = document.createElement("td");
                td.id = "pc" + col + "r" + row;
                td.textContent = " ";
                td.addEventListener("mousedown", onPatternMouseDown, false);
                td.addEventListener("mouseover", onPatternMouseOver, false);
                td.addEventListener("mouseup", onPatternMouseUp, false);
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }
    };

    var buildFxTable = function () {
        var beatDistance = getBeatDistance(),
            table        = document.getElementById("fxtrack-table");

        if (table.children.length === mSong.patternLen && getCurrentBeatDistance(table) === beatDistance) {
            return;
        }

        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        var tr, td;

        for (var row = 0; row < mSong.patternLen; row++) {
            tr = document.createElement("tr");

            if (row % beatDistance === 0) {
                tr.className = "beat";
            }

            td = document.createElement("td");
            td.id = "fxr" + row;
            td.textContent = String.fromCharCode(160);  // &nbsp;
            td.addEventListener("mousedown", onFxTrackMouseDown, false);
            td.addEventListener("mouseover", onFxTrackMouseOver, false);
            td.addEventListener("mouseup", onFxTrackMouseUp, false);
            tr.appendChild(td);
            table.appendChild(tr);
        }
    };

    //--------------------------------------------------------------------------
    // Initialization
    //--------------------------------------------------------------------------

    function openMidi() {

    }

    var mPanLeft = $("#pan-left");
    var mPanRight = $("#pan-right");

    this.init = function () {
        $(".knob").knob({
            inline:      false,
            width:       50,
            height:      50,
            bgColor:     "#2b3e50",
            fgColor:     "#df691a",
            inputColor:  "#ebebeb",
            angleOffset: -125,
            angleArc:    250,
            cursor:      10
        });

        $("input[type=range]").rsSlider({});

        // Parse URL
        mBaseURL = getURLBase(window.location.href);
        mGETParams = parseURLGetData(window.location.href);

        // Set up presets
        initPresets();

        // Build the UI tables
        buildSequencerTable();

        // Set up GUI elements
//        document.getElementById("osc1_vol").sliderProps = {min: 0, max: 255};
//        document.getElementById("osc1_semi").sliderProps = {min: 92, max: 164};
//
//        document.getElementById("osc2_vol").sliderProps = {min: 0, max: 255};
//        document.getElementById("osc2_semi").sliderProps = {min: 92, max: 164};
//
//        document.getElementById("osc2_det").sliderProps = {
//            min: 0, max: 255, nonLinear: true
//        };
//
//        document.getElementById("noise_vol").sliderProps = {min: 0, max: 255};
//
//        document.getElementById("env_att").sliderProps = {min: 0, max: 255};
//        document.getElementById("env_sust").sliderProps = {min: 0, max: 255};
//        document.getElementById("env_rel").sliderProps = {min: 0, max: 255};
//
//        document.getElementById("lfo_amt").sliderProps = {min: 0, max: 255};
//        document.getElementById("lfo_freq").sliderProps = {min: 0, max: 16};
//
//        document.getElementById("fx_freq").sliderProps = {
//            min: 0, max: 255, nonLinear: true
//        };
//
//        document.getElementById("fx_res").sliderProps = {min: 0, max: 254};
//
//        document.getElementById("fx_dist").sliderProps = {
//            min: 0, max: 255, nonLinear: true
//        };
//
//        document.getElementById("fx_drive").sliderProps = {min: 0, max: 255};
//
//        document.getElementById("fx_pan_amt").sliderProps = {min: 0, max: 255};
//        document.getElementById("fx_pan_freq").sliderProps = {min: 0, max: 16};
//
//        document.getElementById("fx_dly_amt").sliderProps = {min: 0, max: 255};
//        document.getElementById("fx_dly_time").sliderProps = {min: 0, max: 16};

        // Create audio element, and always play the audio as soon as it's ready
        try {
            //noinspection JSUnresolvedFunction
            mAudio = new Audio();
            mAudioTimer.setAudioElement(mAudio);

            mAudio.addEventListener("canplay", function () {
                this.play();
            }, true);
        } catch (err) {
            mAudio = null;
        }

        // Load the song
        var songData = getURLSongData(mGETParams && mGETParams.data && mGETParams.data[0]),
            song     = songData ? binToSong(songData) : null;

        mSong = song ? song : makeNewSong();

        // Update UI according to the loaded song
        updateSongInfo();
        updateSequencer();
        updatePattern();
        updateFxTrack();
        updateInstrument(true);

        // Initialize the song
        setEditMode(EDIT_PATTERN);
        setSelectedSequencerCell(0, 0);
        setSelectedPatternCell(0, 0);

        // Menu
        $("#logo").on("click", about);
        $("#newSong").on("click", newSong);
        $("#openSong").on("click", openSong);
        $("#openMidi").on("click", openMidi);
        $("#saveSong").on("click", saveSong);
        $("#exportJS").on("click", exportJS);
        $("#exportWAV").on("click", exportWAV);
        $("#playSong").on("click", playSong);
        $("#playRange").on("click", playRange);
        $("#stopPlaying").on("click", stopPlaying);
        $("#about").on("click", about);

        document.getElementById("bpm").onfocus = bpmFocus;
        document.getElementById("rpp").onfocus = rppFocus;

        document.getElementById("sequencerCopy").onmousedown = sequencerCopyMouseDown;
        document.getElementById("sequencerPaste").onmousedown = sequencerPasteMouseDown;
        document.getElementById("sequencerPatUp").onmousedown = sequencerPatUpMouseDown;
        document.getElementById("sequencerPatDown").onmousedown = sequencerPatDownMouseDown;

        document.getElementById("patternCopy").onmousedown = patternCopyMouseDown;
        document.getElementById("patternPaste").onmousedown = patternPasteMouseDown;
        document.getElementById("patternNoteUp").onmousedown = patternNoteUpMouseDown;
        document.getElementById("patternNoteDown").onmousedown = patternNoteDownMouseDown;
        document.getElementById("patternOctaveUp").onmousedown = patternOctaveUpMouseDown;
        document.getElementById("patternOctaveDown").onmousedown = patternOctaveDownMouseDown;

        document.getElementById("fxCopy").onmousedown = fxCopyMouseDown;
        document.getElementById("fxPaste").onmousedown = fxPasteMouseDown;

        document.getElementById("instrPreset").onfocus = instrPresetFocus;
        document.getElementById("instrPreset").onchange = selectPreset;

        // Osc #1
        $("[name=osc1_wave]").on("change", onOsc1WaveChange);
        $("#osc1_vol").rsSlider("change", onSliderChange);
        $("#osc1_semi").rsSlider("change", onSliderChange);
        $("#osc1_xenv").on("change", onCheckboxChange);

        // Osc #2
        $("[name=osc2_wave]").on("change", onOsc2WaveChange);
        $("#osc2_vol").rsSlider("change", onSliderChange);
        $("#osc2_semi").rsSlider("change", onSliderChange);
        $("#osc2_det").rsSlider("change", onSliderChange);
        $("#osc2_xenv").on("change", onCheckboxChange);

        // Noise
        $("#noise_vol").rsSlider("change", onSliderChange);

        // Envelope
        $("#env_att").rsSlider("change", onSliderChange);
        $("#env_sust").rsSlider("change", onSliderChange);
        $("#env_rel").rsSlider("change", onSliderChange);

        // LFO
        $("[name=lfo_wave]").on("change", onLfoWaveChange);
        $("#lfo_amt").rsSlider("change", onSliderChange);
        $("#lfo_freq").rsSlider("change", onSliderChange);
        $("#lfo_fxfreq").on("change", onCheckboxChange);

        // FX
        $("[name=fx_filt]").on("change", onFxFiltChange);
        $("#fx_freq").rsSlider("change", onSliderChange);
        $("#fx_res").rsSlider("change", onSliderChange);
        $("#fx_dly_amt").rsSlider("change", onSliderChange);
        $("#fx_dly_time").rsSlider("change", onSliderChange);
        $("#fx_pan_amt").rsSlider("change", onSliderChange);
        $("#fx_pan_freq").rsSlider("change", onSliderChange);
        $("#fx_dist").rsSlider("change", onSliderChange);
        $("#fx_drive").rsSlider("change", onSliderChange);

        document.getElementById("octaveDown").addEventListener("mousedown", onOctaveDownClick, false);
        document.getElementById("octaveDown").addEventListener("touchstart", onOctaveDownClick, false);
        document.getElementById("octaveUp").addEventListener("mousedown", onOctaveUpClick, false);
        document.getElementById("octaveUp").addEventListener("touchstart", onOctaveUpClick, false);

        // Keyboard
        document.getElementById("keyboard").addEventListener("mousedown", onKeyboardClick, false);
        document.getElementById("keyboard").addEventListener("touchstart", onKeyboardClick, false);

        // Instrument menu
        document.getElementById("instrCopy").onmousedown = instrCopyMouseDown;
        document.getElementById("instrPaste").onmousedown = instrPasteMouseDown;

        $("#open-song-button").on("click", onOpenSongClick);

        // Initialize the MIDI handler
        initMIDI();

        // Set up master event handlers
        activateMasterEvents();

        // Show the about dialog (if no song was loaded)
        if (!songData) {
            showAboutDialog();
        }

        // Start the jammer
        mJammer.start();

        // Update the jammer rowLen (BPM) - requires that the jammer has been
        // started.
        mJammer.updateRowLen(mSong.rowLen);

        $("body").addClass("loaded");
    };
};

//------------------------------------------------------------------------------
// Program start
//------------------------------------------------------------------------------

$(function () {
    try {
        // Create a global GUI object, and initialize it
        var gGui = new CGUI();
        gGui.init();
    } catch (err) {
        alert("Unexpected error: " + err.message);
    }
});