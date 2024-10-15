import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';
import pluginCypress from 'eslint-plugin-cypress';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended, // Equivalent to "extends": "eslint:recommended"
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: globals.jest,
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['**/*.cy.js'],
    languageOptions: {
      globals: {
        ...globals.cypress,
      },
    },
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['cypress.config.js', '**/*.js'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
];
