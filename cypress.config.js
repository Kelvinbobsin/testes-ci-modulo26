const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    //reporter: "mochawesome",
    reporter:  'cypress-junit-reporter',
    reporterOptions: {
      //reportDir: "mochawesome-report",
      reportDir: "test-results.xml",
      //overwrite: false,
      //html: true,
      //json: false
    }
  },
});