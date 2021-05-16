export class Screenshoot {
    step = 1;
    title;

    constructor(title) {
        this.title = title;
    }
    
    takeScreenShoot() {
        cy.screenshot(`./resultados/${Cypress.env('Ghost_version')}_${this.title}_step_${this.step}`);
        this.step += 1;
    }
}
