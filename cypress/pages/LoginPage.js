class LoginPage {

  elements = {
    username: () => cy.get('#username'),
    password: () => cy.get('#password'),
    loginButton: () => cy.get('button[type = "submit"]'),
    flashMessage: () => cy.get('#flash')
  };

  visit() {
    cy.visit('/login');
  }

  login(username, password) {
    this.elements
      .username()
      .type(username);
    this.elements
      .password()
      .type(password);
    this.elements
      .loginButton()
      .click();
  }

  assertFlashMessage(expectedMessage) {
    this.elements.flashMessage()
      .should('be.visible')
      .and('contain.text', expectedMessage);
  }

  assertSuccessfulLogin() {
    cy.url().should('include', '/secure');
  }

  assertNotSuccessfulLogin() {
    cy.url().should('not.include', '/secure');
  }
}

export default new LoginPage();