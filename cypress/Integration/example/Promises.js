
/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>

// const { should } = require("chai");





describe('Promise & Then', () => {
    it.skip('first web app example on Promise and then', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').then((itemheader)=>{
            cy.log(itemheader.text())
        })
    });

    it.skip('Second Promise eg.', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href$="contact"]').click().then((logText)=>{
            cy.log(logText.text())
        })
    });


    it('Third Promise', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.contains(" Login ").click();
        cy.contains("Admin").click();
        cy.url().should('include','admin')
        cy.title().should('include','orangehrm')
        cy.get('.oxd-userdropdown-name').click();
        cy.get('.oxd-userdropdown-menu').find('.oxd-userdropdown-link').eq(3).contains('Logout').then((logout)=>{
            const logoutLink = logout.text();
            cy.wrap(logoutLink).click();
        })
        // cy.contains("Logout").click();
        cy.get('.oxd-text oxd-text--span oxd-main-menu-item--name["Admin"]').click()
        
    });


});