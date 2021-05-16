import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Screenshoot } from "../../utils/screenshoot";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
var screenshoot = new Screenshoot('esc_20');

context('Esenario 20', () => {
    before(() => {
        Base.init();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    });

    it('Iniciar sesión', () => {
        Auth.login();
    });

    it('Cerrar sesion', () => {
        Auth.logout();
    });

    it('Verificar pagina de login', () => {
        cy.wait(1000);
        cy.url().should('eq', Cypress.env('base_url') + '/ghost/#/signin');
    });

    afterEach(() => {
        screenshoot.takeScreenShoot();
      });
})

