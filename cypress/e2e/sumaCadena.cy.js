describe("Sumador", () => {
    it("Muestra la suma de la cadena separada por comas ingresada por el usuario", () => {
      cy.visit("/");
      cy.get("#cadena").type("6,5,8");
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 19);
    });
    it("Muestra la suma de la cadena separada por guiones ingresada por el usuario", () => {
        cy.visit("/");
        cy.get("#cadena").type("1-2,3");
        cy.get("#calculadora-button").click();
        cy.get("#resultado-div").should("contain", 6);
    });
    it("Muestra la suma de la cadena por los separadores personalizados ingresada por el usuario", () => {
        cy.visit("/");
        cy.get("#cadena").type("//[;] 6;7;4");
        cy.get("#calculadora-button").click();
        cy.get("#resultado-div").should("contain", 17);
    });
  });