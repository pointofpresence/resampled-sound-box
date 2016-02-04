"use strict";

var dir = require("require-dir");

// globals
global.$      = require("gulp-load-plugins")();
global.isProd = $.util.env.prod;
global.gulp   = require("gulp");
global.config = require('./config.json');
global.pkg    = require('./package.json');

$.runSequence = require("run-sequence");
$.dateFormat  = require("dateformat");
$.mkdirp      = require("mkdirp");
$.chalk       = require("chalk");

global.banner = [
    '/*!',
    ' * This file is part of ReSampled SoundBox.',
    ' *',
    ' * Based on SoundBox by Marcus Geelnard (c) 2011-2013',
    ' * <%= dateFormat(now, "yyyy") %> <%= pkg.author %>',
    ' * <%= pkg.title %> (<%= pkg.name %>) - <%= pkg.description %>',
    ' *',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.repository %>',
    ' * @license <%= pkg.license %>',
    ' *',
    ' * This software is provided \'as-is\', without any express or implied',
    ' * warranty. In no event will the authors be held liable for any damages',
    ' * arising from the use of this software.',
    ' *',
    ' * Permission is granted to anyone to use this software for any purpose,',
    ' * including commercial applications, and to alter it and redistribute it',
    ' * freely, subject to the following restrictions:',
    ' *',
    ' * 1. The origin of this software must not be misrepresented; you must not',
    ' *    claim that you wrote the original software. If you use this software',
    ' *    in a product, an acknowledgment in the product documentation would be',
    ' *    appreciated but is not required.',
    ' *',
    ' * 2. Altered source versions must be plainly marked as such, and must not be',
    ' *    misrepresented as being the original software.',
    ' *',
    ' * 3. This notice may not be removed or altered from any source',
    ' *    distribution.',
    ' */',
    ''
].join('\n');

dir("./gulp", {recurse: true});

gulp.task("default", function () {
    if (isProd) {
        return $.runSequence("build", "buildDemo");
    }

    return $.runSequence("build", "watch"/*, "webserver"*/);
});