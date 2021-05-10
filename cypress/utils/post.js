export function clickPostMenu() {
  cy.get('a').contains('Posts').click();
  cy.wait(500);
}

export function clickNewPost() {
  cy.get('a').contains('New post').click();
  cy.wait(500);
}

export function addTitle(title) {
  cy.get('textarea').get('.gh-editor-title').type(title);
}

export function clickParagraph() {
  cy.get('article').find('[contenteditable]').click();
  cy.wait(500);
}

export function addParagraph(paragraph) {
  cy.get('article').find('[contenteditable]').type(paragraph);
  cy.wait(500);
}

export function getPostWithName(title) {
  cy.get(".gh-post-list-title").contains(title).click({force: true});
}

export function publishPost() {
  cy.get('span').contains('Publish').click();
  cy.wait(500);
  cy.get('span').contains('Publish').click();
  cy.wait(2000);
}

export function unpublishPost() {
  cy.get('span').contains('Update').click();
  cy.wait(500);
  cy.get('.gh-publishmenu-radio-label').contains('Unpublished').click();
  cy.get('button').get('.gh-publishmenu-button').contains('Unpublish').click();
  cy.wait(2000);
}

export function backPostList() {
  cy.get('a').get('.blue').click();
  cy.wait(500);
}

export function shouldExist(title) {
  cy.get('.post-card-title').contains(title).should('contain', title);
}

export function shouldNotExist(title) {
  cy.get('.post-card-title').contains(title).should('not.exist');
}

export function openFirstPublishedPost() {
  cy.get(".gh-post-list-title").get('.gh-content-status-published').contains('Published').first().click({force: true});
  cy.wait(500);
}

export function getFirstPublishedPostTitle() {
  return cy.get(".gh-post-list-title").get('.gh-content-status-published').contains('Published').first().get('.gh-content-entry-title').invoke('text');
}
