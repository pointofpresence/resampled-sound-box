//noinspection JSLint
var gulp         = require("gulp"),              // Gulp JS
    out          = require("gulp-out"),          // output to file
    minifyHTML   = require("gulp-minify-html"),  // min HTML
    csso         = require("gulp-csso"),         // CSS min
    less         = require("gulp-less"),         // LESS
    concat       = require("gulp-concat"),       // concat
    uglify       = require("gulp-uglify"),       // JS min
    ejsmin       = require("gulp-ejsmin"),       // EJS min
    header       = require("gulp-header"),       // banner maker
    mkdirp       = require("mkdirp"),            // mkdir
    fs           = require("fs"),                // fs
    autoprefixer = require('gulp-autoprefixer'), // CSS autoprefixer
    gutil        = require("gulp-util"),         // log and other
    chalk        = require("chalk"),             // colors
    dateFormat   = require("dateformat"),        // date helper
    jsonHelper   = require("resampled-json-io"), // JSON helper
    jade         = require("gulp-jade"),         // Jade compiler
    replace      = require("gulp-replace"),      // replace
    zip          = require("gulp-zip"),          // zip
    runSequence  = require("run-sequence");      // sync

var banner = [
    '/**',
    ' * This file is part of ReSampled SoundBox.',
    ' *',
    ' * Based on SoundBox by Marcus Geelnard (c) 2011-2013',
    ' * <%= new Date().getFullYear() %> <%= pkg.author %>',
    ' * <%= pkg.title %> (<%= pkg.name %>) - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @build <%= pkg.lastBuildDateHuman %>',
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

var pkg = require('./package.json');

var DEMO              = "./demo",
    TRACKER           = "./tracker",
    TRACKER_JS        = TRACKER + "/js",
    TRACKER_JS_VENDOR = TRACKER_JS + "/third_party";

function buildDemo() {
    return runSequence([
        "buildDemoJsMin",
        "buildDemoJs",
        "buildDemoHtmlMin",
        "buildDemoHtml",
        "buildDemoDependencies"
    ], "compressDemo");
}

function compressDemo() {
    gutil.log("Compressing demo");

    var dir = DEMO + "/";
    mkdirp(dir);

    return gulp.src([
        "./tracker/js/third_party/Blob.js",
        dir + "src/demo.html",
        dir + "player-small.min.js",
        dir + "player-small.js"
    ])
        .pipe(zip("player-demo.zip"))
        .pipe(gulp.dest(dir));
}

function buildDemoJsMin() {
    gutil.log("Creating JS in " + chalk.magenta(DEMO) + "...");

    return gulp
        .src(DEMO + "/src/player-small.js")
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(out(DEMO + "/player-small.min.js"));
}

function buildDemoJs() {
    gutil.log("Creating JS in " + chalk.magenta(DEMO) + "...");

    return gulp
        .src(DEMO + "/src/player-small.js")
        .pipe(header(banner, {pkg: pkg}))
        .pipe(out(DEMO + "/player-small.js"));
}

function buildDemoHtmlMin() {
    gutil.log("Creating HTML in " + chalk.magenta(DEMO) + "...");

    var opts = {
        conditionals: true,
        spare:        true,
        empty:        true,
        cdata:        true,
        quotes:       true,
        loose:        false
    };

    return gulp
        .src(DEMO + "/src/demo.html")
        .pipe(minifyHTML(opts))
        .pipe(out(DEMO + "/index.html"));
}

function buildDemoHtml() {
    gutil.log("Creating HTML in " + chalk.magenta(DEMO) + "...");

    return gulp
        .src(DEMO + "/src/demo.html")
        //TODO: something here
        .pipe(gulp.dest(DEMO));
}

function buildDemoDependencies() {
    gutil.log("Creating JS in " + chalk.magenta(DEMO) + "...");

    return gulp
        .src(TRACKER_JS_VENDOR + "/Blob.js")
        .pipe(gulp.dest(DEMO));
}

// demo
gulp.task("buildDemo", buildDemo);
gulp.task("buildDemoHtml", buildDemoHtml);
gulp.task("buildDemoHtmlMin", buildDemoHtmlMin);
gulp.task("buildDemoJs", buildDemoJs);
gulp.task("buildDemoJsMin", buildDemoJsMin);
gulp.task("buildDemoDependencies", buildDemoDependencies);
gulp.task("compressDemo", compressDemo);

// watcher
gulp.task("watch", function () {
    gulp.watch(DEMO + "/src/demo.html", function () {
        buildCss(name)
    });
});
