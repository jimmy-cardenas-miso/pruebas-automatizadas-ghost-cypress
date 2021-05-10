import * as base from './base';

export function login() {
  cy.get('form').within(() => {
    cy.get('input[type=email]').type(Cypress.env('auth').email)
    cy.get('input[type=password]').type(Cypress.env('auth').password)
    cy.get('button[type=submit]').click()
  })
  cy.wait(2000);
}

export function logout() {
  cy.get('button').get('.gh-notification-close').first().click();
  cy.wait(500);
  cy.get('.ember-basic-dropdown-trigger.ember-view').first().click();
  cy.wait(1000);
  cy.get('a').contains('Sign Out').click();
  cy.wait(500);
  base.init();
}
