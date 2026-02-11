# Cypress Herokuapp Login Project

This is a sample Cypress project demonstrating **login automation** using the **Page Object Model (POM)** pattern.

## 🧪 Features

- Login feature automation
- Page Object Model (POM) for maintainable tests
- Positive and negative login scenarios
- Fixtures for test data
- Custom commands in `support/commands.js`
- Cypress configuration in `cypress.config.js`

## 📂 Project Structure

cypress/
├─ e2e/
│ └─ login.cy.js
├─ fixtures/
│ └─ users.json
├─ pages/
│ └─ LoginPage.js
├─ support/
│ ├─ commands.js
│ └─ e2e.js
.gitignore
cypress.config.js
LICENSE
README.md


## ⚙️ Installation

1. Clone the repository:

`bash
git clone https://github.com/yourusername/cypress-herokuapp.git
cd cypress-herokuapp`
2. Install dependencies:
npm install
3. Open Cypress:
npx cypress open
Or run headless tests:
npx cypress run
🚀 Usage

All login actions are handled via the LoginPage class.

Add new tests in cypress/e2e/.

Add selectors in pages/ to keep tests clean and maintainable.

Fixtures can be used for test data.

📝 Notes

Ensure Node.js (LTS) is installed.

Cypress version: 10.x+ (adjust if needed).

📄 License

This project is licensed under the MIT License. See LICENSE
for details.