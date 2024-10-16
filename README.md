# Workflow Course Assignment
##### Delivery: October 2024

The goal of the CA is to practice quality assurance of the existing social media app repository, forked from NoroffFEU. 
This has been done by configuring tools, creating workflows and defining tests that improve the efficiency of the development process..

##### Steps in the process
- Setting up workflow and development tools
  - Install and configure ESLint and Prettier
  - Setting up commit hooks
  - Setting branch ruleset
    
- Setting up testing tools
  - Install and configure Jest for unit tests
  - Install and configure Cypress for end to end testing
  - Automating tests on creating a PR
 
##### Test cases that have been created and run
- Jest unit tests:
  - The login function stores a token when provided with valid credentials
  - The logout function clears the token from browser storage
 
- Cypress end to end tests:
  - The user can log in with the login form with valid credentials
  - The user cannot submit the login form with invalid credentials and is shown a message
  - The user can log out with the logout button

### Automated tests

[![Automated E2E Testing](https://github.com/EliNygard/fed2-wf-ca-social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/EliNygard/fed2-wf-ca-social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/EliNygard/fed2-wf-ca-social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/EliNygard/fed2-wf-ca-social-media-client/actions/workflows/unit-test.yml)
