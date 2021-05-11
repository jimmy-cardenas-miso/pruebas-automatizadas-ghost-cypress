import { sanitizeText } from '../../utils/utils';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Tag } from '../../utils/tag';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let tagName;

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

  it('Validar que el tag existe', () => {
    Base.baseUrl();
    Tag.clickTagsMenu();
    Tag.shouldNotExist(tagName);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });
})
