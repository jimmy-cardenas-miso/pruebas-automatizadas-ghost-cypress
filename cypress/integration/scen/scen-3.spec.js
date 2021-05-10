import * as base from '../../utils/base';
import * as post from '../../utils/post';
import * as auth from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const newTitle = faker.lorem.word();

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
    post.openFirstPublishedPost();
  });

  it('Editar post', () => {
    post.addTitle(newTitle);
  });

  it('Publicar post', () => {
    post.updatePost();
    post.backPostList();
  })

  it('Cerrar sesion', () => {
    auth.logout();
  })

  it('Validar que el post existe', () => {
    base.basePageUrl();
    post.shouldExist(newTitle);
  })
})
