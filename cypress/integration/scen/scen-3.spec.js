import { Screenshot } from '../../utils/screenshot';
import { Post } from '../../utils/post';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const newTitle = faker.name.title();
let screenshot = new Screenshot('esc_3');

context('Escenario 2', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Abrir post', () => {
    Post.clickPostMenu();
    Post.openFirstPublishedPost();
  });

  it('Editar post', () => {
    Post.addTitle(newTitle);
  });

  it('Publicar post', () => {
    Post.updatePost();
    Post.backPostList();
  });

  it('Cerrar sesion', () => {
    Base.closeNotification();
    Auth.logout();
  });

  it('Validar que el post existe', () => {
    Base.basePageUrl();
    Post.shouldExist(newTitle);
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });

})
