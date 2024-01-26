//---- Exercício 1 ----

//create table author (id number, name string, age number, city string, state string, country string)

//Extraia o nome da tabela e armazene em uma variável chamada "tableName".
//Extraia as colunas da tabela e armazene em uma variável chamada "columns".
//Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.

const DataBaseError = (comando, message) => {
    this.comando = comando;
    this.message = message;
};

const database = {
    tables: {},
    comandoAnalisado: {},
    createTable(comando) {
        const regExp = /create table ([a-z]+) \((.+)\)/;
        this.comandoAnalisado = comando.match(regExp);
        const tableName = this.comandoAnalisado[1];
        this.tables[tableName] = {
            colunas: {},
            data: []
        };
        const columns = this.comandoAnalisado[2].split(", ");
        for (let column of columns) {
            column = column.trim().split(" ");
            const name = column[0];
            const type = column[1];
            this.tables[tableName].colunas[name] = type;
        }
        },
        execute(comando){
            if(comando.startsWith("create table")) {
                return this.craateTable(comando);
            }
        const message = `Syntax erro "${comando}"`;
        throw new DataBaseError(comando, message);
    }
};

const comando = "create table author (id number, name string, age number, city string, state string, country string)";
database.createTable(comando);

try {
    //database.execute("select id, name from author");
    console.log("Comando em Análise: " + JSON.stringify(database.comandoAnalisado));
    console.log("************");
    console.log("Nome da tabela: " + database.comandoAnalisado[1]);
    console.log("************");
    console.log("Colunas do comando: " + database.comandoAnalisado[2]);
    console.log("************");
    console.log("Colunas do objeto database: " + JSON.stringify(database.tables.author.colunas, undefined, 2));
} catch (e) {
    console.log(e.message);
}
