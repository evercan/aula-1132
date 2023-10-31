// tipos de variaveis

// string
let nome = "Everton"

// booleano
let valor = false

//numerico
let numero = 1
let numero3= 1.50


// (escopo global) - escopo fora do bloco
var numero1= 10
let numero2 = 20

var numero1 = 30

// escopo local - escopo restrito ao bloco
{
    let numero2 = 30
    var numero1 = 20
    console.log(numero2);
}

console.log(numero2);

//const - não permitido reatribuição e nem redeclaração
const PI = 3.14
let somaComPI = 45 * 3.14
