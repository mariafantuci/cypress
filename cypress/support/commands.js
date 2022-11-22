Cypress.Commands.add('openFilter', () => { 
    cy.get('[data-button-filter]').should('be.visible').click({force: true});
    cy.get('component-filters').should('have.class', 'active').should('be.visible');
})

Cypress.Commands.add('openSearch', (productName) => { 
    cy.get('[data-search-open]').should('be.visible').click({force: true});
      cy.get('search-bar').should('be.visible')
        .get('[data-search-input]')
        .should('be.visible')
        .click({force: true})
        .type(`${productName}`, {force: true})
        cy.get('#predictive-search ul li div').contains(productName)
        cy.get('#predictive-search .relative ul li').should('have.length', 4)
        cy.get('#predictive-search button span').contains('View All')
})

Cypress.Commands.add('openHamburgerMenu', () => { 
    cy.get('[data-menu-open]').first().should('be.visible').click({force: true, multiple: true});
})

Cypress.Commands.add('selectFirstCollectionOnMenu', () => { 
    cy.get('.menu-accordion .accordion__item a')
      .first()
      .click({force: true})
      cy.get('[data-accordion-content] li a ')
      .first()
      .click({force: true})
})

Cypress.Commands.add('viewportSize', (size) => { 
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})

Cypress.Commands.add('logoMobileLink', () => {  
    cy.get('[data-header] a')
    .should('have.attr', 'href', '/')
    .children('#logoMobile')
    .should('have.class', 'md:hidden')
})

Cypress.Commands.add('logoDesktopLink', () => {  
    cy.get('[data-header] a')
    .should('have.attr', 'href', '/')
    .children('#logo')
    .should('have.class', 'md:block')
})

Cypress.Commands.add('changePagination', () => {  
    cy.get('.collection__footer span.page').first().contains('1')
        .should('have.class', 'current')
        .next().contains('2')
        .click({ force: true});
        cy.url().should('include', '?page=2')

        cy.get('.collection__footer span.page.current')
        .contains('2')
        .should('have.class', 'current')
})