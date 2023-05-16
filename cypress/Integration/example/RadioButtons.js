
describe('Radio Button Examples', () => {
    it('Example1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('input[value="radio1"]').check().should('be.checked');
        cy.get('input[value="radio2"]').check().should('be.checked');
    });


    it('Example2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayes-text').should
    });
  
        
});


  // it('visible and not visible feature', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/")
    //     //to check an elemgnt is visible in the web page
    //     cy.get('#displayed-text').should('be.visible')
        
    
    //     cy.get('#displayed-text').should('not.be.visible')
    //     //ifi click on show again
    //     cy.get('show-textbox').click()
    //     cy.get('#displayed-text') .should('be.visible
        
    //     3};