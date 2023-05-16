

/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>

describe('variables in TestAutomationStore', () => {
    it.skip('Example1', () => {
        cy.visit('https://automationteststore.com/');
        const makeup = cy.get("a[href*='product/category&path']").contains("Makeup")
        const skincare = cy.get("a[href*='product/category&path']").contains("Skincare")
        makeup.click();
        skincare.click();
    });


    it('Example2', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path']").contains("Makeup").click();
        const header = cy.get('h1 .maintext').text();
        cy.get("a[href*='product/category&path']").then(($header)=>{
            const header = $header.text();
            cy.log(header);
        });
    });

    it('right example', () => {
        
    });
});