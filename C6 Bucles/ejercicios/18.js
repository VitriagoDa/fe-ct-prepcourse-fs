function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  if(a === b){
    return a;
  }
  if(a < 0 || b < 0){
    return 0;
  }
  if(a > b){
    for (i = b; i <= a; i++){
        producto = producto * i;
     } return producto;
  }else if(b > a){
    for (i = a; i <= b; i++){
        producto = producto * i;
     } return producto;
  }
}

module.exports = productoEntreNúmeros;