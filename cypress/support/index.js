// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//zorgt er voor dat uncaught app errors door cypress genegeerd worden
//gezien dit een third-party website was en ik niet genoeg tijd had om de error uit te zoeken
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Cookies.defaults({
    preserve: 'euconsent-v2'
})
