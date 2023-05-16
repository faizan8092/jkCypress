

// var random_num = Math.floor(Math.random() * 9000) + 1000;
// var baseUrl = "https://simple-books-api.glitch.me"

// uri: https://simple-books-api.glitch.me
​
describe.skip("Books API", () => {
  var token;
  var baseUrl = "https://simple-books-api.glitch.me";
  var orderId;
  it("Authentication", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/api-clients/`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
      body: {
        clientName: "Md Faizan" + Math.random(),
        clientEmail: "ali.faizan" + Math.random() + "@gmail.com",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
​
      // let res = JSON.stringify(response.body);
      token = response.body.accessToken;
      cy.log(token);
    });
  });


  it("Order a book", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/orders`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: {
        bookId: 1,
        customerName: "Md Faizan",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
​
      // let res = JSON.stringify(response.body);
      // token = response.body.accessToken;
      orderId = response.body.orderId;
      // cy.log(res);
    });
  });


  it("Update an order", () => {
    cy.request({
      method: "PATCH",
      url: `${baseUrl}/orders/${orderId}`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: {
        customerName: "Sanjay",
      },
    }).then((response) => {
      expect(response.status).to.eql(204);
    });
  });


  it("Get an order", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/orders/${orderId}`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      let res = JSON.stringify(response.body);
      cy.log(res);
    });
  });

  // Deleting an Order
  
  it("Delete an order", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/orders/${orderId}`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(204);
      let res = JSON.stringify(response.body);
      cy.log(res);
    });
  });
});