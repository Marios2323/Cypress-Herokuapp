import loginPage from '../pages/LoginPage';
import users from '../fixtures/users.json'

describe('Login Tests', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.elements.username().should('be.visible');
    loginPage.elements.password().should('be.visible');
  });

  it("Valid login", () => {
    loginPage.login(cy.env('username'), cy.env('password'));
    loginPage.assertFlashMessage(cy.env('expectedMessage')
      , cy.env('flashClass'));
    loginPage.assertSuccessfulLogin();
  })
  users.forEach(user => {
    it(user.name, () => {
      loginPage.login(user.username, user.password);
      loginPage.assertFlashMessage(user.expectedMessage, user.flashClass);

      if (user.loginSuccessful) {
        loginPage.assertSuccessfulLogin();
      }
    });
  });
});