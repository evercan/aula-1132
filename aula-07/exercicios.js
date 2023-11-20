const prompt = require("prompt-sync")();

function receiveValues(msg) {
  const value = parseFloat(prompt(msg));
  if (isNaN(value)) {
    receiveValues(
      "Valor inválido, digite um valor númerico positivo ou negativo"
    );
  }
  return value;
}
function receiveOperator(msg) {
  const operator = prompt(msg);
  const operators = ["+", "-", "*", "/", "%", "**"];
  if (operators.includes(operator)) {
    return operator;
  }
  receiveOperator(
    "Operador inválido, digite um operador válido ('+' para soma, '-' para subtração, '*' para multiplicação, '/' para divisão, '%' para módulo ou '**' para exponenciação.)"
  );
}
function operations(value1, value2, operation) {
  switch (operation) {
    case "+":
      console.log(`${value1} ${operation} ${value2} = ${value1 + value2}`);
      return console.log(value1 + value2);
    case "-":
      console.log(`${value1} ${operation} ${value2} = ${value1 - value2}`);
      return console.log(value1 - value2);
    case "/":
      console.log(`${value1} ${operation} ${value2} = ${value1 / value2}`);
      return console.log(value1 / value2);
    case "*":
      console.l
og(`${value1} ${operation} ${value2} = ${value1 * value2}`);
      return console.log(value1 * value2);
    case "%":
      console.log(`${value1} ${operation} ${value2} = ${value1 % value2}`);
      return console.log(value1 % value2);
    case "**":
      console.log(`${value1} ${operation} ${value2} = ${value1 ** value2}`);
      return console.log(value1 ** value2);
  }
}
function nextOperation(msg) {
  let check = prompt(msg);
  const yesAnswers = ["S", "s"];
  const noAnswers = ["N", "n"];
  if (noAnswers.includes(check)) {
    return console.log("Muito obrigado por usar o ADA Calc. Até a proxima.");
  }
  if (yesAnswers.includes(check)) {
    return calculator();
  }
  nextOperation(
    "Opção inválida. Deseja realizar outra operação? ('S' para sim ou 'N' para não.)"
  );
}
function calculator() {
  const value1 = receiveValues("Digite o primeiro valor: ");
 const operation = receiveOperator("Qual operação deseja realizar?");
  const value2 = receiveValues("Digite o segundo valor: ");

  let result = operations(value1, value2, operation);

  nextOperation(
    "Deseja realizar outra operação? ('S' para sim ou 'N' para não.)"
  );

  return result;
}

calculator();