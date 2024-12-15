function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  

  // Logica destinada para evaluar si realmente es un numero el argumento que nos pasan
  if(typeof (numero) !== "number"){
    console.log("no es un numero");
    return false;
  }

  // Logica destinada para evaluar si el numero es entero o decimal
  // Math.floor() -> Metodo que redondea hacia abajo un numero decimal. 
  //                 Ej: Math.floor(2.4) -> 2
  //  5  =   5 
  if (numero == Math.floor(numero)){
    // Si es true, el numero original es entero
    console.log("CONSOLE LOG: El numero original es entero");
    return true;
  } else {
    // Si es falso, el numero original es decimal
    console.log("CONSOLE LOG: El numero original es decimal");
    return false;
  }
}

esNumeroEntero(1323.123123)

module.exports = esNumeroEntero;