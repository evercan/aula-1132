//1) Verificação de Idade:
//Peça ao usuário para inserir sua idade e, em seguida, use um bloco if-else 
//para verificar se ele é maior de idade (18 anos ou mais) ou menor de idade.

const userAge = Math.floor(Math.random() * 40);
function ageValidator(age) {
  if (age > 17) {
    return console.log(`Parabéns, você tem ${age} e é maior de idade!`);
  }
  if (age < 1) {
    return console.log("Idade Inválida");
  }
  return console.log(`Ei! Você só tem ${age} então, é menor de idade!`);
}

//ageValidator(userAge);

//2)  Maior de Três Números:
//Peça ao usuário para inserir três números e use estruturas condicionais 
//if e else para determinar qual deles é o maior.

const numero1 = 500
const numero2 = 180
const numero3 = 100
/*
if(numero1 > numero2 && numero1 > numero3){
    console.log(`O primeiro numero ${numero1} é o maior`)
} else if (numero2 > numero1 && numero2 > numero3){
    console.log(`O segundo numero ${numero2} é o maior`)
}else{
    console.log(`O terceiro numero ${numero3} é o maior`)
}
*/


//3) Calculadora de IMC:
//Crie uma calculadora de índice de massa corporal (IMC) que peça ao usuário 
//para inserir seu peso e altura. 
//Em seguida, use um bloco if-else para exibir uma mensagem que classifica a 
//condição do usuário com base no IMC calculado.

const peso = 120;
const altura = 1.78;
(altura * altura)
//Math.pow(base, expoente)
const imc = (peso / Math.pow(altura, 2)).toFixed(2);
/*
if(imc < 18.5){
    console.log('Abaixo do peso')
}else if(imc >= 18.5 && imc <= 24.9){
    console.log('Peso Normal')
}else if(imc >= 25 && imc <= 29.9){
    console.log('Sobrepeso')
}else{
    console.log('Obeso')
}
*/
//4) Conversão de Temperatura:
//Peça ao usuário para inserir uma temperatura em graus Celsius e use uma 
//instrução if-else para converter essa temperatura para Fahrenheit ou vice-versa, 
//com base na escolha do usuário.

const tempetura = 65
const tipo = "fe" // C ou F
/*
if(tipo.toLowerCase() === "c"){
    const celsius = (tempetura - 32) * (5/9)
    console.log(`A temperatura em Celsius é ${celsius.toFixed(2)} ºC`)
}else if(tipo.toLowerCase() === "f"){
    const fahrenheit = (tempetura * 1.8) + 32;
    console.log(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)} ºF`)
}else{
    console.log('Você precisa escolher uma opção valida')
}
*/

//5) Validação de Login:
//Crie um formulário de login que solicite ao usuário um nome de usuário 
//e uma senha. Use estruturas if-else para verificar se as credenciais inseridas 
//estão corretas ou não.

// informação externa
const usuarioInput = "everton@gmail.com"
const senhaInput  = "12345"

// informação interna
const usuarioBD = "everton@gmail.com"
const senhaBD   = "123456"

if(usuarioInput === usuarioBD && senhaInput === senhaBD){
    console.log('Login efetuado com sucesso')
}else{
    console.log('Credenciais incorretas. Tente novamente')
}


//6) Verificação de numero par ou impar: 
//Solicite ao usuário para inserir um número e use uma estrutura if-else para 
//determinar se o número é par ou ímpar.

let n1= 50;
let resultado = (n1 % 2);
if (resultado){
    console.log(`O número ${n1} é Ímpar!`)
}else{
    console.log (`O número ${n1} é par!`)
}
