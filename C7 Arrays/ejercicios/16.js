function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let arrayNuevo =[];
  for(let i = 0; i < array.length; i++){
    arrayNuevo.push(array[i] * i);
  }
  return arrayNuevo;
}

module.exports = multiplicarElementosPorIndice;
