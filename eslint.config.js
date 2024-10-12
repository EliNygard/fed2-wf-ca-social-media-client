import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest"; // Import the Jest plugin

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
];
