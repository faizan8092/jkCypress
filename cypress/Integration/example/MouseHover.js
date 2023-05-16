

describe('Mouse actions', () => {
    // it('mouse Hover', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     // cy.get('#mousehover').invoke('show');
    //     // cy.contains('Top').click({force:true})

    //     cy.get('#mousehover').trigger('mouseover');
    // });

    // it('Double click', () => {
    //     cy.visit('https://demoqa.com/buttons')
    //     cy.get('#doubleClickBtn').dblclick();
    //     cy.get('rightClickBtn').rightclick();
    // });

    it.only('Scrool action', () => {
        cy.visit('https://www.google.com/');
        cy.get('#APjFqb').type('masai{enter}');
        cy.wait(8000);
        // cy.scrollTo(0,1300);
        // cy.wait(2000);
        // cy.scrollTo(0,-1300);
        cy.contains('Maasai people').scrollIntoView().click()
    });


});