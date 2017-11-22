/**
 * Created by e070138 on 3/8/17.
 */

/* eslint-disable no-undef, strict, no-console */
'use strict';

import gulp from 'gulp'; // ES6 imports!
const plugins = require('gulp-load-plugins')();
import karma from 'karma';
import plato from 'plato';
import del from 'del';
import browserSync from 'browser-sync';
import es from 'event-stream';
import bowerFiles from 'main-bower-files';

// == PATH STRINGS ========

const paths = {
    ngModuleName: 'MerchantPortalApp',
    scss: 'client/styles/sass/**/*.scss',
    images: 'client/styles/images/*',
    index: 'client/index.gulp.html',
    partials: ['client/**/*.html', '!client/index.gulp.html', '!client/index.html'],
    static: [
        'client/downloads/**/*',
        'client/locale/**/*',
        'client/styles/fonts/**/*',
        'client/styles/images/**/*',
        'client/constants/**/*',
    ],
    tmp: '.tmp',
    dist: 'dist',
    distCss: 'dist/styles/css',
    distScripts: 'dist/js',
    scriptsServer: 'server/**/*.js',
    templateCache: 'dist/js/templates.js',
    scripts: [
        'client/modules/**/*.js',
        'client/global/**/*.js',
        'client/config/**/*.js',
        '!client/**/*.spec.js'
    ],
    forge: 'client/bower_components/forge/dist/forge.min.js',
    scriptsDevServer: 'server/**/*.js',
    npmDependencies: ["./node_modules/babel-polyfill/dist/polyfill.js"],
    bower: bowerFiles({
        "overrides": {
            "bootstrap-sass": {
                main: "**/bootstrap.js"
            },
            "angular": {
                "dependencies": {
                    "jquery": "*"
                }
            },
            "forge": {
                ignore: true
            }
        }
    }),
    bowerTests: bowerFiles({
        "overrides": {
            "bootstrap-sass": {
                main: "**/bootstrap.js"
            },
            "angular": {
                "dependencies": {
                    "jquery": "*"
                }
            },
            // "forge": {
            //     ignore: true
            // }
        }
    }),
    tests: [
        'client/test-helpers/**/*.js',
        'client/modules/**/*.router.js',
        'client/modules/**/*.module.js',
        'client/global/**/*.module.js',
        'client/config/app.js',
        'client/modules/**/*.js',
        'client/global/**/*.js',
        'client/config/**/*.js',
        'client/global/directives/**/*.html'
    ],
    protractor: 'client/e2e/**/*.spec.js'
};

let gitHash;
plugins.git.revParse({args:'--short HEAD'}, function (err, hash) {
    console.log('current git hash: ' + hash);
    gitHash = hash;
});

// ==========================================
//               Clean folders
// ==========================================
// Clean /.tmp and /dist folders
function clean() {
    return del([paths.dist, paths.tmp]);
}

// ==========================================
//             Copy Static Files
// ==========================================
// copy static files
function copy_static_files_tmp() {
    return gulp.src(paths.static, {base: './client'})
        .pipe(gulp.dest(paths.tmp + '/'));
}
// copy static files
function copy_static_files_dist() {
    return gulp.src(paths.static, {base: './client'})
        .pipe(gulp.dest(paths.dist + '/'));
}

// ==========================================
//              Compile SCSS
// ==========================================
// Compile sass with node-sass to /.tmp/styles/css
function compileStylesDev() {
    return gulp.src(paths.scss)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', function(err) {
            plugins.util.log(plugins.util.colors.red('[Error]'), err.toString());
            this.emit('end');
        }))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.tmp + "/styles/css"))
        .pipe(browserSync.stream({match: '**/main.css'}));
}
// Compile sass with node-sass to /dist/styles/css
function compileStylesProd() {
    return gulp.src(paths.scss)
        .pipe(plugins.sass({ outputStyle: 'compressed' }))
        .pipe(plugins.rename(`main-${gitHash}.css`))
        .pipe(gulp.dest(paths.distCss));
}

// ==========================================
//          Compile Html Partials
// ==========================================
function copy_partials() { // Copy partials when doing local dev
    return gulp.src(paths.partials)
        .pipe(gulp.dest(paths.tmp))
}

function compilePartials() { // Compile partials into templates.js when building production files
    return gulp.src(paths.partials)
        .pipe(plugins.ngHtml2js({
            moduleName: paths.ngModuleName
        }))
}

// ==========================================
//          Order Angular Scripts
// ==========================================
function orderedAppScripts() {
    return plugins.angularFilesort();
}

// ==========================================
//             Lint App Scripts
// ==========================================
function lintScripts() {
    return gulp.src(paths.scripts)
        .pipe(plugins.cached('linting'))
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
}
// ==========================================
//           Build Vendor Scripts
// ==========================================
// Copy bower scripts to .tmp/js
function builtVendorScriptsDev() {
    return gulp.src([...paths.npmDependencies, ...paths.bower])
        .pipe(gulp.dest(paths.tmp + "/js"))
}
// Compile bower scripts to dist/js/vendor.min.js
function builtVendorScriptsProd() {
    return gulp.src([...paths.npmDependencies, ...paths.bower])
        .pipe(plugins.concat(`vendor-${gitHash}.min.js`))
        .pipe(plugins.uglify().on('error', function(err) {
            plugins.util.log(plugins.util.colors.red('[Error]'), err.toString());
            this.emit('end');
        }))
        .pipe(gulp.dest(paths.distScripts))
}
// ==========================================
//             Build App Scripts
// ==========================================
// Copy app scripts to .tmp/js
function builtAppScriptsDev() {
    let lintedScripts = lintScripts()
        .pipe(plugins.cached('client'))
        .pipe(plugins.babel());

    return lintedScripts
        .pipe(orderedAppScripts())
        .pipe(gulp.dest(paths.tmp + "/js"));
}
// Compile app scripts to dist/js/merchantportal.min.js
function builtAppScriptsProd() {
    let lintedScripts = lintScripts()
        .pipe(plugins.babel())
        .pipe(plugins.uglify().on('error', function(err) {
            plugins.util.log(plugins.util.colors.red('[Error]'), err.toString());
            this.emit('end');
        }));
    let templates = compilePartials();

    return es.merge(lintedScripts, templates)
        .pipe(orderedAppScripts())
        .pipe(plugins.concat(`merchantportal-${gitHash}.min.js`))
        .pipe(gulp.dest(paths.distScripts));
}
// ==========================================
//                Copy forge                 separated since it is already minified and causes errors when deployed
// ==========================================
function copyForgeDev() {
    return gulp.src(paths.forge)
        .pipe(gulp.dest(paths.tmp + '/js'));
}
function copyForgeProd() {
    return gulp.src(paths.forge)
        .pipe(gulp.dest(paths.distScripts));
}
// ==========================================
//             Inject Into Index
// ==========================================
// Inject merchantportal and vendor scripts into index.html
function injectIndexDev() {
    let vendorScripts = builtVendorScriptsDev();
    let forge = copyForgeDev();
    let appScripts = builtAppScriptsDev();
    let appStyles = compileStylesDev();

    return gulp.src(paths.index)
        .pipe(plugins.rename("index.html"))
        .pipe(gulp.dest(paths.tmp)) // write first to get relative path for inject
        .pipe(plugins.inject(vendorScripts, {relative: true, name: 'bower', ignorePath: paths.tmp}))
        .pipe(plugins.inject(forge, {relative: true, name: 'forge', ignorePath: paths.tmp}))
        .pipe(plugins.inject(appScripts, {relative: true, name: 'merchantportal', ignorePath: paths.tmp}))
        .pipe(plugins.inject(appStyles, {relative: true, name: 'styles', ignorePath: paths.tmp}))
        // .pipe(plugins.htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest(paths.tmp));
}
// Inject merchantportal and vendor scripts into index.html
function injectIndexProd() {
    let vendorScripts = builtVendorScriptsProd();
    let forge = copyForgeProd();
    let appScripts = builtAppScriptsProd();
    let appStyles = compileStylesProd();

    return gulp.src(paths.index)
        .pipe(plugins.rename("index.html"))
        .pipe(gulp.dest(paths.dist)) // write first to get relative path for inject
        .pipe(plugins.inject(vendorScripts, {relative: true, name: 'bower', ignorePath: paths.dist}))
        .pipe(plugins.inject(forge, {relative: true, name: 'forge', ignorePath: paths.dist}))
        .pipe(plugins.inject(appScripts, {relative: true, name: 'merchantportal', ignorePath: paths.dist}))
        .pipe(plugins.inject(appStyles, {relative: true, name: 'styles', ignorePath: paths.dist}))
        // .pipe(plugins.htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest(paths.dist));
}

// ==========================================
//            Zip /dist Folder
// ==========================================
function zipDist() {
    let timeStamp = new Date();
    let year = timeStamp.getFullYear();
    let month = timeStamp.getMonth() + 1;
    if (month < 10 ) { month = '0' + month }
    let day = timeStamp.getDate();
    if (day < 10 ) { day = '0' + day }
    let hour = timeStamp.getHours();
    let minutes = timeStamp.getMinutes();
    if (minutes < 10 ) { minutes = '0' + minutes }

    return plugins.git.revParse({args:'--abbrev-ref HEAD'}, (err, branch) => {
        return gulp.src(paths.dist + '/**/*')
            .pipe(plugins.zip(`${branch}_${year}-${month}-${day}_${hour}${minutes}.zip`))
            .pipe(gulp.dest('./builds'));
    });
}


// ==========================================
//            Lint Server Scripts
// ==========================================
function validatedDevServerScripts() {
    return gulp.src(paths.scriptsDevServer)
        .pipe(plugins.cached('linting'))
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
}

// This task is used for building files into the .tmp/ folder for local server
let build_tmp = gulp.series(clean, gulp.parallel(copy_static_files_tmp, copy_partials), injectIndexDev);
// This task is used for building production ready minified JS/CSS files into the dist/ folder
let build_dist = gulp.series(
    clean,
    preBuildTest,
    gulp.parallel(copy_static_files_dist),
    injectIndexProd,
    zipDist
)

// ==========================================
//                  TESTS
// ==========================================
// Karma Unit Tests
function karmaTest(done) { // TODO: Open the specs.html file
    const server = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        files: [
            ...paths.bowerTests,
            ...paths.tests
        ],
    }, function (exitCode) {
        done();
        process.exit(exitCode);
    });
    server.start();
}

function preBuildTest(done) {
    const server = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        files: [
            ...paths.bowerTests,
            ...paths.tests
        ],
        singleRun: true
    }, function() {
        done();
    });
    server.on('run_complete', function(browsers, results) {
        if (results.error || results.failed) {
            done()
            process.exit();
        } else { done(); }
    });
    server.start();
}

// Protractor End-to-End Tests
function protractorTest() {
    return gulp.src(paths.protractor)
        .pipe(plugins.protractor.protractor({
            configFile: __dirname + "/protractor.conf.js"
        }))
        .on('error', function(err) {
            plugins.util.log(plugins.util.colors.red('[Error]'), err.toString());
            this.emit('end');
        })
}

// Generate code analysis report
function platoTest() {
    let outputDir = './platoReport';
    let options = {
        title: "Plato - MerchantPortal",
        // eslint: ".eslintrc"
    };
    let callback = (report) => {
        // once done the analysis,
        // execute this
    };

    plato.inspect(paths.scripts, outputDir, options, callback);
}
// ==========================================
//              Local development
// ==========================================
function browserSyncInit(baseDir) {
    return browserSync({
        server: {
            baseDir: baseDir
        },
        port: 9000,
        ui: {
            port: 9001
        }
    });
}
function reload(done) {
  browserSync.reload();
  done();
}
// start nodemon to auto-reload the dev server
function startNodemon(done) {
    plugins.nodemon({ script: 'server.js', ext: 'js', watch: ['server/'], env: {NODE_ENV : 'development'} })
        .on('change', validatedDevServerScripts)
        .on('crash', () => {
            console.log('Looks like you crashed Node somehow...')
        })
        .on('restart', () => {
            console.log('[nodemon] restarted dev server');
        });
    done();
}
function watchApp(done) {
    browserSyncInit(paths.tmp);
    gulp.watch([
        'client/styles/sass/**/*.{scss,sass}',
        'client/modules/**/*.{scss,sass}',
        'client/global/**/*.{scss,sass}'
    ], compileStylesDev);
    gulp.watch(paths.scripts).on('all', gulp.series(builtAppScriptsDev, reload));
    gulp.watch(paths.static).on('all', gulp.series(copy_static_files_tmp, reload));
    gulp.watch(paths.partials).on('all', gulp.series(copy_partials, reload));
    gulp.watch('bower.json').on('all', gulp.series(builtVendorScriptsDev, reload));
    done();
}

let serve = gulp.series(build_tmp, startNodemon, watchApp);

// ==========================================
//                GULP TASKS
// ==========================================

// Start BrowserSync local server
gulp.task('clean', clean);
gulp.task('styles', compileStylesProd);
gulp.task('build:tmp', build_tmp);
gulp.task('build:dist', build_dist);
gulp.task('build', build_dist); // Alias for build:dist
gulp.task('serve:dist', () => browserSyncInit(paths.dist) );
gulp.task('serve', serve);
gulp.task('watch', serve); // Alias for serve
gulp.task('test', karmaTest);
gulp.task('default', serve);
