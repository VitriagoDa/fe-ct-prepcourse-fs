function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let i = 1;
  let suma = 0;
  while(i <= n){
    suma = suma + i;
    i++;
  }return suma;
  
}

module.exports = sumarHastaN;
