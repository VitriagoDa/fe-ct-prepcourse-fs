function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let notas = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    notas += resultadosTest[i]; 
  }
  let promedio = notas / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
