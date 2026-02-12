
import LoginPage from '../pages/LoginPage';
import users from '../fixtures/users.json';

describe('Heroku Login Test', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Should login successfully with valid credentials', () => {
    const validUser = users.users.find(user => user.type === 'valid');

    loginPage.login(validUser.username, validUser.password);

    cy.contains('#flash', 'You logged into a secure area!').should('be.visible');
  });

  it('Should display error message when username is invalid', () => {
    const invalidUser = users.users.find(user => user.type === 'invalidUsername');

    loginPage.login(invalidUser.username, invalidUser.password);

    cy.contains('#flash', 'Your username is invalid!').should('be.visible');
  });

  it('Should display error message when password is invalid', () => {
    const invalidUser = users.users.find(user => user.type === 'invalidPassword');
      
    loginPage.login(invalidUser.username, invalidUser.password);

    cy.contains('#flash', 'Your password is invalid!').should('be.visible');
    });
  });