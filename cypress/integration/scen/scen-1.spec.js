import { init, finish } from '../../utils/base';

context('Scen 1', () => {
  before(() => {
    init();
  });

  it('Crear post', () => {
    cy.get('a').contains('Posts').click();
    cy.wait(500);
    cy.get('a').contains('New post').click();
    cy.wait(500);

    cy.get('textarea').then($textarea => {
      if ($textarea.length > 0) {
        var randomInput = $textarea.get(0);
        if(!Cypress.dom.isHidden(randomInput)) {
          cy.wrap(randomInput).focus().clear();
          cy.wrap(randomInput).type('Titulo')
        }
        cy.wait(500);
      }
    });

    cy.get('article').find('[contenteditable]').type('Descripcion');
    cy.wait(5000);
  })

  it('Publicar post', () => {
    cy.get('span').contains('Publish').click();
    cy.wait(500);
    cy.get('span').contains('Publish').click();
    cy.wait(500);

  })

  after(() => {
    finish();
  })


  // Login + Crear post + publicarlo + logout + validar post (localhost:2369/ producción)
})
