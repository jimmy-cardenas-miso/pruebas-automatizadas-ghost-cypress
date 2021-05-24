import { Screenshot } from '../../utils/screenshot';
import { SCEN_6_DATA } from '../../data/scen-6';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Page } from '../../utils/page';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let screenshot = new Screenshot('esc_6');

Object.keys(SCEN_6_DATA).forEach((key) => {
  const data = SCEN_6_DATA[key];

  data.forEach((item, index) => {

    const hasError = item.hasOwnProperty('error');

    const title = item.title;
    const paragraph = item.paragraph;

    let error;

    const scenTitle = `Escenario 6 - ${key} ${(index + 1)}`;

    if (hasError) {
      error = item.error;
    }

    if (hasError) {
      context(scenTitle, () => {
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
          Page.clickParagraph();
          Page.addParagraph(paragraph);
          Page.addTitle(title);
        });

        it('Publicar page', () => {
          Page.publishPage();
        });

        it('Verificar error', () => {
          Page.shouldShowError(error);
          Page.backPageList();
          Base.closeModalIfExists();
        });

        it('Cerrar sesion', () => {
          Auth.logout();
        });

        afterEach(() => {
          screenshot.takeScreenshot();
        });
      });

    } else {
      context(scenTitle, () => {
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
        });

        it('Validar page', () => {
          Base.openNotification();
        });

        it('Cerrar sesion', () => {
          Base.baseUrl();
          Auth.logout();
        });

        afterEach(() => {
          screenshot.takeScreenshot();
        });
      });

    }
  });
});
