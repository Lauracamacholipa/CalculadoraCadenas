describe("Sumador", () => {
    it("Muestra la suma de la cadena separada por comas ingresada por el usuario", () => {
      cy.visit("/");
      cy.get("#cadena").type("6,5,8");
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 19);
    });
  });