// Truthy - são tratados como verdadeiros quando em contexto booleano
// Falsy  - são tratados como falsos

// Valores não vazios em geral são verdadeiros

// string
// if("Ola Mundo"){
//     console.log("Truthy - verdadeiro")
// }else{
//     console.log("False - false")
// }

// valores numericos
// valores maiores ou menores que zero
//  true = 1
// false = 0 
// if(42){
//     console.log("Truthy - verdadeiro")
// }else{
//     console.log("False - false")
// }

// null, undefined, NaN, "", 0, false

// let variavelNaoDefinida;

// if(variavelNaoDefinida){
//     console.log("Truthy - verdadeiro")
// }else{
//     console.log("False - false")
// }

// const resultado = 10 * "texto";
// console.log(resultado);

// if(isNaN(resultado)){
//     console.log("valor incorreto")
// }

// if(resultado) {
//     console.log("Truthy - verdadeiro")
//  }else{
//      console.log("False - false")
//  }

// if(false){
//          console.log("Truthy - verdadeiro")
//  }else{
//      console.log("False - false")
//  }

// const meuArray = [];

// if(meuArray){
//     console.log("Truthy - verdadeiro")
//   }else{
//       console.log("False - false")
//   }

const meuObj = {};
if(meuObj){
    console.log("Truthy - verdadeiro")
   }else{
       console.log("False - false")
   }