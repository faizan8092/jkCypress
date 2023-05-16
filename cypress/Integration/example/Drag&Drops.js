/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>

describe('Draggable & Droppable', () => {
    it('Example 1', () => {
        cy.visit('https://demoqa.com/droppable');

        const draggable = cy.get('#draggable');
        const droppable = cy.get('#droppable');

        droppable.should('have.text','Drop here');

        draggable.trigger('mousedown',{which: 1})
        droppable.trigger('mousemove').trigger('mouseup', {force:true})

        droppable.should('have.text','Dropped!')
    });

});