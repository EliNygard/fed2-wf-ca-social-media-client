describe("Log in function", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("shows a login form when the login button is clicked", () => {
    cy.showLoginForm();
  });

  it("should allow a valid, registered user to log in with the login form", () => {
    cy.showLoginForm();
    cy.loginWithTestUserWorks();
    cy.isLoggedIn();
  });
});
