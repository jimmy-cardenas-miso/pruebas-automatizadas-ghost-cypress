import { Screenshot } from '../../utils/screenshot';
import { sanitizeText } from '../../utils/utils';
import { Post } from '../../utils/post';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let postTitle;
let screenshot = new Screenshot('esc_2');

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
    Post.getFirstPublishedPostTitle().then(text => postTitle = sanitizeText(text));
    Post.openFirstPublishedPost();
  });

  it('Despublicar post', () => {
    Post.unpublishPost();
    Post.backPostList();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Validar que el post no existe', () => {
    Base.basePageUrl();
    Post.shouldNotExist(postTitle);

  });
  
  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
