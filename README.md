#Cypress Herokuapp Login Automation

End-to-end login automation project built with Cypress using the Page Object Model (POM) design pattern.

The project validates positive and negative authentication scenarios against the Herokuapp test site.

##🔍 What This Project Demonstrates

Structured test automation architecture

Page Object Model implementation

Data-driven testing using fixtures

Clean test separation and reusable methods

Professional project structure

##🧪 Test Scenarios Covered

Successful login with valid credentials

Login attempt with invalid username

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


##⚙️ Installation & Execution

1. Clone the repository:

`bash
git clone https://github.com/yourusername/cypress-herokuapp.git
cd cypress-herokuapp
npm install`
2. Run Cypress UI:
'npx cypress open'
3. Run headless:
'npx cypress run'
##🛠 Tech Stack

*Cypress 10+

*JavaScript (ES6)

*Node.js LTS

##📄 License

MIT License