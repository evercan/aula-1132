//1)
//Crie uma variável booleano e atribua a ela o valor true. 
//Em seguida, crie uma variável numero e atribua a ela o valor 1. 
//Converta a variável booleano em um número inteiro e some com a variável numero. 
//Qual é o resultado final?

var minhaVariavel = true
var meuValor = 1
var resultado = Number(minhaVariavel) + meuValor

//console.log(resultado);

//2) Crie uma variável numero e atribua a ela um número inteiro. 
//Em seguida, crie uma variável texto e atribua a ela uma string com o valor "123". 
//Converta a variável texto em um número inteiro e armazene o resultado na 
//variável numero.

let numero = 5;
let texto = "123";
numero = parseInt(texto);
//console.log(numero);

//3)
//Crie uma constante chamada PI e atribua a ela o valor de π (aproximadamente 3.14159). 
//Em seguida, crie uma variável chamada raio e calcule a área de um círculo com base no valor de PI e raio.
/*
const PI = 3.14159;
var raio = 10;
var circulo = PI * (raio ** 2);
// var circulo = PI * (raio * raio);
 console.log(circulo);
*/

const pi = 3.14159
var raio = 10
var area = pi * Math.pow(raio,2)
//console.log(area)

//4)
//Crie duas variáveis, numero1 e numero2, e atribua valores a elas. 
//Em seguida, realize as quatro operações aritméticas básicas (+, -, *, /) 
//com essas variáveis e exiba os resultados.
var numero1 = 50
var numero2 = 40

var somaTotal = numero1 + numero2
var subtraiTotal = numero1 - numero2
var multiTotal = numero1 * numero2
var divideTotal = numero1 / numero2
var resultado = `Soma dos numeros é ${somaTotal},
Subtração dos numeros é ${subtraiTotal},
Multiplicação dos numeros é ${multiTotal} e
Divisão dos numeros é ${divideTotal}
                `
console.log(resultado);

