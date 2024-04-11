function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0; // Si no hay argumentos, retornar 0
  } else if (arguments.length === 1) {
    return arguments[0]; // Si se pasa un único argumento, retornarlo sin modificar
  } else {
    let producto = 1; // Inicializar el producto en 1

    // Iterar sobre todos los argumentos y multiplicarlos
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplicar el producto por el argumento actual
    }

    return producto; // Retornar el producto final
  }
  
}

module.exports = multiplicarArgumentos;
