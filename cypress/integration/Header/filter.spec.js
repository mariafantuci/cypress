/// <reference types="cypress" />
const BASE_URL = 'https://www.dressthepopulation.com/';
const productName = "Fernanda Dress"
describe('Filter', () => {
    beforeEach(() => {
      cy.visit(BASE_URL);
      cy.get('[data-search-open]').should('be.visible').click({force: true});
      cy.get('search-bar').should('be.visible')
      cy.wait(2000);
   
        cy.get('[data-search-input]')
        .should('be.visible')
        .click({force: true})
        .type(productName)
        cy.get('#predictive-search ul li div').contains(productName)
        cy.get('#predictive-search .relative ul li').should('have.length', 4)
        cy.get('#predictive-search button span').contains('View All')
    })

    it('Collection click', () => {
        cy.get('ul .mb-3 a')
        .should('be.visible')
        .contains(productName)
        .click({force: true})
        cy.url().should('not.eq', BASE_URL);
    })

    it('Product click', () => {
        cy.get('#predictive-search .relative ul li a')
        .should('be.visible')
        .first()
        .click({force: true})
        cy.url().should('not.eq', BASE_URL);
    })

    it('View All btn', () => {
        cy.get('#predictive-search button span')
        .contains('View All')
        .click({force: true})
        cy.url().should('not.eq', BASE_URL);
    })

    it('close filter', () => {
        cy.get('[data-search-close]').should('be.visible').first().click({force: true});
        cy.get('search-bar').should('be.hidden');
    })
})
  