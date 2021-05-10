import {sanitizeText} from '../../utils/utils';
import {Page} from '../../utils/page';
import {Base} from '../../utils/base';
import {Auth} from '../../utils/auth';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let url;

// | Escenario 8 | Login + Entrar a page + borrarla +  logout + entrar a localhost:2369/“URL” validar que no existe pagina (producción) |

context('Esenario 8', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Abrir page', () => {
    Page.clickPageMenu();
    Page.openFirstPublishedPage();
    Page.openSettings();
    Page.getPageUrl().then(text => url = sanitizeText(text));
    Page.closeSettings();
  });

  it('Eliminar page', () => {
    Page.openSettings();
    Page.deletePage();
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Validar page', () => {
    Base.visitUrl(url);
    Page.shouldNotExistPage();
  });
})
