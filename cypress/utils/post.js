export const Post = {
  clickPostMenu: () => {
    cy.get('a').contains('Posts').click();
    cy.wait(500);
  },

  clickNewPost: () => {
    cy.get('a').contains('New post').click();
    cy.wait(500);
  },

  addTitle: (title) => {
    cy.get('textarea').get('.gh-editor-title').clear().type(title);
  },

  clickParagraph: () => {
    cy.get('article').find('[contenteditable]').click();
    cy.wait(500);
  },

  addParagraph: (paragraph) => {
    cy.get('article').find('[contenteditable]').clear().type(paragraph);
    cy.wait(500);
  },

  getPostWithName: (title) => {
    cy.get(".gh-post-list-title").contains(title).click({force: true},);
  },

  publishPost: () => {
    cy.get('span').contains('Publish').click();
    cy.wait(500);
    cy.get('span').contains('Publish').click();
    cy.wait(2000);
  },

  updatePost: () => {
    cy.get('span').contains('Update').click();
    cy.wait(500);
    cy.get('span').contains('Update').click();
    cy.wait(3000);
  },

  unpublishPost: () => {
    cy.get('span').contains('Update').click();
    cy.wait(500);
    cy.get('.gh-publishmenu-radio-label').contains('Unpublished').click();
    cy.get('button').get('.gh-publishmenu-button').contains('Unpublish').click();
    cy.wait(2000);
  },

  openSettings: () => {
    cy.get('button').get('.post-settings').click();
    cy.wait(500);
  },

  closeSettings: () => {
    cy.get('button').get('.settings-menu-header-action').click();
    cy.wait(500);
  },

  selectFirstTag: () => {
    cy.get('#tag-input').click();
    cy.wait(500);
    cy.get('.ember-power-select-option').first().click();
    cy.wait(500);
    cy.get('#tag-input').click();
    cy.wait(500);
  },

  backPostList: () => {
    cy.get('a').get('.blue').click();
    cy.wait(500);
  },

  shouldExist: (title) => {
    cy.get('.post-card-title').contains(title).should('contain', title);
  },

  shouldExistTag: (title, tag) => {
    cy.get('.post-card-title').contains(title).parent().get('.post-card-primary-tag').first().should('contain', tag);
  },

  shouldNotExist: (title) => {
    cy.get('.post-card-title').contains(title).should('not.exist');
  },

  openFirstPublishedPost: () => {
    cy.get(".gh-post-list-title").get('.gh-content-status-published').contains('Published').first().click({force: true},);
    cy.wait(500);
  },

  getFirstPublishedPostTitle: () => {
    return cy.get('.gh-content-status-published').contains('Published').first().parent().parent().parent().find('.gh-content-entry-title').invoke('text');
  },

  getFirstPublishedPostTag: () => {
    return cy.get('#tag-input .ember-power-select-multiple-option').first().invoke('text');
  }
}
