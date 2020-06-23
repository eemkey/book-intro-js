let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArr = [];
for (let key in obj) {
  newArr.push(key.toUpperCase())
}

console.log(newArr);

