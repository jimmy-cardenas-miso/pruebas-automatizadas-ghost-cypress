import { Screenshot } from '../../utils/screenshot';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Staff } from '../../utils/staff';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const email = faker.internet.email();
let screenshot = new Screenshot('esc_16');

context('Escenario 16', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Crear un nuevo miembro', () => {
    Staff.clickStaffMenu();
    Staff.clickNewStaff();
  });

  it('Agregar nuevo email', () => {
    Staff.addNewEmail(email);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Entrar a staff', () => {
    Staff.clickStaffMenu();
  });

  it('Validar que no existe el miembro eliminado', () => {
    Staff.checkUserEmail(email);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
