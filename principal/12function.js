const soma = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
}

const multi = function(a = 3, b = 2) {
    return a * b;
}

const calculator = function(fn){
    return function (a, b){
        return fn(a, b);
    };
};

const sum = function(){
    let total = 0;
    for( let argument in arguments){
        total += arguments[argument];
    };
    return total;
}; 
console.log(calculator(soma)(3,3));
console.log(calculator(sub)(5,3));
console.log(calculator(multi)(null, 3));
console.log(calculator(multi)(undefined, 3));
console.log(sum(1, 2, 3, 4));

console.log("**********");
console.log("**********");
console.log("**********");





const rectangle = {
    x: 10,
    y: 2,
    get area(){
        return this.x * this.y;
    }
}

console.log(rectangle.area); 