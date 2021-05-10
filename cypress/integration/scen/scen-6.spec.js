import { Page } from '../../utils/page';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const title = faker.name.title();
const paragraph = faker.lorem.paragraph();

// | Escenario 6 | Login + Crear page + configurar “URL” + publicarlo + logout + entrar a localhost:2369/“URL” validar pagina (producción) |

context('Esenario 6', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Crear page', () => {
    Page.clickPageMenu();
    Page.clickNewPage();
  });

  it('Llenar page', () => {
    Page.addTitle(title);
    Page.clickParagraph();
    Base.baseUrl();
    Page.clickPageMenu();
    Page.getPageWithName(title);
    Page.addParagraph(paragraph);
  });

  it('Publicar page', () => {
    Page.publishPage();
    Page.backPageList();
  })

  it('Cerrar sesion', () => {
    Base.closeNotification();
    Auth.logout();
  })

  /*it('Validar que el page existe', () => {
    Base.basePageUrl();
    Page.shouldExist(title);
  })*/
})
