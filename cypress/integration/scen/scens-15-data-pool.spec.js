import { Screenshot } from '../../utils/screenshot';
import { SCEN_15_DATA } from '../../data/scen-15';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Staff } from "../../utils/staff";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let screenshot = new Screenshot('esc_15');

Object.keys(SCEN_15_DATA).forEach((key) => {
  const data = SCEN_15_DATA[key];

  data.forEach((item, index) => {

    const hasError = item.hasOwnProperty('error');

    const name = item.name;
    const slug = item.slug;
    const email = item.email;
    const website = item.website;
    const bio = item.bio;

    let error;

    const scenTitle = `Escenario 15 - ${key} ${(index + 1)}`;

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

        it('Entrar a staff y propietario', () => {
          Staff.clickStaffMenu();
          Staff.clickOwner();
        });

        it('Editar datos de usuario', () => {
          Staff.editUserFields(name, slug, email, website, bio);
        });

        it('Verificar error', () => {
          Staff.shouldShowError(error);
        });

        it('Cerrar sesion', () => {
          Auth.logout();
        });

        it('Iniciar sesión', () => {
          Auth.login();
        });

        it('Entrar a staff y propietario', () => {
          Staff.clickStaffMenu();
          Staff.clickOwner();
        });

        it('Validar que el nombre es correcto', () => {
          Staff.checkUserName(name);
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

        it('Entrar a staff y propietario', () => {
          Staff.clickStaffMenu();
          Staff.clickOwner();
        });

        it('Editar datos de usuario', () => {
          Staff.editUserFields(name, slug, email, website, bio);
        });

        it('Cerrar sesion', () => {
          Auth.logout();
        });

        it('Iniciar sesión', () => {
          Auth.login();
        });

        it('Entrar a staff y propietario', () => {
          Staff.clickStaffMenu();
          Staff.clickOwner();
        });

        it('Validar datos es correcto', () => {
          Staff.checkUserName(name);
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
