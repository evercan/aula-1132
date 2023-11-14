// estrutura de controle para criar loops
// while e do..while

//while(condicao){
    // codigo a ser executado enquanto a condição for verdadeira
//}

// while
// valida antes execução
// verifica a condição antes de executar o bloco

/*
let i = 0
while(i <5){
    console.log(i);
    i++;
}
*/

// executa o bloco do codigo pelo menos 1 vez
// independente da condição ser verdadeira ou falsa
/*
do{
// codigo a ser executado
}while(condicao)
*/
/*
let i = 0
do {
    console.log(i);
    i++;
}while(i <5)
*/
/*
let numero;

do {
    numero= 50
} while(numero<=10) // se for verdadeiro

console.log("valor do numero: " +numero);
*/

let numero;

do {
    numero = Math.floor(Math.random()*100)
    console.log(numero)
    console.log(numero % 5 === 0)
} while(numero % 5 === 0)







