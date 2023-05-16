

describe('Browser navigation ', () => {
    it('Navigation Methods', () => {
        // navigate.to //url
        // navigate.back() // go back
        // navigate.foreward() // go forward
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.contains(" Login ").click();

        cy.contains('Admin').click();
        cy.url().should('include','admin')

        cy.go('back');
        cy.url().should('include','dashboard');
        cy.go('forward');
        cy.url().should('include','admin');
        cy.reload();
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[1]')
    });
});