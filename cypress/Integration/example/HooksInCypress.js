


describe('', () => {

    before(()=>{
        cy.log('This will run once before all the test in the block ')
    })

    after(()=>{
        cy.log('run once after all test run in the block')
    })

    beforeEach(()=>{
        cy.log('run before each test cases is executed');
    })

    afterEach(()=>{
        cy.log('run before each test cases is executed')
    })

    it('First case', () => {
        cy.log('first test case');
    });

    it('', () => {
        cy.log('Second test case');
    });
});