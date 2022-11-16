/// <reference types="cypress" />
const BASE_URL = 'https://www.dressthepopulation.com/';

describe('Minicart', () => {
    beforeEach(() => {
      cy.visit(BASE_URL);
      cy.wait(2000);
    })
    
    it('Clicks minicart', () => {
        cy.get('[data-minicart-count]')
        .should('be.visible')
        .contains('0')

        cy.get('header [data-hcid="minicart-co"]')
        .should('be.visible')
        .click({force: true})
        cy.url().should('eq', `${BASE_URL}cart`);
    })
})
  