context('Login ', () => {
  const user = {
    email: 'my@email.com',
    password: '123',
  };

  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-testid=button-container]').as('submit');
  });

  it('should be redirected to login when not authenticated', () => {
    cy.url().should('eq', 'http://localhost:3000/login');
    cy.contains('h1', 'Login');
    cy.contains('span', 'Access your account');
  });

  it('should have a login form with email and password fields', () => {
    cy.get('form').within(() => {
      cy.get('input:first')
        .should('have.attr', 'placeholder', 'Your email address');
      cy.get('input:last')
        .should('have.attr', 'placeholder', 'Your password');
    });
  });

  it('should validate required fields on submit', () => {
    cy.get('@submit').click();

    cy.get('form').within(() => {
      cy.get('div:first')
        .find('span')
        .should('have.text', 'email is a required field');

      cy.get('div:last')
        .find('span')
        .should('have.text', 'password is a required field');
    });
  });

  it('should validate the email format on submit', () => {
    cy.get('form').within(() => {
      cy.get('div:first')
        .as('emailDiv')
        .find('input').type('test@test');
      cy.get('input:last').type('123');
    });

    cy.get('@submit').click();

    cy.get('@emailDiv')
      .find('span')
      .should('have.text', 'email has an invalid email format');
  });

  it('should redirect to the register page ', () => {
    cy.get('[href="/register"]')
      .as('register')
      .should('have.text', 'Sign up');

    cy.get('@register').click();

    cy.location('pathname').should('eq', '/register');
  });

  it('should redirect to the recover password page', () => {
    cy.get('[href="/forgot-password"]')
      .as('forgotPassword')
      .should('have.text', 'Forgot your password?');

    cy.get('@forgotPassword').click();

    cy.location('pathname').should('eq', '/forgot-password');
  });

  it('should sign in successfully', () => {
    cy.get('form').within(() => {
      cy.get('input:first')
        .type(user.email);
      cy.get('input:last')
        .type(user.password);
    });

    cy.get('@submit').click();

    cy.location('pathname').should('eq', '/');
    cy.contains('h1', 'Dashboard');
  });
});