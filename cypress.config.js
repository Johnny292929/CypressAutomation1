
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  retries:{
    runMode: 1
  },
  pageLoadTimeout: 200000,
  defaultCommandTimeout: 200000,
  projectId: 'm61j1c',

  e2e: {setupNodeEvents(on, config) {

    on("before:browser:launch", (browser = {}, launchOptions) => {
      
    });
  
    on("task", {
      
    });
    
    }, 
    
    baseUrl:'https://tsharpslot1qa.devsd.innovasi.com/',
    //baseUrl:'https://sharpproductionmirror.devsd.innovasi.com/',
  
   specPattern:'cypress/e2e/RegressionTests/*.cy.js',
  // specPattern:'cypress/e2e/Temp/1-getting-started/*.js'
 
  },

  experimentalStudio:true,
  watchForFileChanges:true,
  reporter: "junit",
  reporterOptions:{
   "mochaFile":"results/my-test-output-[hash].xml"
  }
 
})

