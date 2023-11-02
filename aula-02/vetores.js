// posicoes 0,1,2,3,4,5
// vetor de numeros
let vetor = [1,2,50,5,60]
//console.log(vetor);

// vetor de string
let frutas = ["maça",  //0
             "banana", //1
             "uva",    //2
             "abacate",//3
             "laranja", //4
             "acabaxi"]; //5  // Um vetor de string
//console.log(frutas);

// Vetor misto
let misto = [5,"Ola", true,{nome: "Joao"}];

//console.log(misto);

// spread - modifica o array
let nums = [1,2,3,4,...misto]
// concat - cria um novo
let nums1 = [1,2,3,4,60,70]
let resultado = nums1.concat(misto);
//console.log(resultado);

const delimitador = ", "
nums1[1]= 80; //modifica o elemento 1
//console.log(nums1);
//console.log(nums1.length); // quantidade de itens do array
//console.log(frutas.includes("jaca")); // retorna boolean e if existe
//console.log(frutas.indexOf("melao")); // if existe tras a posição / se não existe -1
//console.log(frutas.toString()); // tranforma em string separado por virgula
//console.log(frutas.join(`${delimitador}`)); // transforma separado em string pelo parametro passado
//console.log(frutas.sort()); // [modifica] orderna os itens por ordem alfabetica

//console.log(frutas);
//frutas.splice(2,3); // modifica o original;
                // posicao do start e a quantidade de elementos
               // frutas.splice(3)
//console.log(frutas);
//console.log(frutas);
//var nova = frutas.slice(2,5); // cria uma copia - inicial na 2 e tira a 5
//console.log(nova);

// primeiro a entrar -> primeiro a sair (FIFO) fila
// ultimo a entrar -> primeiro a sair (LIFO) pilha

console.log(frutas);
//frutas.push("morango") // enfileirar (colocar no fim)
//frutas.pop();          // desinpilhar

//frutas.unshift("morango"); // empilha (coloco no topo)
frutas.shift();
console.log(frutas);








