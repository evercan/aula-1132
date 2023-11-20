// Funções e Assinaturas
// reutilização de codigo


// Assinatura da Função
// nomeDaFuncao (parametroTipo1, parametroTipo2, paramentro-tipo) -> RetornoTipo

// soma(number,number) -> number

function soma(a,b){
    return a+b;
}

const substitui = function(a,b){
    return a-b;
}

const dividi = (a,b) => {
    return a /b
}

// Parametros nomeados
// Uso objetos para passar parametros com nomes especificos

function saudacao({nome,saudacao, idade}){
    return `${saudacao} ${nome} ${idade} `
}

const mensagem1 = saudacao({nome:"Everton", saudacao: "Ola", idade:41})
//console.log(mensagem1);


function saudacao2(pessoa){
    return `${pessoa.saudacao} ${pessoa.nome} `
}

const pessoa = {nome:"Everton", saudacao: "Ola", idade:41}

const mensagem2 = saudacao2(pessoa);
//console.log(mensagem2);

// Composição e Encadeamento
// Composicao de funções - envolve a criação de novas funções combinando
// varias funcoes existentes
// Encadeamento - é a pratica de chamar varias funcoes em sequencia

const numeros = [1,2,3,4,5]
console.time('for')
const resultado = numeros
.filter(numero => numero % 2 ===0) // Filtrar os numeros pares
.map(numero => numero *2) // Dobrando os numeros pares
.reduce((soma, numero) => soma + numero,0) // Soma todos os numeros
console.timeEnd('for')
console.log(resultado)