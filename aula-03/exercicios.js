//1)
//Crie um objeto que represente uma pessoa com propriedades como "nome", "idade" e "cidade".

const pessoa = {
    nome:"Edson",
    idade:"29",
    cidade:"São Paulo",
}
//console.log (pessoa)

//2)
//Crie um array de números e calcule a soma de todos os números no array.

const arrayNumeros= [2,4,5,8,10,12];
const somaTotal = arrayNumeros.reduce((acc,num) => acc+num,0);
//console.log(somaTotal);

//3)
//Use um Map para armazenar informações sobre produtos (nome do produto e preço) e, em seguida, 
//imprima todos os produtos e seus preços.

const produtos = new Map();

produtos.set("Monitor", 999.00);
produtos.set("CPU", 1500.00);
produtos.set("Mouse", 60.00)
produtos.set("Teclado", 100.00);

//console.log(produtos);
//produtos.forEach((preco, produto) => {
 //   console.log(produto + ': '+ preco);
//})

//4)
//Use um Map para criar uma lista de contatos com nomes como chaves 
//e informações de contato (por exemplo, e-mail) 
//como valores.

const listaDeContatos = new Map();

listaDeContatos.set("Everton", {email: "evertondasilva88@gmail", 
telefone: 54999999});
listaDeContatos.set("Paulo", {email: "paulo.teste@gmail", 
telefone: 54999999});
listaDeContatos.set("Pedro", {email: "pedro.teste@gmail", 
telefone: 54999999});

const pessoaBusca = "Everton"
const nomeBusca = listaDeContatos.get(pessoaBusca);
//console.log(nomeBusca);


//5)
//Use um Map para armazenar informações sobre estudantes (nome, idade, nota) e, 
//em seguida, encontre o aluno com a nota mais alta.

const alunos = new Map();

alunos.set("Kamila", {idade: 20, nota:80})
alunos.set("Gabriel", {idade: 28, nota:70})
alunos.set("Edson", {idade: 30, nota:65})
alunos.set("Mylena", {idade: 27, nota:87})
alunos.set("Everton", {idade: 41, nota:45})

//console.log(alunos);

let nomeAlunoMax = "";
let notaAluno    = -1;

alunos.forEach((informacao, alunos) =>{
    if(informacao.nota > notaAluno){
        notaAluno = informacao.nota;
        nomeAlunoMax = alunos; 
    }    
});

const resultado = `O aluno com a nota maior é ${nomeAlunoMax} com nota ${notaAluno}`;

//console.log(resultado);

//6)
//Crie um array associativo que associe nomes de produtos a objetos que 
//contenham informações sobre o produto (por exemplo, nome, preço, descrição).

function buscaDescricao(nome){

}

const listaDeProdutos = {
    "Monitor": {
        nome: "Monitor de 17 AOC ",
        preco: 999.00,
        descricao: "Um monitor para uso do computador"
    },
    "CPU": {
        nome: "Gabinete PC Gamer",
        preco: 1500.00,
        descricao: ""
    },
    "Mouse": {
        nome: "Mouse Logitech",
        preco: 60.00,
        descricao: "Mouse para uso pessoal"
    }
}
//console.log(listaDeProdutos.Mouse["nome"]);
//console.log(listaDeProdutos.CPU.descricao);
//console.log("R$ " +listaDeProdutos["Monitor"]["preco"]);
