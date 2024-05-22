/// <reference types="Cypress" />
import HomePage from "../../support/pageObject/homePage";
import { setupHomePage } from "../../support/setup"
describe("Order Placement - Test Suit", function () {
  setupHomePage();
  const homePage = new HomePage()

  it("case 1: Navigate To Url", function () {
    cy.url().should("include", "angularpractice");
  });

  it("case 2: Form Fill Up", function () {
    homePage.getName().type(this.data.name).should('have.value',this.data.name)
    homePage.getName().should('have.attr', 'minlength', '2')
    homePage.getEmail().type(this.data.email).should('have.value',this.data.email)
    homePage.getPassword().type(this.data.password).should('have.value',this.data.password)
    homePage.getCheckbox().check().should('be.checked')
    homePage.getGender().type(this.data.gernder).should('have.value',this.data.gernder)
    homePage.getEntrepreneur().check().should('be.checked')
    homePage.getDateOfBirth().type(this.data.dateOfBirth).should('have.value',this.data.dateOfBirth)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
  });

  it("case 3: Submit the Form", function () {
    homePage.getSubmitButton().click()
    homePage.getSuccsessMessage().should('contain', 'Success');
  });

});
