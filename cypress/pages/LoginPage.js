class LoginPage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/login');
  }

  enterUsername(username) {
    cy.get('#username').type(username);
  }

  enterPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  clickLogin() {
    cy.contains('button', 'Login').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
