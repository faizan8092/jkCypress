
var APIKey = "2a1c08eac42c000d641ca8de31ee9cf9";
var Token = "ATTA757b8b49d6aa491a9dacd9b92b771b08749bc77e233b6d6f8097752fd3d2c45b4C0985AA";
var Name = "Faizan15";
var random_num = Math.floor(Math.random() * 9000) + 1000;
var NewName = `Sunil2 ${random_num}`;

var desc = "I'm doing api testing";

describe('Testing apis of trello', () => {
    var id;
    it('Create a Board Api', () => {
        cy.request({
           method:"POST",
            url:`https://api.trello.com/1/boards/?name=${Name}&key=${APIKey}&token=${Token}`,
            headers: {
               accept:"application/json" 
            }
        }).then((res)=>{
            expect(res.status).to.eql(200)
            // cy.log(res.body)
            id = res.body.id;
            // var id = res
            cy.log(id)

        })
    });

    it('Delete a Board', () => {
        cy.request({
            method:"DELETE",
             url:`https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${Token}`,
             headers: {
                accept:"application/json" 
             }
         }).then((res)=>{
             expect(res.status).to.eql(200)
             cy.log(res.body)
            //  var res = JSON.stringify(res.body.id);
            //  var id = data.id;
            //  cy.log(id)
 
         })
    });

    it.skip('Updating The Board', () => {
        cy.request({
            method:"PUT",
             url:`https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${Token}&name=${NewName}&desc=${desc}`,
             headers: {
                accept:"application/json" 
             }
         }).then((res)=>{
             expect(res.status).to.eql(200)
            //  cy.log(res.body)
            //  var res = JSON.stringify(res.body.id);
            //  var id = data.id;
            //  cy.log(id)
 
         })
    });
});