import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";

context('Escenario 18', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Validar pantalla de home', () => {
    Base.checkHomeUrl();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });
})
