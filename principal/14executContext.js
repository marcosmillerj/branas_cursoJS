/* const v1 = 10;
const fn1 = function(){
    const v1 = 100;
    const fn2 = function(){
        const v1 = 1000;
        console.log(v1);
        const v2 = 10000;
        console.log(v2);
    };
    fn2();

const fn3 = function(v1){
    return v1;
};
};

const obj1 = fn3(); */

//acessar dinamicamente

const pessoa = {
    nome: 'paulin',
    idade: 97,
    city: 'cx dagua'
}

const propriedade = 'city';

console.log(pessoa[propriedade]);