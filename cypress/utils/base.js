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
    cy.get('body').then((body) => {
      if (body.find('.gh-notification-close').length > 0) {
        cy.get('button').get('.gh-notification-close').click({ multiple: true });
        cy.wait(500);
      }
    });
  },

  closeModalIfExists: () => {
    cy.get('body').then((body) => {
      if (body.find('.modal-footer').length > 0) {
        cy.get('button').contains('Leave').click({ multiple: true });
        cy.wait(500);
      }
    });
  },

  visitUrl: (url) => {
    cy.visit(url, { failOnStatusCode: false });
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
  },

  checkHomeUrl: () => {
    let homeUrl = Cypress.env('base_url') + '/ghost/#/site';
    cy.url().should('eq', homeUrl);
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
