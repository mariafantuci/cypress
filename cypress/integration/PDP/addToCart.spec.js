/// <reference types="cypress" />

let productTest = "products/ddr270-1233710"

describe('Swatches Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.visit(`${Cypress.env('base_url')}${productTest}`)
    })

    it('Change swatch sizes', () => {
        cy.get('[data-option="SIZE"] .swatch input').each(option => {
            let text = option.val()
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
            if(cy.get(option).hasClass('disabled')){
                cy.get('[data-outofstock-content]').should('have.class','active')
                cy.get('[data-add-to-card-content]').should('be.hidden')
            }
        })
    })

    
})

productTest = "products/1435-3059"

describe('Swatches Tablet', () => {
    beforeEach(() => {
      cy.viewport('ipad-2');
      cy.visit(`${Cypress.env('base_url')}${productTest}`);
    })

    it('Change swatch sizes', () => {
        cy.get('[data-option="SIZE"] .swatch input').each(option => {
            let text = option.val()
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
            if(cy.get(option).hasClass('disabled')){
                cy.get('[data-outofstock-content]').should('have.class','active')
                cy.get('[data-add-to-card-content]').should('be.hidden')
            }
        })
    })
})

productTest = "products/1435-3059"

describe('Swatches Desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit(`${Cypress.env('base_url')}${productTest}`);
    })

    it('Change swatch sizes', () => {
        cy.get('[data-option="SIZE"] .swatch input').each(option => {
            let text = option.val()
            cy.get(option).click({force: true})
            .get('[data-swatch-label]').contains(text)
            if(cy.get(option).hasClass('disabled')){
                cy.get('[data-outofstock-content]').should('have.class','active')
                cy.get('[data-add-to-card-content]').should('be.hidden')
            }
        })
    })
})