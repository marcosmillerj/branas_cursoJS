/* const book1 = {
    title: "Abobrinha",
    author: "zé estev",
    //__proto__: functionalLanguage
};

const book2 = {
    title: "Abobrinha",
    author: "zé estevao",
    //__proto__: functionalLanguage
};

let equal = true;

for(let key in book1){
    if (book1[key] !== book2[key]) equal = false;
}

for(let key in book2){
    if (book1[key] !== book2[key]) equal = false;
}


console.log(equal); */

const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";
const scheme = Object.create(functionalLanguage);
scheme.name = "scheme";
scheme.year = 1975;
const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "00";
console.log(javascript);
console.log(javascript.paradigm);
console.log(javascript.__proto__.paradigm);
console.log(Object.getPrototypeOf(javascript).paradigm);
