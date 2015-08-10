"use strict";

var gutil        = require("gulp-util"),         // log and other
    chalk        = require("chalk"),             // colors
    mkdirp       = require("mkdirp"),            // mkdir
    less         = require("gulp-less"),         // LESS
    autoprefixer = require('gulp-autoprefixer'), // CSS autoprefixer
    csso         = require("gulp-csso"),         // CSS min
    header       = require("gulp-header"),       // banner maker
    out          = require("gulp-out"),          // output to file
    concat       = require("gulp-concat"),       // concat
    runSequence  = require("run-sequence"),      // sync
    uglify       = require("gulp-uglify"),       // JS min
    dateFormat   = require("dateformat"),        // date helper
    webServer    = require("gulp-webserver"),    // web server
    notify       = require("gulp-notify");       // notifications

function buildCss() {
    gutil.log("Creating CSS in " + chalk.magenta(config.trackerCss) + " ...");

    mkdirp(config.trackerCss);

    gulp
        .src(config.trackerLess + "/main.less")
        .pipe(less())
        .on("error", notify.onError({
            message: 'LESS error: <%= error.message %>'
        }))
        .pipe(autoprefixer({
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ]
        }))
        .pipe(csso())
        .pipe(header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe(out(config.trackerCss + "/app.css"));
}

function buildFonts() {
    gutil.log("Creating fonts in " + chalk.magenta(config.trackerFonts) + " ...");
    mkdirp(config.trackerFonts);

    gulp
        .src(config.node + "/font-awesome/fonts/*")
        .pipe(gulp.dest(config.trackerFonts));
}

function buildJs() {
    gutil.log("Creating JS in " + chalk.magenta(config.trackerJs) + " ...");

    gulp
        .src([
            config.node + "/jquery/dist/jquery.js",
            config.node + "/bootstrap/dist/js/bootstrap.js",
            config.node + "/jquery-knob/dist/jquery.knob.min.js"

        ])
        .pipe(concat("vendor.js"))
        .pipe(uglify())
        .pipe(gulp.dest(config.trackerJs));

    gulp
        .src(config.trackerJsSrc + "/player-worker.js")
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe(gulp.dest(config.trackerJs));

    gulp
        .src([

            config.trackerJsSrc + "/jquery.rs.slider.js",
            config.trackerJsSrc + "/demo-songs.js",
            config.trackerJsSrc + "/presets.js",
            config.trackerJsSrc + "/player.js",
            config.trackerJsSrc + "/jammer.js",
            config.trackerJsSrc + "/rle.js",
            config.trackerJsVendor + "/deflate.js",
            config.trackerJsVendor + "/inflate.js",
            config.trackerJsVendor + "/Blob.js",
            config.trackerJsVendor + "/FileSaver.js",
            config.trackerJsVendor + "/WebMIDIAPI.js",
            config.trackerJsSrc + "/CBinParser.js",
            config.trackerJsSrc + "/CBinWriter.js",
            config.trackerJsSrc + "/CAudioTimer.js",
            config.trackerJsSrc + "/CUtil.js",
            config.trackerJsSrc + "/CSong.js",
            config.trackerJsSrc + "/gui.js"
        ])
        .pipe(concat("modules.js"))
        //.pipe(uglify())
        .on("error", notify.onError({
            message: 'Uglify error: <%= error.message %>'
        }))
        .pipe(header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe(gulp.dest(config.trackerJs));
}

gulp.task("buildJs", buildJs);
gulp.task("buildCss", buildCss);
gulp.task("buildFonts", buildFonts);

// watcher
gulp.task("watch", function () {
    gulp.watch(config.demo + "/src/demo.html", function () {
        buildDemoHtml();
        buildDemoHtmlMin();
    });

    gulp.watch(config.demo + "/src/player-small.js", function () {
        buildDemoJs();
        buildDemoJsMin();
    });

    gulp.watch(config.trackerJsSrc + "/**/*.js", buildJs);
    gulp.watch(config.trackerLess + "/**/*.less", buildCss);
});

gulp.task("webserver", function () {
    return gulp
        .src(config.root)
        .pipe(webServer(config.webserver.server));
});

gulp.task("build", runSequence(["buildJs", "buildCss", "buildFonts"]));

gulp.task("default", runSequence("build", "watch", "webserver"));