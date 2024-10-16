describe("Logout function", () => {
  beforeEach(() => {
    cy.visitHome();
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });

  it("the user should log out with the log out button", () => {
    cy.get('button[data-auth="logout"]').click();

    cy.isLoggedOut();
  });
});
