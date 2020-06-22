function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require("readline-sync");
  let number = parseFloat(rlSync.question(prompt));
  return number;
}

let firstNum = getNumber("Enter first number: ");
let secondNum = getNumber("Enter second number: ");

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);

