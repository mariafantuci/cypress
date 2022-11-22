/// <reference types="cypress" />
import "cypress-real-events";

describe('Collection page', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('base_url'));
      cy.selectFirstCollectionOnMenu();
    })

    it('hover product option', () => {
        cy.viewportSize('macbook-15');
        cy.get('#main-collection-product-grid .product-grid__item a').first().realHover()
        .wait(1000)
        .get('component-quickview-trigger button').first().click({force: true})
        .get('.swatch').each(item => {
            cy.get(item).children('input').click({force: true})
        })
        .get('.swatch input').first().click({force: true})
        .get('[data-add-to-card-content]').click({force: true})
        cy.url().should('include', 'cart')
    })
})
  