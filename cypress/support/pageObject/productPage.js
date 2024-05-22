class ProductPage {

  getShopTab() {
    return cy.get(".nav-link[href='/angularpractice/shop'");
  }

  getProductList() {
    return cy.get('.col-lg-3.col-md-6.mb-3');
  }

  getClickOnAddTo() {
    return cy.get('button.btn.btn-info');
  }

  getCheckOutButton()
{
    return cy.contains('Checkout');
}

}

export default ProductPage;
