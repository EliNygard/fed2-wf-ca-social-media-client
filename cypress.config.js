import "dotenv/config";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl:
      process.env.CYPRESS_BASE_URL ||
      "https://elinygard.github.io/fed2-wf-ca-social-media-client/",
    password: process.env.TEST_USER_PASSWORD,
    accessToken: process.env.TEST_ACCESSTOKEN,
  },
});
