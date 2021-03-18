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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Must be declared global to be detected by typescript (allows import/export)
// eslint-disable @typescript/interface-name
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      navigate(pageName: string): void;
      login(user: string): void;
      logout(): void;
    }
  }
}

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add('navigate', (pageName) => {
  // Find navigation menu item
  // Click on it
  cy.visit(`/${pageName}`);
});

Cypress.Commands.add('logout', () => {
  cy.get('#app-logout').click();
});

Cypress.Commands.add('login', (user) => {
  cy.visit('/');
  cy.fixture(`users/${user}.json`).then((user) => {
    cy.get('#username').type(user.username);
    cy.get('#password').type(user.password);
  });
  cy.get('#kc-login').click();
});

// Convert this to a module instead of script (allows import/export)
export {};
