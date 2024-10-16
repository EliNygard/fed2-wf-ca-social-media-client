import "dotenv/config";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    password: process.env.TEST_USER_PASSWORD,
    accessToken: process.env.TEST_ACCESSTOKEN,
  },
});
