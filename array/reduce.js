//calcular a média de cada sala de aula
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7,3.5,8,9.5]

//vamos criar uma função para calcular a média primeiramente
function calculaMedia(notasDaSala){
   const somaDasNotas = notasDaSala.reduce((acc, nota) => {
        return acc + nota;
    },0)
    console.log(somaDasNotas)
}

calculaMedia(salaJS)
