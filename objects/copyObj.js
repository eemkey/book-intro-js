let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(obj, arr) {
  let finalObj = {};
  if (arr) {
    arr.forEach(key => finalObj[key] = obj[key]
      );
  return finalObj;
  } else {
    return Object.assign(finalObj, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined