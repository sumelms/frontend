context('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users/admin.json').then((user) => {
      cy.get('#username').type(user.username);
      cy.get('#password').type(user.password);
    });
    cy.get('#kc-login').click();
  });

  it('should have a page title "Dashboard"', () => {
    cy.contains('h1', 'Dashboard');
  });

  it("should have a customized greeting message with user's name", () => {
    cy.contains('span', 'Welcome back, Admin!');
  });

  afterEach(() => {
    cy.get('#app-logout').click();
  });
});
