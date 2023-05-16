/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>



describe('This is my Test Suite collection of OrangeHrm', () => {
    it('This is to visit url', () => {
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        // cy.get('.oxd-button').click();
        // cy.get('.oxd-userdropdown-tab').click();
        // cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        // cy.get('input[name="username"]').type("Admin");
        // cy.get('input[name="password"]').type("admin123");
        // cy.contains(" Login ").click();
        // cy.get('.oxd-userdropdown-name').click();
        // cy.get('.oxd-userdropdown-menu').find('.oxd-userdropdown-link').should('have.length',4);
        // cy.contains("Logout").click();

       
    });

    it('Test for Automation test Store',()=>{
        cy.visit("https://automationteststore.com/");
        cy.xpath("(//*[text()='Contact Us'])[2]").click();
        cy.get("#ContactUsFrm_first_name").type("faizan");
        cy.get("#ContactUsFrm_email").type("Faizan@123");
        cy.get("#ContactUsFrm_enquiry").type("I want to Learn Cypress");
        cy.get('button[title="Submit"]').should('have.text'," Submit ")

    //     cy.get("//*[@title='submit']").click();
    })
});