import { Screenshot } from '../../utils/screenshot';
import { sanitizeText } from '../../utils/utils';
import { Page } from '../../utils/page';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const paragraph = faker.lorem.paragraph();
let pageTitle, pageTag, url;
let screenshot = new Screenshot('esc_9');

context('Escenario 9', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Crear page', () => {
    Page.clickPageMenu();
    Page.clickNewPage();
    Page.addTitle(title);
    Page.clickParagraph();
    Base.baseUrl();
    Page.clickPageMenu();
    Page.getPageWithName(title);
    Page.addParagraph(paragraph);
    Page.publishPage();
    Page.backPageList();
  });

  it('Abrir page', () => {
    Page.clickPageMenu();
    Page.getFirstPublishedPageTitle().then(text => pageTitle = sanitizeText(text));
    Page.openFirstPublishedPage();
    Page.openSettings();
    Page.getPageUrl().then(text => url = sanitizeText(text));
    Page.closeSettings();
  });

  it('Añadir tag', () => {
    Page.openSettings();
    Page.selectFirstTag();
    Page.getFirstPublishedPageTag().then(text => pageTag = sanitizeText(text));
    Page.closeSettings();
  });

  it('Publicar page', () => {
    Page.updatePage();
    Page.backPageList();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Validar page', () => {
    Base.visitUrl(url);
    Page.shouldExistTitle(pageTitle);
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
