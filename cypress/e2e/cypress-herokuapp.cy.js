import loginPage from '../pages/LoginPage';
import users from '../fixtures/users.json'

describe('Setting up...', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.elements.username().should('be.visible');
    loginPage.elements.password().should('be.visible');
  });


  describe('Happy path', () => {
    it("Valid login", () => {
      cy.env(['username', 'password', 'expectedMessage', 'flashClass']).then((env) => {
        loginPage.login(env.username, env.password);
        loginPage.assertFlashMessage(env.expectedMessage, env.flashClass);
        loginPage.assertSuccessfulLogin();
      });
    })
  });

  describe("Negative login tests", () => {
    users.forEach(user => {
      it(user.name, () => {
        loginPage.login(user.username, user.password);
        loginPage.assertFlashMessage(user.expectedMessage, user.flashClass);
      });
    });
  });

  describe("Logout", () => { 
    it("Logs out successfully", () => { 
      cy.env(['username', 'password', 'expectedMessage', 'flashClass']).then((env) => {
        loginPage.login(env.username, env.password);
        loginPage.assertFlashMessage(env.expectedMessage, env.flashClass);
        loginPage.assertSuccessfulLogin();
        loginPage.logout();
        loginPage.elements.username().should('be.visible');
        loginPage.elements.password().should('be.visible');
      });
    })
  })
});