//Tipos de variáveis em JavaScript

var conta_agua = 40;
let conta_luz = 100;
const conta_net = 70;

//().tofixed() usado para acertar casas pós vírgula.
console.log((1125.4).toFixed(3));
console.log((254.1).toFixed(5));

//().toexponencial() usado para descrever o numero emm sua forma exponncial.
console.log((2).toExponential(2));

//().toprecision() usado para poder ajustar quantos dígitos terá o número.
console.log((12).toPrecision(4));


/*
Operadores numéricos -- Operadores convencionais: +  - * / %
Operadores de Atribuição
+= -- 
+- -- 
*= --
/= --
%= --

Operadores de Incremento ++ / --
Depende de colocado antes/depois da variável.

result++;
++result;

*/

//Exemplos

console.log("---- Exemplos ----");

console.log((conta_net).toPrecision(4));

console.log("O valor da conta de água e luz é: " + (conta_agua + conta_luz));

console.log((4 | 3).toString(2).padStart(32, '0'));
/*
No contexto específico da expressão que você mencionou: (4 | 3).toString(2).padStart(32, '0'):

---(4 | 3): Realiza a operação de bit a bit "OR" entre 4 e 3. O resultado é 7 (binário: 111).

---.toString(2): Converte o número 7 para sua representação binária como uma string. O argumento 2 indica que a conversão deve ser feita para base 2 (binária).

---.padStart(32, '0'): Adiciona zeros à esquerda à string binária para garantir que ela tenha exatamente 32 dígitos. O primeiro argumento 32 especifica o comprimento desejado, e o segundo argumento '0' indica que zeros devem ser usados para preenchimento.

Então, a combinação dessas operações cria uma string binária de 32 dígitos a partir do resultado da operação "OR" entre 4 e 3.
*/

