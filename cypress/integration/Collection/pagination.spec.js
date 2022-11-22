/// <reference types="cypress" />

describe('Collection page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('base_url'));
        cy.selectFirstCollectionOnMenu();
        cy.scrollTo('bottom')
      })

    it('changes to the next pagination by clicking on the number', () => {
        cy.changePagination();
    })

    it('changes to the old pagination by clicking on the number', () => {
        cy.changePagination()

        cy.get('.collection__footer .page')
        .contains('1')
        .first()
        .dblclick({ force: true});

        cy.url().should('include', '?page=1')

        cy.get('.collection__footer span.page.current')
        .contains('1')
        .should('have.class', 'current')
    })

    it('changes to the next pagination by clicking on the arrow', () => {
        cy.get('.collection__footer .next a')
        .click({ force: true});
        cy.url().should('include', '?page=2')

        cy.get('.collection__footer span.page.current')
        .contains('2')
        .should('have.class', 'current')
    })

    it('changes to the old pagination by clicking on the arrow', () => {
        cy.changePagination()
        cy.wait(1000)

        cy.get('.collection__footer a')
        .contains('1')
        .first()
        .dblclick({ force: true});

        cy.url().should('include', '?page=1')

        cy.get('.collection__footer span.page.current')
        .contains('1')
        .should('have.class', 'current')
    })
})
  