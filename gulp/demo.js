"use strict";

gulp.task("buildDemo", function () {
    return $.runSequence([
        "buildDemoJsMin",
        "buildDemoJs",
        "buildDemoHtml",
        "buildArpDemoHtml",
        "buildDemoDependencies"
    ], "compressDemo");
});

gulp.task("buildDemoHtml", function () {
    $.util.log("Creating HTML in " + $.chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/demo.html")
        .pipe($.size({title: "HTML"}))
        .pipe(gulp.dest(config.demo));
});

gulp.task("buildArpDemoHtml", function () {
    $.util.log("Creating HTML in " + $.chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/arpeggio-demo.html")
        .pipe($.size({title: "HTML"}))
        .pipe(gulp.dest(config.demo));
});

gulp.task("buildDemoJs", function () {
        $.util.log("Creating JS in " + $.chalk.magenta(config.demo) + " ...");

        return gulp
            .src(config.demo + "/src/player-small.js")
            .pipe($.header(banner, {pkg: pkg, dateFormat: $.dateFormat, now: new Date}))
            .pipe($.size({title: "JS"}))
            .pipe($.out(config.demo + "/player-small.js"));
    }
);

gulp.task("buildDemoJsMin", function () {
    $.util.log("Creating JS (min) in " + $.chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.demo + "/src/player-small.js")
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg, dateFormat: $.dateFormat, now: new Date}))
        .pipe($.size({title: "JS (min)"}))
        .pipe($.out(config.demo + "/player-small.min.js"));
});

gulp.task("buildDemoDependencies", function () {
    $.util.log("Creating dependencies in " + $.chalk.magenta(config.demo) + " ...");

    return gulp
        .src(config.trackerJsDemo + "/Blob.js")
        .pipe($.size({title: "Dependencies"}))
        .pipe(gulp.dest(config.demo));
});

gulp.task("compressDemo", function () {
    $.util.log("Compressing demo");

    var dir = config.demo + "/";
    $.mkdirp(dir);

    return gulp.src([
        "./tracker/js/third_party/Blob.js",
        dir + "src/demo.html",
        dir + "src/arpeggio-demo.html",
        dir + "player-small.min.js",
        dir + "player-small.js"
    ])
        .pipe($.zip("player-demo.zip"))
        .pipe($.size({title: "Zip"}))
        .pipe(gulp.dest(dir));
});