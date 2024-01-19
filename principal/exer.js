//---- Exercício 1 ----

//create table author (id number, name string, age number, city string, state string, country string)

//Extraia o nome da tabela e armazene em uma variável chamada "tableName".
//Extraia as colunas da tabela e armazene em uma variável chamada "columns".
//Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.

/* const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns = columns.split(", ");
console.log(tableName);
console.log(columns); */

const comando = "create table author (id number, name string, age number, city string, state string, country string)";

let regExp = /create table ([a-z]+) \((.+)\)/;
let comandoAnalisado = comando.match(regExp);
let colunas = comandoAnalisado[2];
colunas = colunas.split(", ");

console.log("Comando em Análise: " + comandoAnalisado[0]);
console.log("************");
console.log("Nome do autor: " + comandoAnalisado[1]);
console.log("************");
console.log("Colunas do comando: " + comandoAnalisado[2]);
console.log("************");
console.log(colunas);
