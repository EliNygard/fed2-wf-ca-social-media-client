describe("Logout function", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("the user should log out with the log out button", () => {
    cy.showLoginForm();
    cy.loginTestUser();
    cy.isLoggedIn();
    cy.get("button[data-auth=logout]").click();
    cy.wait(500);
    cy.isLoggedOut();
  });
});
