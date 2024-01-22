describe("Navigation to Main page", () => {

  let searchBox = 'input[name="username"]';
  let searchButton = 'button[name="search"]';

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(searchBox).as('searchBox');
    cy.get(searchButton).as('searchButton');
  });


  it("should have a search box with proper initial state and react to user input", () => {

    cy.get('@searchBox').should('be.empty');
    cy.get('@searchButton').should('be.disabled');
    
    cy.get('@searchBox').type("admin");
    cy.get('@searchButton').should('not.be.disabled');

    cy.get('@searchButton').click();
    cy.get('@searchBox').should('be.empty');
    cy.get('@searchButton').should('be.disabled');

  });

  it("should display correct title value after search", () => {
    cy.get('@searchBox').type("admin");
    cy.get('@searchButton').click();
    
    cy.get('[data-test-id="result"]')
      .invoke('text')
      .should('eq', 'Showing users for  admin :'); 
  });

  it('should display up to max 5 GitHub users and each user\'s info', () => {
    cy.get('@searchBox').type("admin");
    cy.get('@searchButton').click();

    cy.get('[data-test-id="loginName"]').should('have.length.at.most', 5);

    cy.get('[data-test-id="loginName"]').eq(1).click();
    cy.get('[data-test-id="repoName"]').should('exist');
    cy.get('[data-test-id="repoStars"]').should('exist');
  });

  });
  