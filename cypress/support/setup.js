
export const setupHomePage = function() {
  beforeEach(function () {
    // Load fixture data
    cy.fixture('dataFile').then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("url") + "/angularpractice/");
  });
  

};

export const setupOrderConfirmation = function() {
  beforeEach(function () {
    // Load fixture data
    cy.fixture('dataFile').then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("url") + "/angularpractice"+ "/shop/");
  });
  

};
