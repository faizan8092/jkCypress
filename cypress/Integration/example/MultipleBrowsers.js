

describe('Multiple Browsers', () => {
    it('Example1', () => {

        // is shoud be of same domain
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.visit('https://www.google.com/')

        cy.origin('https://rahulshettyacademy.com/AutomationPractice/',()=>{

        })
    });
});