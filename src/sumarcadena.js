function calcularCadena(cadena) {
    const numeros = cadena.split(',').map(num => parseInt(num.trim(), 10));
    const resultado = numeros.reduce((acc, num) => acc + num, 0);
  
    return resultado;
  }
  
  export default calcularCadena;
  