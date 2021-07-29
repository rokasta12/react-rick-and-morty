import { homeURL } from '../../fixtures/constants';

describe('homebage', () => {
  it('opens the app', () => {
    cy.visit(homeURL);
  });

  it('should show default 20 cards', () => {
    cy.get('.car-list').should('have.class', 'car-list');

    cy.get('.card').should('have.length', 20);
  });

  it('should not found Hello world character', () => {
    cy.get('input').type('Hello, world!');
    cy.get('.card').find('h2').should('have.text', 'lookingforcharacters');
    cy.wait(3000);

    cy.get('.card').find('h2').should('have.text', 'No Character Found');
  });

  it('should find some Rick characters', () => {
    cy.get('input').clear();
    cy.wait(3000);

    cy.get('input').type('Rick');
    cy.get('.card').find('h2').should('have.text', 'lookingforcharacters');
    cy.wait(3000);
    cy.get('.card').find('h2').should('have.text', 'Rick');
  });
});
