import InventoryPage from "../support/pages/InventoryPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe("Checkout Flow", ()=> {
    let productData;

    before(()=>{
        cy.fixture('products').then((data) => {
            productData = data;
        });
    })

    beforeEach(()=>{
        cy.login("standard_user");
    })

    it("should complete checkout flow", () => {
        InventoryPage.visit();
        InventoryPage.addItemToCart(productData.backpack.id);
        InventoryPage.verifyButtonState(productData.backpack.id);

        CheckoutPage.navigateToCart();
        CheckoutPage.checkoutItems();
        CheckoutPage.verifySuccessMessage();
    })

    it("should complete checkout flow on mobile", () => {
        // For iPhone 12 and 13, the viewport size is 390px × 844px
        cy.viewport(390, 840);
        InventoryPage.visit();
        InventoryPage.addItemToCart(productData.backpack.id);
        InventoryPage.verifyButtonState(productData.backpack.id);

        CheckoutPage.navigateToCart();
        CheckoutPage.checkoutItems();
        CheckoutPage.verifySuccessMessage();
    })
})