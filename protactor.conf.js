'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['client/e2e/**/*.spec.js'],
  multiCapabilities: [
  	{'browserName': 'chrome'},
  	{'browserName': 'firefox'}
  ]
}