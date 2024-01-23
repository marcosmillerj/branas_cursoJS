const book1 = {
    title: "A arte da guerra.",
    author: "nao lembro",
    pages: "125",

};

console.log(book1)

const keys1 = "titlte";
const keys2 = "author";
const keys3 = "pages";
const keys4 = "language";
const keys5 = "available";
const book2 = {};
book2[keys1] = 'o menino do pijana listrado'
book2[keys2] = 'capitao america'
book2[keys3] = '241'
book2[keys4] = 'portugueise'
book2[keys5] = 'true'
console.log(book2);

const book3 = {};
for(let key in book1){
    book3[key] = book1[key];
}

console.log(book3);