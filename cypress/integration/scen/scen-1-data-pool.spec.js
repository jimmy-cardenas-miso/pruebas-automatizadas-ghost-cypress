import { Screenshot } from '../../utils/screenshot';
import { SCEN_1_DATA } from '../../data/scen-1';
import { Base } from '../../utils/base';
import { Auth } from '../../utils/auth';
import { Tag } from '../../utils/tag';
import {Post} from "../../utils/post";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
let screenshot = new Screenshot('esc_1');

Object.keys(SCEN_1_DATA).forEach((key) => {
  const data = SCEN_1_DATA[key];

  data.forEach((item, index) => {

    const hasError = item.hasOwnProperty('error');

    const title = item.title;
    const paragraph = item.paragraph;

    let error;

    const scenTitle = `Escenario 1 - ${key} ${(index + 1)}`;

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

        it('Crear post', () => {
          Post.clickPostMenu();
          Post.clickNewPost();
        });

        it('Llenar post', () => {
          Post.clickParagraph();
          Post.addParagraph(paragraph);
          Post.addTitle(title);
        });

        it('Publicar post', () => {
          Post.publishPost();
        });

        it('Verificar error', () => {
          Post.shouldShowError(error);
          Post.backPostList();
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

        it('Crear post', () => {
          Post.clickPostMenu();
          Post.clickNewPost();
        });

        it('Llenar post', () => {
          Post.addTitle(title);
          Post.clickParagraph();
          Base.baseUrl();
          Post.clickPostMenu();
          Post.getPostWithName(title);
          Post.addParagraph(paragraph);
        });

        it('Publicar post', () => {
          Post.publishPost();
          Post.backPostList();
        });

        it('Cerrar sesion', () => {
          Auth.logout();
        });

        it('Validar que el post existe', () => {
          Base.basePageUrl();
          Post.shouldExist(title);
        });

        afterEach(() => {
          screenshot.takeScreenshot();
        });
      });

    }
  });
});
