class LoginPage {

  elements = {
    username: () => cy.get('#username'),
    password: () => cy.get('[name="password"]'),
    loginButton: () => cy.get('button[type = "submit"]'),
    flashMessage: () => cy.get('#flash')
  };

  visit() {
    cy.visit('/login');
  }

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginButton().click();
  }

  getFlashMessage() {
    return this.elements.flashMessage();
  }
}

export default new LoginPage();