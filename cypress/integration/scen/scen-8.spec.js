import {sanitizeText} from '../../utils/utils';
import {Page} from '../../utils/page';
import {Base} from '../../utils/base';
import {Auth} from '../../utils/auth';
import { Screenshoot } from "../../utils/screenshoot";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let url;
var screenshoot = new Screenshoot('esc_8');

context('Escenario 8', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Abrir page', () => {
    Page.clickPageMenu();
    Page.openFirstPublishedPage();
    Page.openSettings();
    Page.getPageUrl().then(text => url = sanitizeText(text));
    Page.closeSettings();
  });

  it('Eliminar page', () => {
    Page.openSettings();
    Page.deletePage();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Validar que no existe page', () => {
    Base.visitUrl(url);
    Page.shouldNotExistPage();
  });

  afterEach(() => {
    screenshoot.takeScreenShoot();
  });
})
