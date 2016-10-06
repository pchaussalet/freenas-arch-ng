var path                    = require('path');
    gulp                    = require('gulp'),
    browserSync             = require('browser-sync').create();


gulp.task('serve', [], function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['serve']);
