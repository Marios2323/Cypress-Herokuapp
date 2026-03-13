# Cypress Herokuapp Login Automation

End-to-end login automation project built with Cypress using the Page Object Model (POM) design pattern.

The project validates positive and negative authentication scenarios against the Herokuapp test site.

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

## 📂 Project Structure

cypress 

  e2e > login.cy.js

  fixtures > users.json

  pages > LoginPage.js 

  support > commands.js, e2e.js

.gitignore

cypress.config.js

LICENSE

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
