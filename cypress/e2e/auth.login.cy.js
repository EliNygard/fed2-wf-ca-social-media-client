describe("Login function", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("should allow a valid, registered user to log in with the login form", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });

  it("should not allow a user to login with invalid credentials and is then shown a message", () => {
    cy.showLoginForm();

    cy.login("invaliduser@example.no", "wrongPassword");

    cy.get(".error-message")
      .should("be.visible")
      .and(
        "contain",
        "Either your username was not found or your password is incorrect",
      );
  });
});
