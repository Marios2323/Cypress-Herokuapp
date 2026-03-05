import loginPage from '../pages/LoginPage';
import users from '../fixtures/users.json';

describe('Login Tests', () => {

  beforeEach(() => {
    loginPage.visit();
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