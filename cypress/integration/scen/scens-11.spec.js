import { Screenshot } from '../../utils/screenshot';
import { sanitizeText } from '../../utils/utils';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Post } from '../../utils/post';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const paragraph = faker.lorem.paragraph();
let url;
let screenshot = new Screenshot('esc_11');

context('Escenario 11', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Crear post', () => {
    Post.clickPostMenu();
    Post.clickNewPost();
    Post.addTitle(title);
    Post.clickParagraph();
    Base.baseUrl();
    Post.clickPostMenu();
    Post.getPostWithName(title);
    Post.addParagraph(paragraph);
    Post.publishPost();
    Post.backPostList();
  });

  it('Abrir post', () => {
    Post.clickPostMenu();
    Post.openFirstPublishedPost();
    Post.openSettings();
    Post.getPostUrl().then(text => url = sanitizeText(text));
    Post.closeSettings();
  });

  it('Eliminar post', () => {
    Post.openSettings();
    Post.deletePost();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Validar que no existe post', () => {
    Base.visitUrl(url);
    Post.shouldNotExistPost();
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
