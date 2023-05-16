

describe('CheckBox Implementstion', () => {
    it('Example 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value',"option1");
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        cy.get('input[type="checkbox"]').check(['option1','option3']);


        cy.get('input[type="checkbox"]').uncheck(['option1','option3']);

        cy.get('input[type="checkbox"]').check();

    });
});