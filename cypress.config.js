import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    retries: {
      runMode: 2,
      openMode: 0
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
  }
});