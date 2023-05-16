



before(()=>{
    cy.fixture('example').then((data) => {
        globalThis.data = data;
    })
});

describe('Data drive testing', () => {
    it('OrnageHrm example', () => {
        cy.visit("/docs/getting-started.html");
        
        // cy.get('input[name="username"]').type(data.name);
        // cy.get('input[name="password"]').type(data.email);
        // cy.contains(" Login ").click();
    });
});