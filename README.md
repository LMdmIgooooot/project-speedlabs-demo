# Speedlabs Cypress Demonstration Sample
This repository contains an end-to-end test suite for the [Sauce Demo](https://www.saucedemo.com/) website, as part of the Project Speedlabs Challenge.

## Tech Stack
- Cypress v15.10
- Javascript
- Node.js 18.18.2
- GitHub Actions (CI/CD)

## Why Cypress?
- In-browser execution (fast and stable)  
Tests run inside the same browser event loop as the application, reducing flakiness caused by timing and synchronization issues.
- Native access to localStorage, cookies, and network control  
Cypress has features that makes it easy to inject authentication state, inspect client-side data, and control application behavior without relying on slow UI steps.
- Excellent fit for modern CI pipelines  
Cypress runs reliably in headless mode, integrates seamlessly with GitHub Actions, and provides built-in screenshots and videos for debugging.

## Why Use a Hybrid Approach?
### Advantages
- Improved testing times by skipping logging via UI.
- Tests are more focused (sticks to the checkout coverage).
- Reduced flakiness from the login page since it directs to the inventory page.
### Disadvantages
- We lose UI validation of Login.   

Even though we lose this on every test, we can specifically add coverage login tests to check it separately.

## Setup
### Prerequisites
* Node.js 18.18.2
* npm

### Clone this repository
Optional: Checkout to the branch you'd like to work on.  
```sh
git clone https://github.com/LMdmIgooooot/project-speedlabs-demo.git
```
### Install dependencies
```sh
npm install
```

## Testing
Run the whole test suite in headless mode
```sh
npx cypress run
```

Run the whole test suite in Open UI mode 
```sh
npx cypress open
```

Run a specific test file
```sh
npx cypress run --spec .\path\to\spec\file
# example: npx cypress run --spec .\cypress\e2e\checkout-flow.spec.js
```

## Notes
- For this demo, credentials and `baseUrl` are **hardcoded** for simplicity. In a real project, sensitive data should be managed via `.env` files or CI secrets, and loaded with a library like `dotenv`. This allows switching between dev/staging/production environments without changing code.
- This project uses the Page Object Model pattern for better maintainability and scalability. All page-specific logic and DOM selectors are separated into reusable classes under:
```sh
cypress/support/pages/
```