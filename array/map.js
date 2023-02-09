const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => {
   return nota + 1 >= 10 ? 10 : nota + 1 // OPERADOR TERNÁRIO = Se nota + 1 for maior igual a 10 ? retorna 10 : do contrário retorna nota + 1.
   return nota + 1
}) 


console.log(notasAtualizadas)