import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Staff } from '../../utils/staff';
import * as faker from 'faker';
import { Screenshoot } from "../../utils/screenshoot";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const name = faker.name.firstName();
var screenshoot = new Screenshoot('esc_15');

context('Escenario 15', () => {
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

  it('Editar nombre de usuario', () => {
    Staff.editUserName(name);
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
    screenshoot.takeScreenShoot();
  });
})
