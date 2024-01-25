
console.log(1 == 2);
console.log(10 === 10);
console.log(typeof(true));
console.log();

function GenerateSerial(max) {
    if (max === undefined){
        max = 1000;
    }
    return Math.floor(Math.random() * (max + 1));
}


console.log(GenerateSerial(1000));
console.log(GenerateSerial(100));
console.log(GenerateSerial(10));
console.log(GenerateSerial());

console.log("************");

function Generate(max) {
    if (!max){
        max = 1000;
    }
    return Math.floor(Math.random() * (max + 1));
}

console.log(Generate(1000));
console.log(Generate(100));
console.log(Generate(10));
console.log(Generate());

console.log("************");

let valor = "texto";
if (valor) {
    // Este bloco será executado, pois a string "texto" é avaliada como true em um contexto booleano
}

let idade = 20;
let msg = (idade >= 18) ? "é maior" : "é menor";
console.log(msg);

let id = 15;
let mensagem;
if(id >= 18){
    mensagem = "maior de idade";} else{
        mensagem = "é menor de Idade";
    }
console.log(mensagem);





