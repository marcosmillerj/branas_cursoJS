//acessar dinamicamente

const pessoa = {
    nome: 'paulin',
    idade: 97,
    city: 'cx dagua'
}

const propriedade = 'city';

console.log(pessoa[propriedade]);

//comando new, criar uma nova instância

//função construtora

const id = (nome, idade) => {
    this.nome = nome,
    this.idade = idade
};

const pessoa1 = new id('Marcos Miller', '20');
const pessoa2 = new id('Pedrinha Morais', '37');

console.log(pessoa1);
console.log(pessoa2);

