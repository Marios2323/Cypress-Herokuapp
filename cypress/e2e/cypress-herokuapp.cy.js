import loginPage from '../pages/LoginPage';
import users from '../fixtures/users.json';

describe('Login Tests', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  Object.keys(users).forEach(userType => {

    it(`Should validate ${userType} scenario`, () => {
      const user = users[userType];

      loginPage.login(user.username, user.password);

      loginPage.getFlashMessage()
        .should('contain.text', user.message);
    });
  });
});