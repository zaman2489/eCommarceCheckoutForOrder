// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import ProductPage from "./pageObject/productPage"
import CheckoutPage from "./pageObject/checkoutPage"

const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()

// Select product (Initially)
Cypress.Commands.add("selectProduct", (productName) => {
  productPage.getProductList().each(($el, index, list) => {
    if ($el.text().includes(productName)) {
      //cy.wrap($el).find('button.btn.btn-info').click()
      productPage.getClickOnAddTo().eq(index).click()
    }
  })
})

// Select product (Add More product in card)
Cypress.Commands.add("addNewProduct", (updatedProductName) => {
  productPage.getProductList().each(($el, index, list) => {
    if ($el.text().includes(updatedProductName)) {
      //cy.wrap($el).find('button.btn.btn-info').click()
      productPage.getClickOnAddTo().eq(index).click()
    }
  })
})


// validate checkout Page
Cypress.Commands.add('verifyTotalPrice', (checkoutPage) => {
  let sum = 0;

  // Calculate the sum of item prices
  checkoutPage.getItemPrice().each(($el) => {
    const amount = $el.text();
    let price = amount.split(" ");
    price = price[1].trim();
    sum = Number(sum) + Number(price);
  }).then(() => {
    cy.log(sum);
  });

  // Compare the sum with the total price
  checkoutPage.getTotalPrice().then((element) => {
    const amount = element.text();
    let res = amount.split(" ");
    let total = res[1].trim();
    expect(Number(total)).to.equal(sum);
  });
});



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })