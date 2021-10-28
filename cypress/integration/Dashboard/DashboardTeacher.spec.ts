context("Teacher's Dashboard", () => {
  beforeEach(() => cy.login('teacher'));

  it("should have a customized greeting message with user's name", () => {
    cy.contains('h1', 'Hi, Teacher.');
  });

  afterEach(cy.logout);
});
