// Objetos
// chave : valor
 // key: value

 let pessoa = {
    nome: "Everton",
    idade: 41,
    torcida: "Internacional",
    altura: 1.78,
    endereco: {
        rua: "Rua Henrique",
        cidade: "Joinville",
        estado: "SC"
    } 
 }
 
 // pego as chaves do objeto
 let chaves = Object.keys(pessoa.endereco);
 //console.log(chaves);

// pega os valores do objeto
 let valores = Object.values(pessoa.endereco)
 //console.log(valores);

 // sem as chaves fazer uma copia do objeto;
let pessoa_dois = {...pessoa};

pessoa_dois.nome = "João"
pessoa_dois.torcida = "Fluminense"
pessoa_dois.endereco.rua = "São Francisco"
pessoa_dois.idade = 25;
//console.log(pessoa_dois);

// forma de verificação se chaves existem
//console.log('nome' in pessoa); // valor booleano
//console.log(pessoa.hasOwnProperty("torcidas")); // valor booleano

// percorrer o dicionario do objeto
for (let key in pessoa){
   // console.log("key: " + pessoa[key])
}

// Objetos em JS são identificados ao JSON
/*{
    "nome-da-pessoa" : "Everton",
    "idade" : 41
}
*/

// retorna um array de pares chave-valor para todas propriedades

let pessoa1 = {
    nome: "Everton",
    idade: 41,
    torcida: "Internacional",
    altura: 1.78,
    endereco: {
        rua: "Rua Henrique",
        cidade: "Joinville",
        estado: "SC"
    } 
 }


 const pares = Object.entries(pessoa1);

 //console.log(pares);

 // contagem de numero de propriedades chaves no Objeto

 //console.log(Object.keys(pessoa1).length);


 var frutas = {
    1: "banana",
    2: 'maça',
    3: "mamão"
 }

 console.log(frutas."1");
 