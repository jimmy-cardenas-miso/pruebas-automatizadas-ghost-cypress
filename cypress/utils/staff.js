export const Staff = {
  clickStaffMenu: () => {
    cy.get('a').contains('Staff').click();
    cy.wait(500);
  },

  clickOwner: () => {
    cy.get('.gh-badge').contains('Owner').click();
    cy.wait(500);
  },

  editUserName: (name) => {
    cy.get('#user-name').clear({force: true}).type(name);
    cy.get('button').get('.gh-btn-blue').click()
  },

  checkUserName: (name) => {
    cy.get('#user-name').should('have.value', name);
  }
}
