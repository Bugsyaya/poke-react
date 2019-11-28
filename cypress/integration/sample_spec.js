describe("The Home Page", () => {
  it("successfully loads", () => cy.visit("http://localhost:3000"));
  it("previous button should be disabled", function() {
    cy.contains("previous").should("be.disabled");
  });
  it("previous button should be enaabled", () => {
    cy.contains("next").click();
    cy.contains("previous").should("not.be.disabled");
  });
  it("should display all pokemons", () => {
    cy.get("a")
      .its("length")
      .should("not.eq", 0);
  });
});

describe("The pokemon infos page", () => {
  it("successfully loads", () => cy.visit("http://localhost:3000"));
  it("should navigate to pokemon infos page", () => {
    cy.get("a")
      .eq(0)
      .click();
  });
  it("should download pokemon pdf", () => {
    cy.contains("Download PDF").click();
  });
});

describe("Watch ", () => {
  it("successfully loads", () => cy.visit("http://localhost:3000"));
  it("should display pokemons based on type given ", () => {
    cy.get("input").type("bug");
    //wait 500 to fetch request ends
    //TODO : find another way to wait for request to end
    cy.wait(800);
    cy.get("a")
      .its("length")
      .should("eq", 86);
  });
});
