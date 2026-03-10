import loginPage from '../pages/LoginPage';
import users from '../fixtures/users.json';

describe('Login Tests', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.elements.username().should('be.visible');
    loginPage.elements.password().should('be.visible');
  });

  users.forEach(user => {
    it(user.name, () => {
      loginPage.login(user.username, user.password);
      loginPage.assertFlashMessage(user.expectedMessage);

      if (user.loginSuccessful) {
        loginPage.assertSuccessfulLogin();
      }
    });
  });
});