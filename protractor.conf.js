'use strict';

const config = {
    params: {
        defaultTimeOut: 5000
    },
    getPageTimeout: 10000,
    allScriptsTimeout: 19000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 40000,
        showTiming: true
    },
    multiCapabilities: [
        // {
        //     name: 'fullScreen',
        //     browserName: 'chrome',
        //     maxInstances: 4,
        //     shardTestFiles: true,
        //     chromeOptions: {
        //         args: ['--start-fullscreen', '--disable-infobars']
        //     }
        // },
        // {
        //     name: 'tablet',
        //     browserName: 'chrome',
        //     maxInstances: 4,
        //     shardTestFiles: true,
        //     chromeOptions: {
        //         args: ['--window-size=1024,768', '--disable-infobars']
        //     }
        // },
        {
            browserName: 'firefox',
            maxInstances: 4,
            shardTestFiles: true
        }
    ],

    specs: [
        'test/e2e/scenarios/carQS.e2e.js'
    ],

    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar'
};

exports.config = config;
