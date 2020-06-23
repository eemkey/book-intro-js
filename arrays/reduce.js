let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

function sumOfSquares(numbers) {
  return numbers.reduce((acc, curr) => {
    return acc += (curr * curr)
  }, 0);
}
