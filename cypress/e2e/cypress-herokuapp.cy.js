import loginPage from '../pages/LoginPage';
import users from '../fixtures/users.json'

describe('Login Tests', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.elements.username().should('be.visible');
    loginPage.elements.password().should('be.visible');
  });

  it("Valid login", () => {
    cy.env(['username', 'password', 'expectedMessage', 'flashClass']).then((env) => {
      loginPage.login(env.username, env.password);
      loginPage.assertFlashMessage(env.expectedMessage, env.flashClass);
      loginPage.assertSuccessfulLogin();
    });
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