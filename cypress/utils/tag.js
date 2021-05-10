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

  shouldExist: (title) => {
    cy.get('.gh-tag-list-name').contains(title).should('contain', title);
  }
}
