context("Student's Dashboard", () => {
  beforeEach(() => cy.login('student'));

  it('should have a page title "Dashboard"', () => {
    cy.contains('h1', 'Dashboard');
  });

  it("should have a customized greeting message with user's name", () => {
    cy.contains('span', 'Welcome back, Student!');
  });

  it("should have content customized to the user's roles", () => {
    cy.contains('li', 'student');
    cy.contains('li', 'teacher').should('not.exist');
    cy.contains('li', 'admin').should('not.exist');
  });

  afterEach(cy.logout);
});
