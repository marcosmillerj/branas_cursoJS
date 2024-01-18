/*
Exercício: Calculando o Preço Total com Descontos

1 - Defina uma variável chamada precoItem e atribua um valor numérico a ela (representando o preço de um item no carrinho).

2 - Insira a quantidade desse item no carrinho.

3 - Armazene a entrada do usuário em uma variável chamada quantidade.

4 - Calcule o preço total sem desconto multiplicando o preço do item pela quantidade.

5 - Crie uma variável chamada desconto e atribua um valor de desconto (por exemplo, 0.1 para 10%).

6 - Calcule o preço total com desconto aplicando o desconto ao preço total sem desconto.

7 - Imprima no console uma mensagem indicando o preço do item, a quantidade, o desconto aplicado e o preço total com desconto.

nivel 2:

8 - Adicione mais de um tipo de produto.

nivel 1.
*/

let produto1 = 20.00;
let quantidadeItem1 = 5;
let valorTotal = produto1 * quantidadeItem1;
let desconto = 0.1 * 100;
let valorComDesconto = valorTotal - desconto;

console.log("-----Lista de Compras-----");
console.log("- Você está comprando uma quantidade de ", quantidadeItem1, " o produto1");
console.log("- O valor Total desse item é: ", valorTotal);
console.log("- Encontramos um cumpom de 10% de desconto para você!!");
console.log("- O valor final com desconto aplicado ficará: ", valorTotal - desconto);

/*
Nível 2.
*/

let listaDeProdutosHigiene = [
    'sabonete',
    'escova',
    'shampoo',
    'condicionador'
];

let listaDefrios = [
    'salaminho',
    'picanha',
    'asinha',
    'filé de frango'
];

console.log(listaDeProdutosHigiene);
console.log(listaDefrios);

