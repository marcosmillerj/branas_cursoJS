const soma = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a * b;
}

const calculator = function(fn){
    return function (a, b){
        return fn(a, b);
    };
};

console.log(calculator(soma)(3,3));