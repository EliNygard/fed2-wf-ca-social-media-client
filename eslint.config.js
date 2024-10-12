import globals from "globals";
import eslintRecommended from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,  // Set browser environment
      },
      ecmaVersion: "latest",  // Equivalent to es2021
      sourceType: "module",   // Use ES modules
    },
    rules: {
      // Add custom rules here (empty for now)
    },
  },
  eslintRecommended.configs.recommended,  // Extend recommended ESLint config
];
