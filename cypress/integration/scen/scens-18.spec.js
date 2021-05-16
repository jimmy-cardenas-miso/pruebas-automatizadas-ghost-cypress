import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Screenshoot } from "../../utils/screenshoot";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
var screenshoot = new Screenshoot('esc_18');

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

  afterEach(() => {
    screenshoot.takeScreenShoot();
  });
})
