import calcularCadena from "./sumarcadena.js";

describe("Calculadora de Cadena", () => {
  it("debería sumar los números en una cadena separada por comas", () => {
    expect(calcularCadena("1,2,3")).toEqual(6); 
  });
  it("debería sumar los números en una cadena con comas y guiones", () => {
    expect(calcularCadena("4-5-6")).toEqual(15); 
  });
  it("debería sumar los números en una cadena con delimitador personalizado *", () => {
    expect(calcularCadena("//[*] 2*3*4")).toEqual(9); 
  });
});
