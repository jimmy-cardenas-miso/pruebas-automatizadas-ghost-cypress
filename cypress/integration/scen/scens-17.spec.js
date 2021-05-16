import { Screenshot } from '../../utils/screenshot';
import { sanitizeText } from '../../utils/utils';
import { Staff } from '../../utils/staff';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import * as faker from 'faker';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const email = faker.internet.email();
let memberEmail;
let screenshot = new Screenshot('esc_17');

context('Escenario 17', () => {
  before(() => {
    Base.init();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it('Iniciar sesión', () => {
    Auth.login();
  });

  it('Entrar a staff', () => {
    Staff.clickStaffMenu();
  });

  it('Crear nuevo miembro', () => {
    Staff.clickStaffMenu();
    Staff.clickNewStaff();
    Staff.addNewEmail(email);
  });

  it('Eliminar miembro', () => {
    Staff.getFirstMemberEmail().then(text => memberEmail = sanitizeText(text));
    Staff.deleteFirstMember();
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
    Staff.checkUserEmailNotExist(memberEmail);
  });

  it('Cerrar sesion', () => {
    Auth.logout();
  });

  afterEach(() => {
    screenshot.takeScreenshot();
  });
})
