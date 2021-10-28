context("Admin's Dashboard", () => {
  beforeEach(() => cy.login('admin'));

  it("should have a customized greeting message with user's name", () => {
    cy.contains('h1', 'Hi, Admin.');
  });

  afterEach(cy.logout);
});
