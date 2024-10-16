describe("Login and logout functions", () => {
  it("shows a register form", () => {
    cy.visitHome();
    cy.get("#registerForm").should("be.visible");
  });

  it("shows a login form when the login button is clicked", () => {
    cy.visitHome();
    cy.showLoginForm();
  });

  it("should allow a valid, registered user to log in with the login form", () => {
    cy.visitHome();
    cy.showLoginForm();
    cy.loginWithTestUserWorks();
    cy.isLoggedIn();
  });

  it("should not allow a user to login with invalid credentials and is then shown a message", () => {
    cy.visitHome();
    cy.showLoginForm();

    cy.login("invaliduser@example.no", "wrongPassword");

    cy.get(".error-message")
      .should("be.visible")
      .and(
        "contain",
        "Either your username was not found or your password is incorrect",
      );
  });

  it("should allow the user to log out with the log out button", () => {
    cy.visit(
      "https://elinygard.github.io/fed2-wf-ca-social-media-client/?view=profile&name=TestUser",
    );
    cy.isLoggedOut();
    cy.url().should(
      "eq",
      "https://elinygard.github.io/fed2-wf-ca-social-media-client/",
    );
  });
});
