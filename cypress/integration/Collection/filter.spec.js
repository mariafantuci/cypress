/// <reference types="cypress" />

describe('Collection page', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('base_url'));
      cy.selectFirstCollectionOnMenu();
      cy.openFilter();
    })

    it('Change sort by filter', () => {
        cy.get('#sort-by').select('Featured', { force: true }).should('have.value', 'manual')
        cy.url().should('include', '?sort_by=manual')

        cy.get('#sort-by').select('Best selling', { force: true }).should('have.value', 'best-selling')
        cy.url().should('include', '?sort_by=best-selling')

        cy.get('#sort-by').select('Alphabetically, A-Z', { force: true }).should('have.value', 'title-ascending')
        cy.url().should('include', '?sort_by=title-ascending')

        cy.get('#sort-by').select('Alphabetically, Z-A', { force: true }).should('have.value', 'title-descending')
        cy.url().should('include', '?sort_by=title-descending')

        cy.get('#sort-by').select('Price, low to high', { force: true }).should('have.value', 'price-ascending')
        cy.url().should('include', '?sort_by=price-ascending')

        cy.get('#sort-by').select('Price, high to low', { force: true }).should('have.value', 'price-descending')
        cy.url().should('include', '?sort_by=price-descending')

        cy.get('#sort-by').select('Date, old to new', { force: true }).should('have.value', 'created-ascending')
        cy.url().should('include', '?sort_by=created-ascending')

        cy.get('#sort-by').select('Date, new to old', { force: true }).should('have.value', 'created-descending')
        cy.url().should('include', '?sort_by=created-descending')

    })

    it('Opens the filter options', () => {
        cy.get('#CollectionFiltersForm details summary').each(el => {
            cy.get(el).click({force: true})
          })
    })

    it('Select the first filter option', () => {
        //cy.get('[data-collection-product-qty]').should('have.value', '680')
        cy.get('#CollectionFiltersForm details')
        .first()
        .children('summary').click({force: true})

        cy.wait(1000)
        cy.get('#CollectionFiltersForm details .js-filter input')
        .first()
        .check();
        
        cy.wait(1000)
        cy.get('button[data-filter-close][data-filter-submit]')
        .should('be.visible')
        .dblclick({ multiple: true, force: true })
        
        cy.openFilter();
        //cy.get('[data-collection-product-qty]').should('have.value', '146')
    })
    
    it('Close filter', () => {
        cy.get('[data-filter-close]').should('be.visible').first().click({force: true});
        cy.get('component-filters').should('have.class', 'hidden').should('be.hidden');
    })
})
  