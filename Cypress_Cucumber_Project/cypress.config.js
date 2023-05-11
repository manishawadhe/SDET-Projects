const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");


async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber())
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:"cypress/UAT/features/*.{js,feature}",
  },
  headers: { "Accept-Encoding": "gzip, deflate" },
  chromeWebSecurity:false ,
  




});
