// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath';

Cypress.Commands.add('fazerlogin', (email, password) => {
    // Funcao criada para efetuar o login na pagina do teste
    // 06-06-2026 
    // Dev: Claudio Santos
    
    // Localiza o objeto na pagina, verifica se esta visivel e faz impur com o texto 
    // Testa se o parametro nao esta em branco
     if (email !== '') {
        cy.xpath("//input[@id='user-name']").should('be.visible').type(email)
    }
    if (password != '') {
        cy.xpath("//input[@id='password']").should('be.visible').type(password)
    }
    
    // faz o click no botao de login
    cy.xpath("//input[@id='login-button']").click()
    
});