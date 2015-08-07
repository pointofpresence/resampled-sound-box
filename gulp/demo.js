"use strict";

var out          = require("gulp-out"),          // output to file
    runSequence  = require("run-sequence"),      // sync
    gutil        = require("gulp-util"),         // log and other
    chalk        = require("chalk"),             // colors
    uglify       = require("gulp-uglify"),       // JS min
    header       = require("gulp-header"),       // banner maker
    mkdirp       = require("mkdirp"),            // mkdir
    minifyHTML   = require("gulp-minify-html");  // min HTML

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

    var dir = config.demo + "/";
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
    gutil.log("Creating JS in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/player-small.js")
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe(out(config.demo + "/player-small.min.js"));
}

function buildDemoJs() {
    gutil.log("Creating JS in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/player-small.js")
        .pipe(header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe(out(config.demo + "/player-small.js"));
}

function buildDemoHtmlMin() {
    gutil.log("Creating HTML in " + chalk.magenta(config.demo) + " ...");

    var opts = {
        conditionals: true,
        spare:        true,
        empty:        true,
        cdata:        true,
        quotes:       true,
        loose:        false
    };

    return gulp
        .src(config.demo + "/src/demo.html")
        .pipe(minifyHTML(opts))
        .pipe(out(config.demo + "/index.html"));
}

function buildDemoHtml() {
    gutil.log("Creating HTML in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/demo.html")
        //TODO: something here
        .pipe(gulp.dest(config.demo));
}

function buildDemoDependencies() {
    gutil.log("Creating JS in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.trackerJsDemo + "/Blob.js")
        .pipe(gulp.dest(config.demo));
}

gulp.task("buildDemo", buildDemo);
gulp.task("buildDemoHtml", buildDemoHtml);
gulp.task("buildDemoHtmlMin", buildDemoHtmlMin);
gulp.task("buildDemoJs", buildDemoJs);
gulp.task("buildDemoJsMin", buildDemoJsMin);
gulp.task("buildDemoDependencies", buildDemoDependencies);
gulp.task("compressDemo", compressDemo);