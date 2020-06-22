function greeter(question) {
  let rlSync = require("readline-sync");
  let name = rlSync.question(question);
  return name;
}

let firstName = greeter("What is your first name? ");
let lastName = greeter("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);


