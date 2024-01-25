const soma = function(a, b){
    return a+b;
};

const sub = function(a, b){
    return a-b;
};

const calcular = function(fn){
    return function(a, b){
        return fn(a, b);
    };
};

console.log(calcular(soma)(4,3));
console.log(calcular(sub)(10,3));

//esse bloco de código acima é === o de baixo;

//a função pode ser criada dessas trẽs maneiras;

const somaa = (c, d) => {
    return c+d;
};

const subb = (c, d) => c-d;

const calc = function(operacao){
    return function(c, d){
        return operacao(c, d);
    };
};

console.log(calc(somaa)(5, 8));
console.log(calc(subb)(5, 8));