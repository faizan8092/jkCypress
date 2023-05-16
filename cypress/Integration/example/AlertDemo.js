/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>


describe('Demaqa alert activity', () => {
    it('example 1', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.on('window:confirm',(message)=>{
            expect(message).to.equal('Do you confirm action?');
            return true
        })
        // cy.get('#confirmResult').should('have.text',"You selected Ok");
    });
});