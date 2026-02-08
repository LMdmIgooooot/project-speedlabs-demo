const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.saucedemo.com",
    "specPattern": "cypress/e2e/*.spec.js",
    "supportFile": 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     env: {
      USERNAME: process.env.USERNAME
    }
  },
});
