function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let num = 0;
  let suma = 0;
  for(let i = 0; i < arrayOfNums.length; i++){
    num = arrayOfNums[i] + num;
    suma = num;
  }
  return suma;
}

module.exports = agregarNumeros;
