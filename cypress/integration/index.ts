context("Sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("works", () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq("http://localhost:3000/login");
      expect(location.host).to.eq("localhost:3000");
      expect(location.pathname).to.eq("/login");
      expect(location.port).to.eq("3000");
      expect(location.protocol).to.eq("http:");
    });
  });

  it("cy.url() - get the current URL", () => {
    cy.url().should("eq", "http://localhost:3000/login");
  });
});
