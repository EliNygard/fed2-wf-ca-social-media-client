import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginCypress from "eslint-plugin-cypress";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser, // Set browser environment
                ...globals.node, // Set Node.js environment
            },
            ecmaVersion: "latest", // Equivalent to es2021
            sourceType: "module", // Use ES modules
        },
    },
    pluginJs.configs.recommended, // Equivalent to "extends": "eslint:recommended"
    {
        files: ["**/*.test.js"], // Target Jest test files
        languageOptions: {
            globals: globals.jest, // Set Jest environment
        },
        plugins: {
            jest: pluginJest, // Add Jest plugin
        },
        rules: {
            ...pluginJest.configs.recommended.rules, // Extend Jest recommended rules
            "jest/prefer-expect-assertions": "off", // Custom Jest rule
        },
    },
    {
        files: ["**/*.cy.js"], // Target Cypress test files
        languageOptions: {
            globals: {
                ...globals.cypress, // Set Cypress environment
            },
        },
        plugins: {
            cypress: pluginCypress, // Add Cypress plugin
        },
        rules: {
            ...pluginCypress.configs.recommended.rules, // Extend Cypress recommended rules
            "cypress/no-unnecessary-waiting": "off", // Custom Cypress rule
            "no-unused-vars": "off", // Turn off no-unused-vars rule for Cypress files
            "no-undef": "off", // Disable undefined variable checks for Cypress globals
        },
    },
    {
        files: ["cypress.config.js"], // Specifically target the Cypress config file
        rules: {
            "no-unused-vars": "off", // Turn off no-unused-vars for Cypress config
        },
    },
];
