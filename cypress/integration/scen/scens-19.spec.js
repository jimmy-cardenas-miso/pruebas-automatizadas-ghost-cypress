import { Base } from '../../utils/base';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";

context('Esenario 19', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión con pasword incorrecto', () => {
    cy.get('form').within(() => {
      cy.get('input[type=email]').type(Cypress.env('auth').email)
      cy.get('input[type=password]').type('12345679')
      cy.get('button[type=submit]').click()
    })
    cy.wait(2000);
  });

  it('Verifica que se obtenga el mensaje de error de login', () => {
    cy.get('p').should('have.class', 'main-error');
    Base.init();
  });
})

