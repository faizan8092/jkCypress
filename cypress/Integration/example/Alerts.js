

describe('Alert & alerts handling', () => {
    it('Alert with 1 option', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');


        // Alert automaticall get handeled no nwwd to worry
        cy.get('#alertbtn').click();

        cy.on('window:alert',(message)=>{
            expect(message).to.equal('Hello , share this practice page and share your knowledge');
            return true;
        })

    });

    it('Alert with 2 option', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');


        // Alert automaticall get handeled no nwwd to worry
        cy.get('#confirmbtn').click();

        cy.on('window:alert',(message)=>{
            expect(message).to.equal('Hello , Are you sure you want to confirm?');
            return false;
        })

    });
});