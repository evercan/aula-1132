// funcao - conjunto de codigo que executa e retorna algo

function soma (valorA, valorB){
    let resultado = valorA + valorB
   return resultado
}

// invocar - chamar a funcao
let numero1 = 40
let numero2 = 50
let somaTotal = soma(numero1,numero2)

const subtracao = function (valorA, valorB){
    let resultado = valorA - valorB
   return resultado
}

let numero3 = 140
let numero4 = 50
let subTotal = subtracao(numero3,numero4)

//console.log(subTotal);

const dividir = (valorC,valorD) => valorC / valorD

let numero5 = 140
let numero6 = 50
let divTotal = dividir(numero5,numero6)


const multiplica = (valorC,valorD) => {
    let resultado = valorC * valorD
   return resultado
} 

let numero7 = 140
let numero8 = 50
let mulTotal = multiplica(numero5,numero6)

//console.log(mulTotal);

const curry = (a) => {
    console.log('valor a' +a)
    return (b) => {
        console.log(' valor b' + b);
        return (c) => {
            return a+b+c
        }
    }
}

let total = curry(10)(40)(80)
console.log(total)