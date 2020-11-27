// Karma configuration
// Generated on Thu Nov 26 2020 16:53:43 GMT+0800 (中国标准时间)
var path = require('path');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'webpack'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*.test.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha', 'coverage-istanbul', 'coverage'],

    coverageIstanbulReporter: {
        // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
        reports: ['html', 'lcovonly', 'text-summary'],

        // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
        dir: path.join(__dirname, 'coverage'),

        // Combines coverage information from multiple browsers into one report rather than outputting a report
        // for each browser.
        combineBrowserReports: true,

        // if using webpack and pre-loaders, work around webpack breaking the source path
        fixWebpackSourcePaths: true,

        // Omit files with no statements, no functions and no branches from the report
        skipFilesWithNoCoverage: true,

        // Most reporters accept additional config options. You can pass these through the `report-config` option
        'report-config': {
            // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
            html: {
                // outputs the report in ./coverage/html
                subdir: 'html'
            }
        }
    },

    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/'
    },

    webpack: {
        mode: 'development',
        devtool: 'inline-source-map',
        resolve: {
            enforceExtension: false,
            extensions: [".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {loader: "babel-loader"}
                }
            ]
        },
        watch: false
    },
    webpackMiddleware: {
        status: 'errors-only'
    },
    webpackServer: {
        noInfo: true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
