

describe('This is Function A', () => {
    it('This is Function A', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        console.log("test 1");
    });

    it('This is Function B', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.log("test 2");
    });


});