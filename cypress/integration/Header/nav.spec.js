/// <reference types="cypress" />
const BASE_URL = 'https://www.dressthepopulation.com/';

const sizes = ['iphone-6', [640, 700], [768, 900], [1024, 768], 'macbook-13', 'macbook-15', 'macbook-16']

describe('Navigation mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit(BASE_URL);
      cy.get('[data-menu-open]').should('be.visible').click({force: true});
      cy.wait(1000);
    })
    
    it.only('Tab all menu elements', () => {
        cy.viewport(1281, 900);
        
        cy.get('body').tab();
        
        cy.get('header [data-menu-wrapper] ul li').each(($elem) => {
            cy.focused()
            .tab()
            .should('have.class', 'focus-visible')
        })
    })

    it('opens all menus', () => {
        cy.get('[data-open-submenu]').each(($elem) => {
            cy.get($elem).should('be.visible').click({force: true});
            $elem.hasClass('active');
        })
    })

    it('close hamburger menu', () => {
        cy.get('[data-menu-close]').should('be.visible').first().click({force: true});
        cy.get('[data-menu-overlay]').should('be.hidden');
    })
})
  