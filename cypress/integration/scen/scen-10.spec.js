import { sanitizeText } from '../../utils/utils';
import { Page } from '../../utils/page';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let pageTitle, url;

context('Escenario 10', () => {
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
    Page.getFirstPublishedPageTitle().then(text => pageTitle = sanitizeText(text));
    Page.openFirstPublishedPage();
    Page.openSettings();
    Page.getPageUrl().then(text => url = sanitizeText(text));
    Page.closeSettings();
  });

  it('Des-asignar tag', () => {
    Page.openSettings();
    Page.removeFirstTag();
    Page.closeSettings();
  });

  it('Publicar page', () => {
    Page.updatePage();
    Page.backPageList();
  });

  it('Cerrar sesion', () => {
    Base.closeNotification();
    Auth.logout();
  });

  it('Validar page', () => {
    Base.visitUrl(url);
    Page.shouldExistTitle(pageTitle);
  });
})
