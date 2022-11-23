/// <reference types="cypress" />

const productTest = "products/1435-3059"

describe('Swatches Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.visit(Cypress.env('base_url'))
      cy.selectFirstCollectionOnMenu()
      .get('.product-grid__item a')
      .first()
      .dblclick({force: true})
      .url().should('include', 'product')
    })

    it('Change swatch sizes', () => {
        cy.get('[data-option="SIZE"] .swatch input').each(option => {
            let text = option.val()
            cy.log(text)
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
        })
    })

    it('Change swatch color', () => {
        cy.get('[data-option="COLOR"] .swatch input').each(option => {
            let text = option.val()
            cy.log(text)
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
        })
    })
})

describe('Swatches Tablet', () => {
    beforeEach(() => {
      cy.viewport('ipad-2');
      cy.visit(`${Cypress.env('base_url')}${productTest}`);
    })

    it('Change swatch sizes', () => {
        cy.get('[data-option="SIZE"] .swatch input').each(option => {
            let text = option.val()
            cy.log(text)
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
        })
    })

    it('Change swatch color', () => {
        cy.get('[data-option="COLOR"] .swatch input').each(option => {
            let text = option.val()
            cy.log(text)
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
        })
    })
})
  
describe('Swatches Desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit(`${Cypress.env('base_url')}${productTest}`);
    })
    
    it('Change swatch sizes', () => {
        cy.get('[data-option="SIZE"] .swatch input').each(option => {
            let text = option.val()
            cy.log(text)
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
        })
    })

    it('Change swatch color', () => {
        cy.get('[data-option="COLOR"] .swatch input').each(option => {
            let text = option.val()
            cy.log(text)
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
        })
    })
})