let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) {
  let newArr = [];
    arr.map(item => {
    if (regex.test(item)) {
      newArr.push(item);
    }
  })
  return newArr;
}

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']