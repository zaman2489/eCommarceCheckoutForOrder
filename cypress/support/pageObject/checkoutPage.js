class CheckoutPage {

  getItemPrice() {
    return cy.get('tr td:nth-child(4) strong');
  }

  getTotalPrice() {
    return cy.get('tr td:nth-child(5) strong');
  }

  getContinueShipping() {
    return cy.get('tr td:nth-child(4) button');
  }

  getClickOnCheckout() {
    return cy.get('tr td:nth-child(5) .btn.btn-success');
  }

  getCuntryField() {
    return cy.get('#country');
  }

  getCuntrySuggession() {
    return cy.get('.suggestions ul li a');
  }

  getClickOnCheckbox() {
    return cy.get('input#checkbox2');
  }

  getClickOnSubmit() {
    return cy.get('input[type="submit"]');
  }

  getConfirmation() {
    return cy.get('div strong');
  }

}

export default CheckoutPage;
