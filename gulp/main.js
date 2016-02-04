"use strict";

gulp.task("buildJs", function () {
    $.util.log("Creating modules.js in " + $.chalk.magenta(config.trackerJs) + " ...");
    $.mkdirp(config.trackerJs);

    return gulp
        .src([
            config.node + "/jquery/dist/jquery.js",
            config.node + "/bootstrap/dist/js/bootstrap.js",
            config.node + "/jquery-knob/dist/jquery.knob.min.js",
            config.trackerJsSrc + "/jquery.rs.slider.js",
            config.trackerJsSrc + "/instProps.js",
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
            config.trackerJsVendor + "/JSMIDIparser.js",
            config.trackerJsSrc + "/CBinParser.js",
            config.trackerJsSrc + "/CBinWriter.js",
            config.trackerJsSrc + "/CAudioTimer.js",
            config.trackerJsSrc + "/CUtil.js",
            config.trackerJsSrc + "/CSong.js",
            config.trackerJsSrc + "/gui.js"
        ])
        .pipe(!isProd ? $.sourcemaps.init({loadMaps: true}) : $.util.noop())
        .pipe($.concat("modules.js"))
        .pipe($.uglify())
        .on("error", $.notify.onError({
            message: 'Uglify error: <%= error.message %>'
        }))
        .pipe($.header(banner, {pkg: pkg, dateFormat: $.dateFormat, now: new Date}))
        .pipe(!isProd ? $.sourcemaps.write() : $.util.noop())
        .pipe($.size({title: "modules.js"}))
        .pipe(gulp.dest(config.trackerJs));
});
gulp.task("buildWorker", function () {
    $.util.log("Creating player-worker.js in " + $.chalk.magenta(config.trackerJs) + " ...");
    $.mkdirp(config.trackerJs);

    return gulp
        .src(config.trackerJsSrc + "/player-worker.js")
        .pipe(!isProd ? $.sourcemaps.init({loadMaps: true}) : $.util.noop())
        .pipe($.uglify())
        .on("error", $.notify.onError({
            message: 'Uglify error: <%= error.message %>'
        }))
        .pipe($.header(banner, {pkg: pkg, dateFormat: $.dateFormat, now: new Date}))
        .pipe(!isProd ? $.sourcemaps.write() : $.util.noop())
        .pipe($.size({title: "player-worker.js"}))
        .pipe(gulp.dest(config.trackerJs));
});

gulp.task("buildCss", function () {
    $.util.log("Creating CSS in " + $.chalk.magenta(config.trackerCss) + " ...");
    $.mkdirp(config.trackerCss);

    return gulp
        .src(config.trackerLess + "/main.less")
        .pipe(!isProd ? $.sourcemaps.init({loadMaps: true}) : $.util.noop())
        .pipe($.less())
        .on("error", $.notify.onError({
            message: 'LESS error: <%= error.message %>'
        }))
        .pipe($.autoprefixer({
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
        .pipe($.csso())
        .pipe($.header(banner, {pkg: pkg, dateFormat: $.dateFormat, now: new Date}))
        .pipe(!isProd ? $.sourcemaps.write() : $.util.noop())
        .pipe($.size({title: "CSS"}))
        .pipe($.out(config.trackerCss + "/app.css"));
});

gulp.task("buildFonts", function () {
    $.util.log("Creating fonts in " + $.chalk.magenta(config.trackerFonts) + " ...");
    $.mkdirp(config.trackerFonts);

    return gulp
        .src(config.node + "/font-awesome/fonts/*")
        .pipe(gulp.dest(config.trackerFonts));
});

// watcher
gulp.task("watch", function () {
    gulp.watch(config.demo + "/src/demo.html", [
        'buildDemoHtml',
        'buildDemoHtmlMin'
    ]);

    gulp.watch(config.demo + "/src/player-small.js", [
        'buildDemoJs',
        'buildDemoJsMin'
    ]);

    gulp.watch(config.trackerJsSrc + "/**/*.js", ['buildJs']);
    gulp.watch(config.trackerLess + "/**/*.less", ['buildCss']);
});

gulp.task("webserver", function () {
    return gulp
        .src(config.root)
        .pipe($.webServer(config.webserver.server));
});

gulp.task("build", function () {
    return $.runSequence("buildJs", "buildWorker", "buildCss", "buildFonts");
});