context("Admin's Dashboard", () => {
  beforeEach(() => cy.login('admin'));

  it('should have a page title "Dashboard"', () => {
    cy.contains('h1', 'Dashboard');
  });

  it("should have a customized greeting message with user's name", () => {
    cy.contains('span', 'Welcome back, Admin!');
  });

  it("should have content customized to the user's roles", () => {
    cy.contains('li', 'student');
    cy.contains('li', 'teacher');
    cy.contains('li', 'admin');
  });

  afterEach(cy.logout);
});
