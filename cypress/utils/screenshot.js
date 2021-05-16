export class Screenshot {
  step = 1;
  title;

  constructor(title) {
    this.title = title;
  }

  takeScreenshot() {
    cy.screenshot(`./results/${Cypress.env('Ghost_version')}_${this.title}_step_${this.step}`);
    this.step += 1;
  }
}
