import checkboxPage from "../pages/checkboxPage"

describe("Setting up herokuapp checkboxes", () => {
    beforeEach(() => {
        checkboxPage.visit();
        checkboxPage.assertCheckboxesAreVisible();
        checkboxPage.resetCheckboxes();
    })

    describe("Count checkboxes", () => { 
        it("Validate the checkboxes count", () => { 
            checkboxPage.countCheckboxes().should('have.length', 2);
        })
    })

    describe("Testing first checkbox", () => {
        it("Check if first checkbox can be checked/unchecked", () => {
            checkboxPage.checkFirstCheckbox();
            checkboxPage.getFirstCheckbox().should('have.attr', 'checked');
            checkboxPage.checkFirstCheckbox();
            checkboxPage.getFirstCheckbox().should('not.have.attr', 'checked');
        })
    })

    describe("Testing second checkbox", () => {
        it("Check if second checkbox can be checked/unchecked", () => {
            checkboxPage.checkSecondCheckbox();
            checkboxPage.getSecondCheckbox().should('have.attr', 'checked');
            checkboxPage.checkSecondCheckbox();
            checkboxPage.getSecondCheckbox().should('not.have.attr', 'checked');
        })
    })

    describe("Testing both values", () => { 
        it("Checking all the checkboxes", () => { 
            checkboxPage.checkFirstCheckbox();
            checkboxPage.checkSecondCheckbox();
            checkboxPage.getFirstCheckbox().should('have.attr', 'checked');
            checkboxPage.getSecondCheckbox().should('have.attr', 'checked');
        })
    })
})