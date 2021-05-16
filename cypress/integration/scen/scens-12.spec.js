import {Screenshot} from '../../utils/screenshot';
import {sanitizeText} from '../../utils/utils';
import {Base} from '../../utils/base';
import {Auth} from '../../utils/auth';
import {Tag} from '../../utils/tag';
import * as faker from "faker";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const slug = faker.lorem.slug();
const paragraph = faker.lorem.paragraph();
let tagName;
let screenshot = new Screenshot('esc_12');

context('Escenario 12', () => {
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
    Tag.fillData(title, slug, paragraph);
    Base.baseUrl();
  });

  it('Abrir tag', () => {
    Tag.clickTagsMenu();
    Tag.openFirstTagName().then(text => tagName = sanitizeText(text));
    Tag.openFirstTag();
  });

  it('Borrar tag', () => {
    Tag.deleteTag();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Validar que el tag no existe', () => {
    Base.baseUrl();
    Tag.clickTagsMenu();
    Tag.shouldNotExist(tagName);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
