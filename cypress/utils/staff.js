export const Staff = {
  clickStaffMenu: () => {
    cy.get('a').contains('Staff').click();
    cy.wait(500);
  },

  clickNewStaff: () => {
    cy.get('button').contains('Invite people').click();
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

  addNewEmail: (email) => {
    cy.get('#new-user-email').type(email);
    cy.get('.modal-footer .gh-btn-green').click()
  },

  checkUserName: (name) => {
    cy.get('#user-name').should('have.value', name);
  },

  checkUserEmail: (email) => {
    cy.get('.apps-card-app-title').contains(email).should('contain', email);
  }
}
