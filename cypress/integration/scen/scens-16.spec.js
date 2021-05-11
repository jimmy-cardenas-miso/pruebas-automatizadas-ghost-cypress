import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Staff } from '../../utils/staff';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const email = faker.internet.email();

// | Escenario 16 | Login + Entrar a Members + Crear nuevo miembro +  logout + login + entrar a Members + validar que aumento el numero de miembros en 1 (administración) |

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

  it('Validar que existe el nuevo miembro', () => {
    Staff.checkUserEmail(email);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });
})
