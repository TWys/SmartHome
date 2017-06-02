// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  // list of files / patterns to load in the browser
  files: [
    "src/assets/js/jquery.min.js",   // Link do jquery
    "src/app/*.js",                   // Wszystkie pliki js projektu
    "test/*.js",                     // Testy
    "test/test.js",                   // Test
    "node_modules/angular/angular.js",
    "node_modules/angular-mocks/angular-mocks.js",
  ],


  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
