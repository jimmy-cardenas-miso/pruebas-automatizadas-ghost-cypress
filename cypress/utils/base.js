import { login, logout } from "./auth";

export function init() {
  let url = Cypress.env('base_url') + '#/signin';
  cy.visit(url);
  cy.wait(1000);
  login();
  cy.wait(2000);
}

export function finish() {
  logout();
}
