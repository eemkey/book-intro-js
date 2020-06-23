let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.map(str => str.length).filter(length => length % 2 !== 0);
}
