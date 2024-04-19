function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let sumaNumeros = 0;
   for(let i = 0; i < arrayOfNumbers.length; i ++){
      sumaNumeros = sumaNumeros + arrayOfNumbers[i];
   }
   cb(sumaNumeros);
}

module.exports = sumarArray;
