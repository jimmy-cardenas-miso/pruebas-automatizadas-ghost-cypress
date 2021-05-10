import { sanitizeText } from '../../utils/utils';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Tag } from '../../utils/tag';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const newTitle = faker.lorem.word();
const newSlug = faker.lorem.word();
const newParagraph = faker.lorem.word();
let tagName;

context('Escenario 13', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Abrir tag', () => {
    Tag.clickTagsMenu();
    Tag.openFirstTagName().then(text => tagName = sanitizeText(text));
    Tag.openFirstTag();
  });

  it('Editar tag', () => {
    Tag.changeData(newTitle, newSlug, newParagraph);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Validar que el tag existe', () => {
    Base.baseUrl();
    Tag.clickTagsMenu();
    Tag.shouldExist(newTitle);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });
})
