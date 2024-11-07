function calcularCadena(cadena) {
    const delimitadorMatch = cadena.match(/^\/\/\[(.*?)\]/);
    let resultado = 0;
    if (delimitadorMatch) {
        const delimitadores = delimitadorMatch[1].split('][').map(d => d.trim());
        const regexDelimitadores = new RegExp(`[${delimitadores.join('')}]`);
        cadena = cadena.slice(delimitadorMatch[0].length).trim();
        const numeros = cadena.split(regexDelimitadores).map(num => parseInt(num.trim(), 10));
        resultado = numeros.reduce((acc, num) => acc + num, 0);

    } else {
        const numeros = cadena.split(/[,|-]/).map(num => parseInt(num.trim(), 10));
        resultado = numeros.reduce((acc, num) => acc + num, 0);
    }
    return resultado;
  }
  
  export default calcularCadena;
  