import {init} from '../../utils/base';
import {login} from "../../utils/auth";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Scen 8', () => {
  before(() => {
    init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });


  // Login + Entrar a page + borrarla + logout + entrar a localhost:2369/“URL” validar que no existe pagina (producción)


  it('Iniciar sesión', () => {
    login();
    cy.wait(2000);
  });

  it('Abrir post', () => {
    cy.get('a').contains('Posts').click();
    cy.wait(500);
    cy.get(".gh-post-list-title").contains('Titulo').click({force: true});
    cy.wait(500);
  });

  it('Borrar post', () => {
    cy.get('button').get('.post-settings').click();
    cy.wait(500);
    cy.get('button').get('.settings-menu-delete-button').click();
    cy.wait(500);
    cy.get('button').get('.gh-btn-red').click();
    cy.wait(500);
  });

  /*after(() => {
    finish();
  })*/

})
