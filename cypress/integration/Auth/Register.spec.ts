import { last } from 'cypress/types/lodash';

context('Register ', () => {
  beforeEach(() => {
    cy.visit('/register');
    console.log(last);
  });

  it('should be redirected to register page', () => {
    cy.contains('h1', 'Register');
    cy.contains('span', 'Create your account');
  });

  it('should have a form with email, password and confirm password fields', () => {
    cy.get('form').within(() => {
      cy.get('input:first').should(
        'have.attr',
        'placeholder',
        'Your email address',
      );
      cy.get(':nth-child(2)')
        .find('input')
        .should('have.attr', 'placeholder', 'Your password');
      cy.get('input:last').should(
        'have.attr',
        'placeholder',
        'Repeat your password',
      );
    });
  });

  it('should validate required fields on submit', () => {
    cy.get('button').click();

    cy.get('form').within(() => {
      cy.get('div:first')
        .find('span')
        .should('have.text', 'email is a required field');

      cy.get('div:nth-child(2)')
        .find('span')
        .should('have.text', 'password is a required field');

      cy.get('div:last')
        .find('span')
        .should('have.text', 'passwordConfirm is a required field');
    });
  });

  it('should redirect to the login page', () => {
    cy.get('a').as('login').should('have.text', 'login');

    cy.get('@login').click();

    cy.location('pathname').should('eq', '/login');
  });
});
