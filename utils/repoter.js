const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  metadata: {
    browser: { name: 'chrome' },
    device: 'Local Machine',
    platform: { name: 'windows' }
  }
});