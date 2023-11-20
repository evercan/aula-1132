// Tratamento do erro
// try / catch / finally
/*
try {
    // Codigo que pode lançar exceções
} catch(error){
    // Trata a exeção
} // bloco opcional
finally {
    // Codigo a ser executado independente das excecoes
} 
*/
function soma(a,b){
    return a+b;
}

    const prompt = require('prompt-sync')();
    const valorDigitado1 = parseInt(prompt("Digite o primeiro numero: "));
    const valorDigitado2 = parseInt(prompt("Digite o segundo numero: "));

try {
   // const result = 10/2;   
    const somaTotal = soma(valorDigitado1,valorDigitado2);
     if(isNaN(somaTotal)){
         throw new Error("Valor indevido para execução")
     }
    console.log(somaTotal);
}catch (e){
    console.error({"name": e.name, 
                "mensagem": e.message, 
                "data": Date(),
            "nome-arquivo": "tratamento-erros.js"})
}finally{
    console.log("este bloco vai ser sempre executado")
}
