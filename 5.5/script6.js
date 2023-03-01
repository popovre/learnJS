
const Calculator  = function() {
 
  this.operators = {
    '-': function (a, b) {return a - b},
    '+': function (a, b) {return a + b},
  }

  this.calculate = function(inExpression) {
    const splitedExpression = inExpression.split(' ');
    const firstSymbol = Number(splitedExpression[0]);
    const operator = splitedExpression[1];
    const secondSymbol = Number(splitedExpression[2]);

    console.log(firstSymbol)
    console.log(operator)
    console.log(secondSymbol)

    return typeof(firstSymbol) !== 'number' || typeof(secondSymbol) !== 'number' ? NaN : this.operators[operator](firstSymbol, secondSymbol);
  }

  this.addMethod = function(operatorName, operatorMethod) {
    this.operators[operatorName] = operatorMethod;
  };
}

let calc = new Calculator;


console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3");
console.log( result, "result" );

result =   powerCalc.calculate("e * 3")
console.log( result, "resultError" );
