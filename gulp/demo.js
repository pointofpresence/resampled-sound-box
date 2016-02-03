"use strict";

var
    runSequence = require("run-sequence"),      // sync
    chalk       = require("chalk"),             // colors
    mkdirp      = require("mkdirp"),            // mkdir
    dateFormat  = require("dateformat");        // date helper


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
    $.util.log("Compressing demo");

    var dir = config.demo + "/";
    mkdirp(dir);

    return gulp.src([
        "./tracker/js/third_party/Blob.js",
        dir + "src/demo.html",
        dir + "player-small.min.js",
        dir + "player-small.js"
    ])
        .pipe($.zip("player-demo.zip"))
        .pipe($.size({title: "Zip"}))
        .pipe(gulp.dest(dir));
}

function buildDemoJsMin() {
    $.util.log("Creating JS (min) in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/player-small.js")
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe($.size({title: "JS (min)"}))
        .pipe($.out(config.demo + "/player-small.min.js"));
}

function buildDemoJs() {
    $.util.log("Creating JS in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/player-small.js")
        .pipe($.header(banner, {pkg: pkg, dateFormat: dateFormat, now: new Date}))
        .pipe($.size({title: "JS"}))
        .pipe($.out(config.demo + "/player-small.js"));
}

function buildDemoHtmlMin() {
    $.util.log("Creating HTML (min) in " + chalk.magenta(config.demo) + " ...");

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
        .pipe($.minifyHtml(opts))
        .pipe($.size({title: "HTML (min)"}))
        .pipe($.out(config.demo + "/index.html"));
}

function buildDemoHtml() {
    $.util.log("Creating HTML in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/demo.html")
        .pipe($.size({title: "HTML"}))
        .pipe(gulp.dest(config.demo));
}

function buildDemoDependencies() {
    $.util.log("Creating dependencies in " + chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.trackerJsDemo + "/Blob.js")
        .pipe($.size({title: "Dependencies"}))
        .pipe(gulp.dest(config.demo));
}

gulp.task("buildDemo", buildDemo);
gulp.task("buildDemoHtml", buildDemoHtml);
gulp.task("buildDemoHtmlMin", buildDemoHtmlMin);
gulp.task("buildDemoJs", buildDemoJs);
gulp.task("buildDemoJsMin", buildDemoJsMin);
gulp.task("buildDemoDependencies", buildDemoDependencies);
gulp.task("compressDemo", compressDemo);