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

  editUserFields: (name, slug, email, website, bio) => {
    if (name.length > 0) cy.get('#user-name').clear({force: true}).type(name);
    if (slug.length > 0) cy.get('#user-slug').clear({force: true}).type(slug);
    if (email.length > 0) cy.get('#user-email').clear({force: true}).type(email);
    if (website.length > 0) cy.get('#user-website').clear({force: true}).type(website);
    if (bio.length > 0) cy.get('#user-bio').clear({force: true}).type(bio);
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
  },

  checkUserEmailNotExist: (email) => {
    cy.get('.apps-card-app-title').contains(email).should('not.exist');
  },

  deleteFirstMember: () => {
    cy.get('.apps-configured-action').first().click();
  },

  shouldShowError: (error) => {
    cy.get('.response').contains(error).should('contain', error);
  },

  getFirstMemberEmail: () => {
    return cy.get('.apps-card-app-title').first().invoke('text');
  }
}
