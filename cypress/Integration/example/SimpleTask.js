

/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>


// click on product by normal method , by indexing and by .contains method

describe('Automation Test Store', () => {
    it('Click First Product by normal', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    });

    it('1 contains Product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
        
    });


    it('3 by index First Product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').eq(0).click();
        
    });

});