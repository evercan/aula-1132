// Array Associativo - 
// é uma estrutura de dados que associa valores a chaves ou indices

var pessoa = [];
pessoa["nome"] = "Everton";
pessoa["idade"] = 41;

//console.log(pessoa["nome"]);
//console.log(pessoa["idade"]);

const sinominos = {
    "feliz": ["alegre", "contente", "radiante"],

    "triste": ["melancolico", "abatido", "deprimido"],
    "rapido" : ["veloz","agil", "rapido"]
}

//console.log(sinominos);

// Estrutura de dados `Map`
// Permite mapear chaves para valores de forma mais flexivel.

const mapa = new Map();

//mapa.set("chave1","valor1");


mapa.set("feliz",["alegre", "contente", "radiante"]);
mapa.set("triste",["melancolico", "abatido", "deprimido"]);
mapa.set("rapido",["veloz","agil", "rapido"]);

mapa.delete("triste");
console.log(mapa);