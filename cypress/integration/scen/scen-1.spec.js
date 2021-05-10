import * as base from '../../utils/base';
import * as post from '../../utils/post';
import * as auth from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.lorem.word();
const paragraph = faker.lorem.paragraph();

context('Esenario 1', () => {
  before(() => {
    base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    auth.login();
  });

  it('Crear post', () => {
    post.clickPostMenu();
    post.clickNewPost();
  });

  it('Llenar post', () => {
    post.addTitle(title);
    post.clickParagraph();
    base.baseUrl();
    post.clickPostMenu();
    post.getPostWithName(title);
    post.addParagraph(paragraph);
  });

  it('Publicar post', () => {
    post.publishPost();
    post.backPostList();
  })

  it('Cerrar sesion', () => {
    auth.logout();
  })

  it('Validar post', () => {
    base.basePageUrl();
    post.shouldExist(title);
  })
})
