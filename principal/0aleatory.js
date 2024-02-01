/* //acessar dinamicamente

const pessoa = {
    nome: 'paulin',
    idade: 97,
    city: 'cx dagua'
}

const propriedade = 'city';

console.log(pessoa[propriedade]);

//comando new, criar uma nova instância

//função construtora

const id = function (nome, idade){
    this.nome = nome,
    this.idade = idade
};

const pessoa1 = new id('Marcos Miller', '20');
const pessoa2 = new id('Pedrinha Morais', '37');

console.log(pessoa1);
console.log(pessoa2);
 */
//Arrays
/* 
const listCars =[
{
    marca: 'Fiat',
    modelo: 'Palio',
    km: 97451
},
{
    marca: 'Chevrolet',
    modelo: 'corsa',
    km: 245252
},
];
console.log(listCars);
console.log(listCars.length);

const result = listCars.filter(function(car) {
    return car.km <= 100.000;
});
console.log(result); */
//console.log(cars.push('fusca'));
//console.log(listCars);
//console.log(listCars.pop);
//console.log(listCars);

//Utilizando Class

/* class Car {
    constructor(marca, modelo, km) {
        this.marca = marca;
        this.modelo = modelo;
        this.km = km;
        this.ligado = false;
    }
    ligar() {  
        this.ligado = true;
        console.log('O carro: ' + this.marca + this.modelo + ' está ligado.');
    }
    desligar() {
        this.ligado = false;
        console.log('O carro: '+ this.marca + this.modelo + ' está desligado.');
    }

}

const Car1 = new Car("Fiat", "Palio");
const Car2 = new Car("Chevrolet", "S10");

Car1.ligar();
Car1.desligar();

Car2.ligar();
Car2.desligar(); */

/* class Book {
    constructor(titulo, autor, anoPublicacao, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.paginas = paginas;
    }   
}

let listaDeLivros = [];

function adicionarBook(titulo, autor, anoPublicacao, paginas){
    let novoLivro = new Book(titulo, autor, anoPublicacao, paginas);
    listaDeLivros.push(novoLivro);
}

adicionarBook('segredo do sucesso', 'marquin', 2025, 225);
adicionarBook('a casa caiu', 'joaquin', 1985, 264);

console.log(listaDeLivros); */

class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas || [0, 0, 0];
    }

    calcularMedia() {
        let soma = this.notas.reduce((total, nota) => total + nota, 0);
        let media = soma / this.notas.length;
        return media;
    }

    situacaoAluno() {
        let media = this.calcularMedia();
        if (media > 60) {
            console.log('O ' + this.nome + ' foi Aprovado!!');
        } else {
            console.log('O ' + this.nome + ' foi Reprovado!!');
        }
    }
}

const aluno = new Aluno('Marcos', 20, [20, 20, 30]);
aluno.situacaoAluno();
