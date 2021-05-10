import { Page } from '../../utils/page';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const newTitle = faker.name.title();

context('Esenario 7', () => {
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
  });

  it('Editar page', () => {
    Page.addTitle(newTitle);
  });

  it('Publicar page', () => {
    Page.updatePage();
    Page.backPageList();
  });

  it('Validar page', () => {
    Base.openNotification();
    Page.shouldExistTitle(newTitle);
  });

  it('Cerrar sesion', () => {
    Base.baseUrl();
    Auth.logout();
  });
})
