import { Screenshot } from '../../utils/screenshot';
import { Page } from '../../utils/page';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const paragraph = faker.lorem.paragraph();
let screenshot = new Screenshot('esc_6');

context('Escenario 6', () => {
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
  });

  it('Llenar page', () => {
    Page.addTitle(title);
    Page.clickParagraph();
    Base.baseUrl();
    Page.clickPageMenu();
    Page.getPageWithName(title);
    Page.addParagraph(paragraph);
  });

  it('Publicar page', () => {
    Page.publishPage();
    Page.backPageList();
  });

  it('Validar page', () => {
    Base.openNotification();
  });

  it('Cerrar sesion', () => {
    Base.baseUrl();
    Auth.logout();
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
