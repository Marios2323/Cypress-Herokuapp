class LoginPage {

  elements = {
    username: () => cy.get('#username'),
    password: () => cy.get('#password'),
    loginButton: () => cy.get('button[type="submit"]'),
    flashMessage: () => cy.get('#flash'),
    logoutButton: () => cy.contains('a', 'Logout')
  };

  visit() {
    cy.visit('/login');
  }

  login(username, password) {
    if (username) this.elements
      .username().type(username);
    if (password) this.elements
      .password().type(password, {sensitive: true});

    this.elements
      .loginButton().click();
  }

  assertFlashMessage(expectedMessage, flashClass) {
    this.elements.flashMessage()
      .should('be.visible')
      .and('contain.text', expectedMessage)
      .and('have.class', flashClass);
  }

  assertSuccessfulLogin() {
    cy.url().should('include', '/secure');
  }

  logout() {
      this.elements.
        logoutButton().click();
  }
}

export default new LoginPage();