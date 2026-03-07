import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});