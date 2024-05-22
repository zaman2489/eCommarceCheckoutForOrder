/// <reference types="Cypress" />
import ProductPage from "../../support/pageObject/productPage";
import CheckoutPage from "../../support/pageObject/checkoutPage";
import { setupOrderConfirmation } from "../../support/setup"

describe("Order Placement - Test Suit", function () {
  const productPage = new ProductPage()
  const checkoutPage = new CheckoutPage()
  setupOrderConfirmation();

  it("case 1: Navigate To Url", function () {
    cy.url().should("include", "shop");
  });

  it("case 2: Navigate To Shop Page", function () {
    productPage.getShopTab().click()
  });

  it("case 3: Select Product and Checkout", function () {

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element)
    })

    productPage.getCheckOutButton().click()
    cy.verifyTotalPrice(checkoutPage);

  });

  it("case 4: Change Product and varify price in checkout and complete the order", function () {

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element)
    })

    productPage.getCheckOutButton().click()
    cy.verifyTotalPrice(checkoutPage);
    checkoutPage.getContinueShipping().click()

    this.data.updatedProductName.forEach(function (element) {
      cy.addNewProduct(element)
    })

    productPage.getCheckOutButton().click()
    cy.verifyTotalPrice(checkoutPage);
    checkoutPage.getClickOnCheckout().click()
    checkoutPage.getCuntryField().click().clear().type(this.data.search)
    cy.wait(6000)
    checkoutPage.getCuntrySuggession().each(($el, index, $list) => {
      const countryName = $el.text();
      if (countryName.includes(this.data.countryName)) {
        cy.wrap($el).click();
        expect(countryName).to.eql(this.data.countryName)
      }
    });
    checkoutPage.getClickOnCheckbox().check({force: true}).should('be.checked')
    checkoutPage.getClickOnSubmit().click()
    checkoutPage.getConfirmation().should('contain', 'Success')
  });
});
