function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let segundoArray = [];
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === "number"){
      let num = array[i] * 2;
      segundoArray.push(num);
    }
  }
  return segundoArray;
}

module.exports = duplicarElementos;
