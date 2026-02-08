Cypress.Commands.add("login", (username) => {
   cy.session(username, () => {
    cy.setCookie('session-username', username);
  })
});