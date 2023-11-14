// for, for ... in, for ... of

//for(inicializacao;condicao;incremento){
    // codigo a ser repetido
//}

// laço finito, controlado, bloco de codigo repetido
// utilizo quando precisar de indice
// laços numéricos tradicionais, com indices de arrays
// adequado para loops com um numero fixo de iterações

for(let i =0; i<5; i++){
   // console.log(i);
}

// for... in
// iterar as propriedades enumeraveis de um objeto
// é util para acessar as chaves e valores dos objetos

const obj = {
    a:1,
    b:2,
    c:3
};

for(const key in obj){
   // console.log('chave: '+ key + ' valor: '+ obj[key])
}

// for ...of 
// interar sobre arrays, strings, map, set

// array
const frutas = ["Maça","Banana", "Laranja", "Manga", "Pera"];

for (let fruta of frutas ){
   // console.log(fruta);
}

//Set
const meuArray = new Set([0,1,2,3,4,5,6,7,8,9,10]);

for (const value of meuArray){
   // console.log(value);
}

// Map
const meuMap = new Map();
meuMap.set('a',1);
meuMap.set('b',2);
meuMap.set('c',3);

for (const [key, value] of meuMap){
  //  console.log(`Chave: ${key}, Valor: ${value}`);
}

const minhaString = 'Hello World 13864 98292';

for (const char of minhaString){
    console.log(char);
}