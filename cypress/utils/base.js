export function init() {
  let url = Cypress.env('base_url') + '/ghost/#/signin';
  cy.visit(url);
  cy.wait(1000);
}

export function baseUrl() {
  let url = Cypress.env('base_url') + '/ghost';
  cy.visit(url);
  cy.wait(1000);
}

export function basePageUrl() {
  let url = Cypress.env('base_url');
  cy.visit(url);
  cy.wait(1000);
}
