import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest"; // Import the Jest plugin
import pluginCypress from "eslint-plugin-cypress";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser, // Set browser environment
            },
            ecmaVersion: "latest", // Equivalent to es2021
            sourceType: "module", // Use ES modules
        },
    },
    pluginJs.configs.recommended, // Equivalent to "extends": "eslint:recommended"
    {
        files: ["**/*.test.js"], // Target test files
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
                "cypress/globals": true, // Set Cypress environment
            },
        },
        plugins: {
            cypress: pluginCypress, // Add Cypress plugin
        },
        rules: {
            ...pluginCypress.configs.recommended.rules, // Extend Cypress recommended rules
            "cypress/no-unnecessary-waiting": "off", // Custom Cypress rule
            "no-unused-vars": "off", // Turn off no-unused-vars rule for Cypress files
        },
    },
];
