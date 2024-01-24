

/*
Crie um Objeto Estudante:

Crie um objeto chamado estudante com as seguintes propriedades: nome, idade, e notas (um array vazio para armazenar notas).

Adicione Propriedades:
Adicione uma propriedade chamada disciplinas ao objeto estudante. Esta propriedade deve ser um array que armazenará objetos representando disciplinas e suas respectivas notas.

Crie uma Função para Calcular a Média:
Crie uma função chamada calcularMedia que aceita o objeto estudante como parâmetro.
A função deve calcular a média das notas do estudante em todas as disciplinas.

Adicione uma Função para Adicionar Notas:
Adicione uma função chamada adicionarNota que aceita o objeto estudante, o nome da disciplina e a nota como parâmetros.
A função deve adicionar uma nova disciplina com a nota ao array de disciplinas.

Adicione uma Função para Verificar Aprovação:
Adicione uma função chamada verificarAprovacao que aceita o objeto estudante como parâmetro.
A função deve verificar se a média do estudante é maior ou igual a 7 e imprimir uma mensagem indicando se ele foi aprovado ou não. 
*/

const student = {
    nome: "serjao berranteiro",
    idade: 34,
    notas: {},
    disciplinas: {
        disciplina1: {
            prova1: 25,
            prova2: 15,
            prova3: 30
        },
        disciplina2: {
            prova1: 10,
            prova2: 30,
            prova3: 15
        },
    }
}

function calcularNotaFinal(disciplina) {
    const { prova1, prova2, prova3 } = disciplina;
    const notaFinal = prova1 + prova2 + prova3;
    return notaFinal;
}

function verificarAprovacao(notaFinal) {
    if (notaFinal >= 60) {
        return "Aprovado!!";
    } else {
        return "Reprovado";
    }
}

const notaFinalDisciplina1 = calcularNotaFinal(student.disciplinas.disciplina1);
const notaFinalDisciplina2 = calcularNotaFinal(student.disciplinas.disciplina2);

const situacaoDisciplina1 = verificarAprovacao(notaFinalDisciplina1);
const situacaoDisciplina2 = verificarAprovacao(notaFinalDisciplina2);

console.log(student);
console.log("Situação Disciplina1: " + situacaoDisciplina1);
console.log("Situação Disciplina2: " + situacaoDisciplina2);
