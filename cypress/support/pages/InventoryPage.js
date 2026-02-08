class InventoryPage {
  visit() {
    cy.visit("/inventory.html", { failOnStatusCode: false });
  }

  addItemToCart(itemName) {
    cy.get(`[data-test="add-to-cart-${itemName}"]`).click();
  }

  verifyButtonState(itemName) {
    cy.get(`[data-test="remove-${itemName}"]`)
      .should("have.text", "Remove")
      .should("have.css", "color", "rgb(226, 35, 26)");
  }
}
export default new InventoryPage();
