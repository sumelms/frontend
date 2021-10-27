context("Admin's Dashboard", () => {
  beforeEach(() => cy.login('admin'));

  it('should have a page title "Dashboard"', () => {
    cy.contains('h1', 'Dashboard');
  });

  it("should have a customized greeting message with user's name", () => {
    cy.contains('span', 'Welcome back, Admin!');
  });

  afterEach(cy.logout);
});
