/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>


describe('Tabs Switching', () => {
    it('example', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // removing target attribute
        cy.get('#opentab').invoke('removeAttr','target').click();
    });
});

