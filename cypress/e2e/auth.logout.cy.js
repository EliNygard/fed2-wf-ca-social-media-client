describe("Logout function", () => {
  beforeEach(() => {
    cy.visit(
      "https://elinygard.github.io/fed2-wf-ca-social-media-client/?view=profile&name=TestUser",
    );
  });

  it("the user should log out with the log out button", () => {
    cy.get('button[data-auth="logout"]').click();

    cy.isLoggedOut();
    cy.url().should(
      "eq",
      "https://elinygard.github.io/fed2-wf-ca-social-media-client/",
    );
  });
});
