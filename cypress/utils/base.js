export const Base = {
  init: () => {
    let url = Cypress.env('base_url') + '/ghost/#/signin';
    cy.visit(url);
    cy.wait(1000);
  },

  baseUrl: () => {
    let url = Cypress.env('base_url') + '/ghost';
    cy.visit(url);
    cy.wait(1000);
  },

  basePageUrl: () => {
    let url = Cypress.env('base_url');
    cy.visit(url);
    cy.wait(1000);
  }
}
