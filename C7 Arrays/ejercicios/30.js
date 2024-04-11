function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  let elementosRepetidos = {};

  for (let i = 0; i < numeros.length; i++) {
    if (elementosRepetidos[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      elementosRepetidos[numeros[i]] = true;
    }
  }

  return undefined;
}

module.exports = encontrarElementoRepetido;