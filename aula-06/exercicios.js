// 1)Escreva um programa em JavaScript que imprima todos os números pares de 1 a 20.

for(let i = 2; i<=20; i+=2){
  //  console.log(i)
}

// 2)Crie uma função que calcule a média de um array de números.

function calculaMedia(arrayNumeros){
    if(arrayNumeros === 0){
        return "O array esta vazio"
    }
    let somaTotal = 0;

    for(let i = 0; i< arrayNumeros.length; i++){
        somaTotal += arrayNumeros[i]
    }
    let media = somaTotal / arrayNumeros.length;
    return media.toFixed(2);
}

function calculaMediaRed(arrayNumeros){
    if(arrayNumeros === 0){
        return "O array esta vazio"
    }
    let somaTotal = 0;
    const valorTotal = arrayNumeros.reduce((acumulador, valorCorrente) => acumulador + valorCorrente,somaTotal);
    let media = valorTotal / arrayNumeros.length;
    return media.toFixed(2);
}


//const arrayNumeros = [20,60,55,40]
//const resultado = calculaMediaRed(arrayNumeros);
//console.log(resultado);

// 3)Escreva um programa que, dada uma string, conte o número de vogais nela.

function contaVogais(texto){
    let textoNovo =  texto.toLowerCase();
    const vogais = "aeiouáéíóúàèìòùâêîôûãõ";
    let totalVogais = 0;
    for(let i=0; i < textoNovo.length; i++){
        if(vogais.includes(textoNovo[i])){
            totalVogais++;
        }
    }
    return totalVogais;
}

//const texto = "Javascript é uma linguagem";
//const resultado = contaVogais(texto);
//console.log(resultado);


// 4) Escreva um programa que use um laço for para imprimir os números de 1 a 100 
//no console, mas substitua os números divisíveis por 3 por "Fizz" 
// e os números divisíveis por 5 por "Buzz". 
// Para números divisíveis por ambos 3 e 5, exiba "FizzBuzz".

for (let i =1; i<=100; i++){
    let output = '';
    if(i % 3 ===0){
        output +='Fizz'
    }
    if(i % 5 ===0){
        output +='Buzz'
    }
  //  console.log(output || i);
}

// 5) Crie um array de objetos, onde cada objeto representa um aluno com 
// propriedades como nome e notas (um array de notas). 
// Use um laço for...of para iterar sobre o array de alunos e, para cada aluno,
// use um laço for para calcular a média de suas notas. 
// Exiba o nome do aluno e sua média no console.

const alunos = [
    { nome: 'João', notas: [70, 80, 90] },
    { nome: 'Maria', notas: [65, 57, 70] },
    { nome: 'Pedro', notas: [80, 90, 100] },
  ];

  for (const aluno of alunos){
    let nomeAluno = aluno.nome;
    let soma = 0;
    for(const nota of aluno.notas){
        soma += nota;
    }
    const media = soma / aluno.notas.length;
    //console.log(`O Aluno ${nomeAluno} tem media de ${media}`)
  }

//6) Percorrer uma string e contar a frequência de cada caractere, 
//ou seja quantas vezes cada um tem na string.
/*
console.timed("for-of");
const texto = "O meu texto de exemplo de contagem de caracter";
const obj = {};

for(let caracter of texto){
    if(caracter !== ' '){
        if(obj[caracter]){
            obj[caracter]++;
        }else{
            obj[caracter] = 1;
        }
    }   
}
//console.timeEnd("for-of");
*/
//7) Dado um array de arrays, encontrar a soma de todos os números contidos 
//nos arrays internos.
//const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function somarNumerosArray (array) {
  let soma = 0;
  for (let num of array){
    soma = soma + num;
  }
  return soma;
}

let somaTotal = 0;

//console.time('for-of')
for (let array of infoArray){
  let somaInterna = somarNumerosArray(array);
  somaTotal = somaTotal + somaInterna;
}
//console.timeEnd('for-of')

//console.log(somaTotal);


//8) Escreva um loop para calcular o fatorial de um número fornecido.

function calculaFatorial(numb){
    if(numb < 0){
        return "O fatorial não esta definido para numeros negativos"
    }
    let fatorial = 1;
    for (let i = 1; i <= numb; i++){
      fatorial *= i;
    }
    return fatorial;
  }
  
  let numeroFatorial = -4;
  let resultado = calculaFatorial(numeroFatorial);  
  console.log(resultado);