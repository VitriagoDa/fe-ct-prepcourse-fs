function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  const isStringArray = array.every(item => typeof item === 'string');
  if (isStringArray) {
    return array.sort();
  } else {
    return array.sort((a, b) => a - b);
  }
}

module.exports = ordenarArray;
