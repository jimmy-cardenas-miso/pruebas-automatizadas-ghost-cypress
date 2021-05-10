export const Page = {
  clickPageMenu: () => {
    cy.get('a').contains('Pages').click();
    cy.wait(500);
  },

  clickNewPage: () => {
    cy.get('a').contains('New page').click();
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

  getPageWithName: (title) => {
    cy.get(".gh-content-entry-title").contains(title).click({force: true},);
  },

  publishPage: () => {
    cy.get('span').contains('Publish').click();
    cy.wait(500);
    cy.get('span').contains('Publish').click();
    cy.wait(2000);
  },

  updatePage: () => {
    cy.get('span').contains('Update').click();
    cy.wait(500);
    cy.get('span').contains('Update').click();
    cy.wait(3000);
  },

  unpublishPage: () => {
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

  deletePage: () => {
    cy.get('.settings-menu-delete-button').first().click();
    cy.wait(500);
    cy.get('.modal-footer .gh-btn-red').click({force: true});
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

  backPageList: () => {
    cy.get('a').get('.blue').click();
    cy.wait(500);
  },

  shouldExist: (title) => {
    cy.get('.page-card-title').contains(title).should('contain', title);
  },

  shouldExistTitle: (title) => {
    cy.get('.post-full-title').contains(title).should('contain', title);
  },

  shouldNotExistPage: () => {
    cy.get('.error-description').should('contain', 'Page not found');
  },

  shouldExistTag: (title, tag) => {
    cy.get('.page-card-title').contains(title).parent().get('.page-card-primary-tag').first().should('contain', tag);
  },

  shouldNotExist: (title) => {
    cy.get('.page-card-title').contains(title).should('not.exist');
  },

  openFirstPublishedPage: () => {
    cy.get('.gh-content-status-published').contains('Published').first().click({force: true},);
    cy.wait(500);
  },

  getFirstPublishedPageTitle: () => {
    return cy.get('.gh-content-status-published').contains('Published').first().parent().parent().parent().find('.gh-content-entry-title').invoke('text');
  },

  getFirstPublishedPageTag: () => {
    return cy.get('#tag-input .ember-power-select-multiple-option').first().invoke('text');
  },

  getPageUrl: () => {
    return cy.get('.post-view-link').first().invoke('attr', 'href');
  },
}
