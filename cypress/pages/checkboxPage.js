class checkboxPage {

    elements = {
        checkboxes: () => cy.get("form"),
        checkbox1: () => cy.get('#checkboxes input[type="checkbox"]').first(),
        checkbox2: () => cy.get('#checkboxes input[type="checkbox"]').last(),
        allCheckboxes: () => cy.get('#checkboxes input[type="checkbox"]')
    }

    visit() {
        cy.visit('/checkboxes');
    }

    assertCheckboxesAreVisible() {
        this.elements
            .checkboxes().contains("checkbox")
    }

    checkFirstCheckbox() {
        this.elements
            .checkbox1().click();
    }

    getFirstCheckbox() {
        return this.elements
            .checkbox1();
    }

    checkSecondCheckbox() { 
        this.elements
            .checkbox2().click();
    }
    getSecondCheckbox() { 
        return this.elements
            .checkbox2();
    }

    resetCheckboxes() { 
        this.elements
            .allCheckboxes().uncheck();
    }

    countCheckboxes() { 
        return this.elements.allCheckboxes()
    }
}

export default new checkboxPage;