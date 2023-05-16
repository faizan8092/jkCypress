

describe('abdddfds', () => {
    it('Test 1', () => {
        cy.visit('https://www.myntra.com/tshirts/the-souled-store/the-souled-store-men-maroon-marvel-comic-lover-placement-print-oversized-t-shirt/15248394/buy',{headers:{"Accept-Encoding":"gzip,defalte"}})
        cy.get('.pdp-title').should('have.text','The Souled Store')
    });
});