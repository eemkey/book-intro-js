let rlSync = require("readline-sync");
let age = parseInt(rlSync.question("What is your age? "));

console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

for (let futureYears = 10; futureYears <= 40; futureYears += 10) {
  console.log(`In ${futureYears}, you will be ${age + futureYears} years old.`);
}
