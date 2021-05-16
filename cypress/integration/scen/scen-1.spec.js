import { Screenshot } from '../../utils/screenshot';
import { Post } from '../../utils/post';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const paragraph = faker.lorem.paragraph();
let screenshot = new Screenshot('esc_1');

context('Escenario 1', () => {
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
  });

  it('Llenar post', () => {
    Post.addTitle(title);
    Post.clickParagraph();
    Base.baseUrl();
    Post.clickPostMenu();
    Post.getPostWithName(title);
    Post.addParagraph(paragraph);
  });

  it('Publicar post', () => {
    Post.publishPost();
    Post.backPostList();
  });

  it('Cerrar sesion', () => {
    Base.closeNotification();
    Auth.logout();
  });

  it('Validar que el post existe', () => {
    Base.basePageUrl();
    Post.shouldExist(title);
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
