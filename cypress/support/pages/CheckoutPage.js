import { faker } from "@faker-js/faker";
class CheckoutPage {
  navigateToCart() {
    cy.get('[data-test="shopping-cart-link"]').scrollIntoView().click();
    cy.get('[data-test="title"]').should("have.text", "Your Cart");
  }

  checkoutItems() {
    cy.get('[data-test="checkout"]').scrollIntoView().click();
    this.fillCustomerInformation();
    cy.get('[data-test="continue"]').scrollIntoView().click();
    cy.get('[data-test="finish"]').scrollIntoView().click();
  }

  verifySuccessMessage() {
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("have.text", "Thank you for your order!");
  }

  fillCustomerInformation() {
    cy.get('[data-test="firstName"]').type(faker.person.firstName());
    cy.get('[data-test="lastName"]').type(faker.person.lastName());
    cy.get('[data-test="postalCode"]').type(faker.location.zipCode());
  }
}
export default new CheckoutPage();
