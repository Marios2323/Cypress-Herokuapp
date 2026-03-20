# Cypress Herokuapp Automation

End-to-end automation project built with Cypress using the Page Object Model (POM) design pattern.

The project validates multiple UI scenarios against the Herokuapp test site.

## 🔍 What This Project Demonstrates

Structured test automation architecture

Page Object Model implementation

Data-driven testing using fixtures

Clean test separation and reusable methods

Professional project structure

## 🧪 Test Scenarios Covered

Successful login with valid credentials

Login attempt with invalid username

Empty credentials scenario

Flash message color validation

Login attempt with invalid password

Checkbox count

Checkbox functionality

## 📂 Project Structure

cypress 

  e2e > herokuapp-login.cy.js, herokuapp-checkboxes.cy.js

  fixtures > users.json

  pages > loginPage.js checkboxPage.js

  support > commands.js, e2e.js

.gitignore

cypress.config.js

cypress.env.example.json

LICENSE

package-lock.json

package.json

README.md


## ⚙️ Installation & Execution

1. Clone the repository:

`git clone https://github.com/yourusername/cypress-herokuapp.git`

`cd cypress-herokuapp`

`npm install`

2. Set up environment variables:

`cp cypress.env.example.json cypress.env.json`

3. Fill in your credentials in cypress.env.json

4. Run Cypress UI:

`npx cypress open`

5. Run headless:
   
`npx cypress run`

> ⚠️ Firefox currently not supported due to a known compatibility issue between Cypress 15 and Firefox 148 (WebDriver Bidi).

## 🛠 Tech Stack

* Cypress 15+

* JavaScript (ES6)

* Node.js LTS

* GitHub Actions CI (Chrome)

## 📄 License

MIT License
