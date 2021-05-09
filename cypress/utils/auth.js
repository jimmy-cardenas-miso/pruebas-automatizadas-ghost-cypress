export function login() {
  cy.get('form').within(() => {
    cy.get('input[type=email]').type(Cypress.env('auth').email)
    cy.get('input[type=password]').type(Cypress.env('auth').password)
    cy.get('button[type=submit]').click()
  })
}

export function logout() {
  cy.get('.gh-user-avatar').click();
  cy.wait(1000);
  cy.get('a').contains('Sign Out').click();
}
