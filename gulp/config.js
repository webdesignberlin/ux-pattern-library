// gulp pattern library + site configuration

// pattern library
var dest = './public';
var src = './_src';
var local = './_site';

// documentation site
var pl_src = './_src/pl';
var pl_dest = './public/pl';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: local
        }
    },
    styles: {
        // pattern library
        src: src + '/static/sass',
        src_files: src + '/static/sass/**/*.scss',
        src_static: src + '/static/css',
        src_static_files: src + '/static/css/**/*.css',
        dest: dest + '/css',
        local: local + '/public/css',

        // documentation site
        pl_src: pl_src + '/static/sass',
        pl_src_files: pl_src + '/static/sass/**/*.scss',
        pl_src_static: src + '/static/css',
        pl_src_static_files: src + '/static/css/**/*.css',
        pl_dest: pl_dest + '/css',
        pl_local: local + '/public/pl/css'
    },
    images: {
        // pattern library
        src: src + '/static/images',
        src_files: src + '/static/images/**',
        dest: dest + '/images',
        local: local + '/public/images',

        // documentation site
        pl_src: pl_src + '/static/images',
        pl_src_files: pl_src + '/static/images/**',
        pl_dest: pl_dest + '/images',
        pl_local: local + '/public/pl/images'
    },
    scripts: {
        // pattern library
        src: src + '/static/js/**/*.js',
        dest: dest + '/js',
        local: local + '/public/js',

        // documentation site
        pl_src: pl_src + '/static/js',
        pl_src_files: pl_src + '/static/js/**/*.js',
        pl_dest: pl_dest + '/js',
        pl_local: local + '/public/pl/js'
    },
    vendor: {
        // pattern library
        src: src + '/vendor/**',
        dest: dest + '/vendor',
        local: local + '/public/vendor',

        // documentation site
        pl_src: pl_src + '/vendor/**',
        pl_dest: pl_dest + '/vendor',
        pl_local: local + '/public/pl/vendor'
    },
    jekyll: {
        home: 'index.html',
        posts: '_posts/*',
        layouts: '_layouts/*.html'
    }
};

