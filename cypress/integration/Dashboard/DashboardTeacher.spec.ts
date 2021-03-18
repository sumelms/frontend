context("Teacher's Dashboard", () => {
  beforeEach(() => cy.login('teacher'));

  it('should have a page title "Dashboard"', () => {
    cy.contains('h1', 'Dashboard');
  });

  it("should have a customized greeting message with user's name", () => {
    cy.contains('span', 'Welcome back, Teacher!');
  });

  it("should have content customized to the user's roles", () => {
    cy.contains('li', 'student').should('not.exist');
    cy.contains('li', 'teacher');
    cy.contains('li', 'admin').should('not.exist');
  });

  afterEach(cy.logout);
});
