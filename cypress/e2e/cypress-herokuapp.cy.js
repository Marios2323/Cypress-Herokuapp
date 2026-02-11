import LoginPage from '../pages/LoginPage';

describe('Heroku Login Test', () => {

  const loginPage = new LoginPage();

  it('visits the Herokuapp and successfully logs in', () => {

    loginPage.visit();
    loginPage.login('tomsmith', 'SuperSecretPassword!');

    cy.contains('You logged into a secure area!');
  });

});
