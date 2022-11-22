/// <reference types="cypress" />
const BASE_URL = 'https://www.dressthepopulation.com/';

const sizes = ['iphone-6', [768, 900], [1024, 768], 'macbook-13', 'macbook-15', 'macbook-16']

sizes.forEach((size) => {
    describe(`Header ${size}`, () => {  
        beforeEach(() => {
            cy.visit(Cypress.env('base_url'));
            cy.viewportSize(size);
        })

        const klavio = document.querySelector('.klaviyo-close-form > .needsclick');
        if(klavio){
            it('Close klavio overlay', () => {
                cy.wait(2000);
                cy.get('.klaviyo-close-form > .needsclick').should('be.visible').click();
            })
        }

        it('Verify if the alert message is visible', () => {
            cy.get('#shopify-section-alert-message').should('be.visible')
        })

        it('Logo link', () => {
            cy.get('[data-header] a')
            .should('have.attr', 'href', '/')
        });
    })
})