function caps(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(caps("Hello World!!"));
console.log(caps("no"));