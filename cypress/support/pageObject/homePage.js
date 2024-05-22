class HomePage {
  getName() {
    return cy.get("input[name='name']:nth-child(2)");
  }

  getEmail() {
    return cy.get("input[name='email']");
  }

  getPassword() {
    return cy.get("input[type='password']");
  }

  getCheckbox() {
    return cy.get("input[type='checkbox']");
  }

  getGender() {
    return cy.get("select")
  }

  getEntrepreneur() {
    return cy.get("#inlineRadio2");
  }

  getDateOfBirth() {
    return cy.get("input[type='date']");
  }

  getSubmitButton() {
    return cy.get("input[type='submit']");
  }

  getSuccsessMessage() {
    return cy.get('strong');
  }

  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }

  getTwoWayDataBinding() {
    return cy.get("input[name='name']:nth-child(1)");
  }
}

export default HomePage;
