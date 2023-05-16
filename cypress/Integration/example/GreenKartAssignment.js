

/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>


describe('GreenKart Assignment', () => {
    it.skip('Greenkart', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('input[type="search"]').type("ca");

        //------------------------Assertion example---------------------------
        cy.get(".product:visible").should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        // Iterator method
        cy.get('.products').find('.product').each(($el,index,$list)=>{
           const prodName = $el.find('h4.product-name').text();
          if(prodName.includes('Cashews')){
            cy.wrap($el).find('button').click();
          }
            
        })
        // Assertion examples
        cy.title().should('include','GreenKart')
        cy.get(".brand").should('have.text',"GREENKART")

        cy.get(".cart-icon").click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

        // This is ceckbox assertion
        cy.get('.chkAgree').check().should('be.checked');

        cy.contains('Proceed').click();

    });

    it('OrangeHrm', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.contains(" Login ").click();
        cy.contains('Admin').click();
        cy.get('input[placeholder="Type for hints..."]').type("L")
        cy.wait(2000)
        // cy.get('div[role="listbox"]>div').eq(2).click();
        cy.get('div[role="listbox"]').find('.oxd-autocomplete-dropdown > * > span').each(($el,index,$list)=>{
            const name = $el.text();
            if(name.includes('Lal')){
                cy.wrap($el).click();
              }
            // cy.log("index is"+ index + " " + "name is" + $el )
            // console.log($el)
        })
        
    });
});