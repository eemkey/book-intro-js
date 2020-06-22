function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

function factorial2(num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial2(num -1);
  }
}



console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

console.log(factorial2(0));     // => 1
console.log(factorial2(1));     // => 1
console.log(factorial2(2));     // => 2
console.log(factorial2(3));     // => 6
console.log(factorial2(4));     // => 24
console.log(factorial2(5));     // => 120
console.log(factorial2(6));     // => 720
console.log(factorial2(7));     // => 5040
console.log(factorial2(8));     // => 40320