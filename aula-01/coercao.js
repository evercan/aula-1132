// Coerção Implicita

// de numero para string

var numero = 42
var texto = "O numero é : "+ numero;
//console.log(texto);

// de string para numero
var texto1 = "10";
var numero2 = texto1 *2;

 // transformação do tipo em booleano

 var valor = ""; // ! true , !! false
 var isVerdadeiro = !!valor;

//console.log(isVerdadeiro);

// Coerção Explicita
// conversao de string para numero;

var texto2= "50";
var numero3 = parseInt(texto2);

var texto3= "50.90";
var numero4 = parseFloat(texto3);

//console.log(texto3);

// converter de numero para string
var numeroParaConversao = 65;
var textoConvertidoString = numeroParaConversao.toString();

// conversao de numero para string (usando Template Literal)

var numeroLiteral = 50
var nomePessoa = "Everton da Silva"

var textoLiteral = `Ola ${nomePessoa}, seu pagamento de R$ ${numeroLiteral} 
fjfsbf 
foi feito`
//console.log(textoLiteral);

// conversao de boolean para numeros;
// true = 1
// false = 0

var valorBooleano = true;
var numero5 = Number(valorBooleano);

console.log(numero5);





