import { Screenshot } from '../../utils/screenshot';
import { sanitizeText } from '../../utils/utils';
import { Post } from '../../utils/post';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let postTitle, postTag;
let screenshot = new Screenshot('esc_5');

context('Escenario 5', () => {
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
    Post.getFirstPublishedPostTitle().then(text => postTitle = sanitizeText(text));
    Post.openFirstPublishedPost();
  });

  it('Añadir tag', () => {
    Post.openSettings();
    Post.selectFirstTag();
    Post.getFirstPublishedPostTag().then(text => postTag = sanitizeText(text));
    Post.closeSettings();
  });

  it('Publicar post', () => {
    Post.updatePost();
    Post.backPostList();
  });

  it('Cerrar sesion', () => {
    Base.closeNotification();
    Auth.logout();
  });

  it('Validar que el post tiene el tag', () => {
    Base.basePageUrl();
    Post.shouldExistTag(postTitle, postTag);
  })

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
