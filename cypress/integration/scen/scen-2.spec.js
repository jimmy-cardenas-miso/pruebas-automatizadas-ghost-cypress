import * as base from '../../utils/base';
import * as post from '../../utils/post';
import * as auth from '../../utils/auth';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let postTitle;

context('Esenario 2', () => {
  before(() => {
    base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    auth.login();
  });

  it('Abrir post', () => {
    post.clickPostMenu();
    post.getFirstPublishedPostTitle().then(text => postTitle = text);
    post.openFirstPublishedPost();
  });

  it('Despublicar post', () => {
    post.unpublishPost();
    post.backPostList();
  });

  it('Cerrar sesion', () => {
    auth.logout();
  })

  it('Validar que el post no existe', () => {
    base.basePageUrl();
    post.shouldNotExist(postTitle);
  })
})
