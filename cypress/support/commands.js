// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitHome", () => {
  cy.visit("https://elinygard.github.io/fed2-wf-ca-social-media-client/");
  cy.wait(500);
});

Cypress.Commands.add("showLoginForm", () => {
  cy.get("#registerForm").find("button[data-auth=login").click();
  cy.get("#loginForm").should("be.visible");
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginForm").find("input[name=email]").type(email);
  cy.get("#loginForm").find("input[name=password]").type(password);
  cy.get("#loginForm").find("button[type=submit]").click();
});

Cypress.Commands.add("loginWithTestUser", () => {
  cy.fixture("testUser").then((user) => {
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      {
        statusCode: 200,
        body: {
          accessToken: "testToken",
          name: user.username,
        },
      },
    ).as("loginRequest");

    // const testPassword = Cypress.env("password");

    cy.login(user.email, "testPassword");

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "profile");

    cy.intercept(
      "GET",
      `https://nf-api.onrender.com/api/v1/social/profiles/**`,
      {
        statusCode: 200,
        body: {
          name: user.name,
          followers: [],
          following: [],
          posts: [],
        },
      },
    ).as("getProfile");

    cy.wait("@getProfile").its("response.statusCode").should("eq", 200);
  });
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.a.string;
  });
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.null;
  });
});
