//---------- Conversão Numérica------------

const numero = 15;
const numerostring = numero.toString();
console.log(numerostring);

//Transformando um INTEIRO para uma STRING

console.log(Number("10"));
console.log(Number("9.9"));
console.log(Number("0xFF"));
console.log(Number());

console.log(~~"10");

//Descobrindo o VALOR de um NUMERO na sua forma DECIMAL, HEXA...

console.log(((10).toString(10)));
console.log(((10).toString(2)));
console.log(((10).toString(16)));
console.log(((10).toString(8)));

//Leva uma STRING para um INTEIRO.

console.log(parseInt("10", 10));
console.log(parseInt("9.9", 10));

//Leva um Float para uma STRING. 

console.log(parseFloat("2.5", 2.2));

