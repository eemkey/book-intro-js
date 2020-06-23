let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

//determine lengths of all elements, then keep odd values

function oddLengths(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.length % 2 !== 0) {
      acc.push(curr.length);
    }
    return acc;
  }, [])
}