import './commands'
require("cypress-plugin-tab");

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Server.defaults({
  ignore: (xhr) => bool   
})