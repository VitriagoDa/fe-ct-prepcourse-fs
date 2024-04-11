function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let cadena = "";
  let j = palabras.length -1;
  for(let i = 0; i < palabras.length; i++){
    if(i === j){
      cadena = cadena + palabras[i]; 
      break;
    }
    cadena = cadena + palabras[i] + " ";
  }
  return cadena;
}

module.exports = dePalabrasAFrase;
