

describe('Activity for Dropdowns', () => {
    it.skip('Example1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('select').select('Option3').should('have.value','option3')
    });

    it('Example1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text() == 'India'){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.text','India');

    });
});