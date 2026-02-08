# Checkout Flow – Test Plan

## Objective
Validate that a logged-in user can successfully complete the checkout flow
from inventory to order confirmation.

## Within Scope
- Access to inventory pages
- Put the item in your cart.
- Submission of checkout details
- Verification of order completion
- UI state changes (color and text of buttons)
- Mobile viewport responsiveness

## Out of Scope
- Integrations with payment gateways
- Validation of backend order processing
- Visual regression across different browsers

## Test Types
- End-to-End (happy path)
- UI state validation
- Responsive validation
- Network resilience (optional)

## Test Data
- User: standard_user
- Product: Sauce Labs Backpack
- Checkout Info: Data from Faker Library

## Entry Criteria
- Application is accessible
- Test user is valid
- Inventory page is reachable

## Exit Criteria
- Order confirmation message is displayed
- No critical UI or functional failures