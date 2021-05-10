import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Tag } from '../../utils/tag';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const slug = faker.lorem.slug();
const paragraph = faker.lorem.paragraph();

context('Escenario 4', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Crear tag', () => {
    Tag.clickTagsMenu();
    Tag.clickNewTag();
  });

  it('Llenar tag', () => {
    Tag.fillData(title, slug, paragraph);
    Base.baseUrl();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  })

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Validar que el tag existe', () => {
    Base.baseUrl();
    Tag.clickTagsMenu();
    Tag.shouldExist(title);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });
})
