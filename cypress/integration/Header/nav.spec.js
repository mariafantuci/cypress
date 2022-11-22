/// <reference types="cypress" />
import "cypress-real-events";
import 'cypress-if';

describe('Navigation mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit(Cypress.env('base_url'))
      .openHamburgerMenu();
    })

    it('Logo link', () => {
        cy.logoMobileLink();
    });

    it('opens all menus', () => {
        cy.get('[data-open-submenu]').each((elem) => {
            cy.get(elem).should('be.visible').click({force: true});
            elem.hasClass('active');
        })
    })

    it('close hamburger menu', () => {
        cy.get('[data-menu-close]').should('be.visible').first().click({force: true});
        cy.get('[data-menu-overlay]').should('be.hidden');
    })
})

describe('Navigation Tablet', () => {
    beforeEach(() => {
        cy.viewport('ipad-2');
        cy.visit(Cypress.env('base_url'))
        .openHamburgerMenu();
    })

    it('Logo link', () => {
        cy.logoDesktopLink();
    });

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


describe('Navigation Desktop', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit(Cypress.env('base_url'));
    })

    it('Logo link', () => {
        cy.logoDesktopLink();
    });
    
    it('Open menus', () => {
        cy.get('body').tab();
        cy.get('[data-menu-level1-link]').each((item) => {
            if(cy.get(item).should('not.have.class', 'font-medium.xl:active')){
                cy.get(item).realHover()
                .focus()
                .tab()
                .should('have.class', 'focus-visible')
            }
        })
    })
})  