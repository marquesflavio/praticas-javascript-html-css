const alunos = ['Flávio', 'Diego', 'Gabi']
const notas = [10,9,8]

const listaAlunosENotas = [alunos,notas]

//verificar se o aluno ditado está na lista. Para isso criei uma função como parâmetro aluno, o qual terá o nome ditado.
function mostraNomeENota(aluno){
    if(listaAlunosENotas[0].includes(aluno)){ //se o array[0] do array listaAlunosENotas incluir o aluno...
        console.log(`${aluno} está cadastrado(a)!`)

        const indice = listaAlunosENotas[0].indexOf(aluno) //retorna o índice do aluno no array[0] do array listaAlunosENotas 
        console.log(`Seu índice é o: ${indice}`)

    } else{
        console.log(`${aluno} não está cadastrado!`)
    }
} mostraNomeENota('Gabi')