context("Student's Dashboard", () => {
  beforeEach(() => cy.login('student'));

  it("should have a customized greeting message with user's name", () => {
    cy.contains('h1', 'Hi, Student.');
  });

  afterEach(cy.logout);
});
