function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("error!");
    return;
  } else {
    num % 2 === 0 ? console.log("even") : console.log("odd");
  }
}


