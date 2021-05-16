import { Screenshot } from '../../utils/screenshot';
import { sanitizeText } from '../../utils/utils';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Tag } from '../../utils/tag';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const newDescription = faker.lorem.word();
let tagName;
let screenshot = new Screenshot('esc_14');

context('Escenario 14', () => {
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

  it('Editar description tag', () => {
    Tag.editDescription(newDescription);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Validar que la descripción es correcta', () => {
    Base.baseUrl();
    Tag.clickTagsMenu();
    Tag.openFirstTag();
    Tag.shouldExistDescription(newDescription);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
