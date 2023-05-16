/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>


describe('Assignment 1', () => {
    it.skip('Flipkart', () => {
        
    });

    it.skip('Amazon', () => {
        cy.visit("https://www.amazon.in/");
        cy.xpath('//a[@id="nav-link-accountList"]').click();
        cy.get('#ap_email').type('918092123464');
        cy.get('#continue').click();
        cy.get('#ap_password').type('Faizan@2580');
        
        cy.get('#signInSubmit').click();

        cy.xpath('//a[@id="nav-link-accountList"]').trigger('mouseover');
        cy.wait(2000)
        cy.xpath('//span[contains(text(),"Sign Out")]').click();
    });
    
    it('Goodreeds', () => {
        cy.visit('https://www.goodreads.com/');
        cy.xpath('//a[contains(text(),"Sign In")]').click();
        cy.xpath('//button[contains(text(),"Sign in with email")]').click();
        cy.wait(2000)
        cy.xpath('#ap_email').type("faizan");
        cy.xpath('//input[@id="ap_password"]').type(822124);
        cy.xpath('//input[@id="signInSubmit"]').click();
    });

});