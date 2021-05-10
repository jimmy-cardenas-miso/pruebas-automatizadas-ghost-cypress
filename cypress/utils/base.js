export const Base = {
  init: () => {
    let url = Cypress.env('base_url') + '/ghost/#/signin';
    cy.visit(url);
    cy.wait(1000);
  },

  openNotification: () => {
    cy.get('.gh-notification-content a')
        .first()
        .invoke('attr', 'href')
        .then(href => {
          cy.visit(href);
        });
    cy.wait(500);
  },

  closeNotification: () => {
    cy.get('button').get('.gh-notification-close').first().click();
    cy.wait(500);
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
