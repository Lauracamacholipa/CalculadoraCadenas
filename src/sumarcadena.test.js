import calcularCadena from "./sumarcadena.js";

describe("Calculadora de Cadena", () => {
  it("debería sumar los números en una cadena separada por comas", () => {
    expect(calcularCadena("1,2,3")).toEqual(6); 
  });
});
