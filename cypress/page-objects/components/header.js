export default class Footer {

    static shop = ':nth-child(3) > .font-primary'
    static help = ':nth-child(6) > .font-primary'
    
    static clickShop() {
        cy.get(this.shop).click()
    }

    static clickhelp() {
        cy.get(this.help).click()
    }
}