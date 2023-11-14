var prompt = require('prompt-sync')();


//1) Escreva um loop while que imprima números de 1 a 5.
/*
let j = 1
while(j <=5){
    console.log(j);
    j++
}
*/
//2) Escreva um loop do...while que imprima os números pares de 2 a 10.

//let t = 2
//do {
//    console.log(t);
//    t+=2;
//}while(t <=10)

//3) Escreva um loop while que imprima os múltiplos de 3 de 3 a 30.
/*
let numero = 3
while (numero<=30){
    if(numero%3==0){
        console.log(numero)
    }
    numero++
}
*/

// 4) Escreva um loop do...while que peça ao usuário para digitar a senha "12345" e 
// continue pedindo até que a senha correta seja inserida.

/*
let senhaDigitada;
let senhaCorreta = "12345";

do {
    senhaDigitada = prompt('Digite a senha: ');
}while (senhaDigitada !== senhaCorreta)
console.log('Acesso permitido');
*/
/*
const senhaCorreta = "12345";
let arraySenhas = ["1234", "12345", "9092", "e343"];
let tentativas = 0;
let senhaUsuario;

do{
    senhaUsuario = arraySenhas[Math.floor(Math.random() * arraySenhas.length)]
    console.log("senha tentada:" +senhaUsuario);
    tentativas++;
}while(senhaUsuario !== senhaCorreta)

//console.log("Acertou depois de "+ tentativas + " tentantivas");
*/
// 5) Escreva um loop while que imprima a sequência Fibonacci 
//com os primeiros 10 números.
// 0,1,1,2,3,5,8,13,21,34
// Fn = Fn -1 + F-2
// Fn-1 é o termo anterior
// Fn-2 é o termo antes do anterior

let primeiroNumero = 0;
let segundoNumero = 1;
let contador = 1;
let sequencia = [];

while(contador <= 10){
    sequencia.push(primeiroNumero);
    let proNumero = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = proNumero;
    contador++;
}
console.log(sequencia);
