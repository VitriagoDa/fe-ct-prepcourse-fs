function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let pares = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      let par = array[i];
      pares.push(par);
    }
  }
  return pares;
}

module.exports = filtrarNumerosPares;
