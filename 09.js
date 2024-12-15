function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  if (valor === null || valor === undefined){
    return true;
   } else {
    return false;

  }
}

console.log(esNuloOIndefinido(null));
console.log(esNuloOIndefinido(undefined));
console.log(esNuloOIndefinido(42));
console.log(esNuloOIndefinido("texto"));



module.exports = esNuloOIndefinido;