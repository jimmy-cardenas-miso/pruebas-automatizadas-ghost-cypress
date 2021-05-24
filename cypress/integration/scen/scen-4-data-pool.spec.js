import { Screenshot } from '../../utils/screenshot';
import { SCEN_4_DATA } from '../../data/scen-4';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Tag } from '../../utils/tag';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let screenshot = new Screenshot('esc_4');

Object.keys(SCEN_4_DATA).forEach((key) => {
  const data = SCEN_4_DATA[key];

  data.forEach((item, index) => {

    const hasError = item.hasOwnProperty('error');

    const title = item.title;
    const slug = item.slug;
    const paragraph = item.paragraph;

    let error;

    const scenTitle = `Escenario 4 - ${key} ${(index + 1)}`;

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

        it('Crear tag', () => {
          Tag.clickTagsMenu();
          Tag.clickNewTag();
        });

        it('Llenar tag', () => {
          Tag.fillData(title, slug, paragraph);
        });

        it('Verificar error', () => {
          Tag.shouldShowError(error)
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

        it('Crear tag', () => {
          Tag.clickTagsMenu();
          Tag.clickNewTag();
        });

        it('Llenar tag', () => {
          Tag.fillData(title, slug, paragraph);
          Base.baseUrl();
        });

        it('Cerrar sesion', () => {
          Auth.logout();
        })

        it('Iniciar sesión', () => {
          Auth.login();
        });

        it('Validar que el tag existe', () => {
          Base.baseUrl();
          Tag.clickTagsMenu();
          Tag.shouldExist(title);
        });

        it('Cerrar sesion', () => {
          Auth.logout();
        });

        afterEach(() => {
          screenshot.takeScreenshot();
        });
      });

    }
  });
});
