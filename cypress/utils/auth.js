import { Base } from './base';

export const Auth = {
  login: () => {
    cy.get('form').within(() => {
      cy.get('input[type=email]').type(Cypress.env('auth').email)
      cy.get('input[type=password]').type(Cypress.env('auth').password)
      cy.get('button[type=submit]').click()
    })
    cy.wait(2000);
  },

  logout: () => {
    Base.closeNotification();
    cy.get('.ember-basic-dropdown-trigger.ember-view').first().click();
    cy.wait(1000);
    cy.get('a').contains('Sign Out').click();
    cy.wait(500);
    Base.closeModalIfExists();
    Base.init();
  }
}
