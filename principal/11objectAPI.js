/* const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
});
console.log(javascript); */

const JavaScript = {
    name: 'javascript',
    year: '1995'
};

Object.preventExtensions(JavaScript);   //consigo alterar/deletar
console.log(JavaScript);
JavaScript.name = "ECMAScript";
JavaScript.author = "Cleitin;";
delete JavaScript.year;
console.log(JavaScript);
console.log("*********");
//
const isSealed = Object.isSealed(JavaScript);            //consigo alterar
JavaScript.name = "ECMAScript";
JavaScript.author = "Cleitin;";
delete JavaScript.year;
console.log(JavaScript);
console.log("*********");
//quanto mais a chuva cai
const isFrozen =  Object.isFrozen(JavaScript);            //n consigo alterar nada
JavaScript.name = "ECMAScript";
JavaScript.author = "Cleitin;";
delete JavaScript.year;
console.log(JavaScript);