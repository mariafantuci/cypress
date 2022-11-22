/// <reference types="cypress" />

const productName = "Fernanda Dress"

describe('Search', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('base_url'));
      cy.openSearch(productName)
    })

    it('Collection click', () => {
        cy.get('ul .mb-3 a')
        .should('be.visible')
        .contains(productName)
        .click({force: true})
        cy.url().should('not.eq', Cypress.env('base_url'));
    })

    it('Product click', () => {
        cy.get('#predictive-search .relative ul li a')
        .should('be.visible')
        .first()
        .click({force: true})
        cy.url().should('not.eq', Cypress.env('base_url'));
    })

    it('View All btn', () => {
        cy.get('#predictive-search button span')
        .contains('View All')
        .click({force: true})
        cy.url().should('not.eq', Cypress.env('base_url'));
    })

    it('close filter', () => {
        cy.get('[data-search-close]').should('be.visible').first().click({force: true});
        cy.get('search-bar').should('be.hidden');
    })
})
  