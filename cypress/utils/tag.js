export const Tag = {
  clickTagsMenu: () => {
    cy.get('a').contains('Tags').click();
    cy.wait(500);
  },

  clickNewTag: () => {
    cy.get('a').contains('New tag').click();
    cy.wait(500);
  },

  fillData: (name, slug, description) => {
    cy.get('#tag-name').type(name, {force: true})
    cy.get('#tag-slug').type(slug, {force: true})
    cy.get('#tag-description').type(description, {force: true})
    cy.get('button').get('.gh-btn-blue').click()
  },

  editName: (name) => {
    cy.get('#tag-name').type(name, {force: true})
    cy.get('button').get('.gh-btn-blue').click()
  },

  editDescription: (description) => {
    cy.get('#tag-description').type(description, {force: true})
    cy.get('button').get('.gh-btn-blue').click();
  },

  shouldExist: (title) => {
    cy.get('.gh-tag-list-name').contains(title).should('contain', title);
  },

  shouldExistDescription: (description) => {
    cy.get('#tag-description').should('exist');
  },

  shouldNotExist: (title) => {
    cy.get('.gh-tag-list-name').contains(title).should('not.exist');
  },

  deleteTag: () => {
    cy.get('button').contains('Delete tag').first().click({force: true},);
    cy.wait(500);
    cy.get('.modal-content .gh-btn-red').first().click({force: true},);
    cy.wait(500);
  },

  openFirstTag: () => {
    cy.get('.gh-tag-list-title').first().click({force: true},);
    cy.wait(500);
  },

  openFirstTagName: () => {
    return cy.get('.gh-tag-list-title').first().invoke('text');
  },
}
