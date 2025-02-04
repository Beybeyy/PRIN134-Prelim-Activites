let addition = "Addition 10 + 5:";
let subtraction = "Subtraction 10 - 5:";
let multiplication = "Multiplication 10 * 5:";
let division = "Division 10 / 5:";
let divisionByZero = "Division 10 / 0:";

function calculate(num1, num2, operation) {
  return operation(num1, num2);  
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division By Zero!";
  }
  return num1 / num2;
}

function operations() {
  console.log(addition, calculate(10, 5, add));
  console.log(subtraction, calculate(10, 5, subtract));
  console.log(multiplication, calculate(10, 5, multiply));
  console.log(division, calculate(10, 5, divide));
  

  console.log(divisionByZero, calculate(10, 0, divide));
}

operations(); 