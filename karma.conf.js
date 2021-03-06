process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// No Longer needed because of our Gruntfile.js
		// files: [
		// 	'bower_components/angular/angular.js',
		// 	'bower_components/angular-mocks/angular-mocks.js',
		// 	'config/**/*.js',
		// 	'modules/**/*.spec.js',
		// 	'global/**/*.spec.js',
		// 	'modules/**/*.js',
		// 	'global/**/*.js'
		// ],

		// list of files to exclude
		exclude: [

		],

		plugins: [
			'karma-*'
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'client/global/directives/**/*.html': ['ng-html2js'],
			'client/modules/**/*.directive.html': ['ng-html2js'],
			'client/global/!(darkboxServices)/**/!(*.spec).js': ['babel', 'coverage'],
			'client/modules/**/!(*.spec).js': ['babel', 'coverage'],
			'client/global/!(darkboxServices)/**/*.spec.js': ['babel'],
			'client/modules/**/*.spec.js': ['babel']
		},

		babelPreprocessor: {
			options: {
				presets: ['env'],
				sourceMap: 'inline'
			}
		},

		ngHtml2JsPreprocessor: {
			stripPrefix: 'client/',
			moduleName: 'templates'
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage', 'html'],

		coverageReporter: {
			type: 'lcov',
			dir: 'coverage',
            check: {
                global: {
                    statements: 80,
                    branches: 65,
                    functions: 80,
                    lines: 80,
					excludes: []
                }
            }
		},

		htmlReporter: {
			outputFile: '_specs.html',

			pageTitle: 'Unit Tests'
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		// autoWatch: false,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			// 'Chrome_Incognito',
			'ChromeHeadless'
		],

		customLaunchers: {
			Chrome_Incognito: {
				base: 'Chrome',
				flags: ['-incognito']
			}
		},

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		// singleRun: true
	});
};
