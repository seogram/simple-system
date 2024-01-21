describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    cy.get('input[name="username"]').type("admin");
    cy.get('button[name="search"]').click();

    cy.wait(1000);

    cy.get('[data-test-id="result"]').then($value => {
        const textValue = $value.text();
        cy.wrap(textValue).as('titleValue')
    });

    it("Should display correct titleValue ", function () {
         this.titleValue === "Showing users for admin :"
    });

    cy.get('[data-test-id="loginName"]').should('have.length', 5);

    cy.get('[data-test-id="loginName"]').eq(1).click();

    cy.get('[data-test-id="repoName"]').should('exist');

    cy.get('[data-test-id="repoStars"]').should('exist');

    cy.get('[data-test-id="repoStars"]').should('exist');

  });
});
