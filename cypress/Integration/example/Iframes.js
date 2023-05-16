import 'cypress-iframe'

/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>
/// <reference types="cypress-iframes" />

describe('Using Iframes Examples', () => {
    it('Example 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        // cy.contains('Maasai people')
        cy.iframe().contains('JOIN NOW').scrollIntoView().click();
    });
});