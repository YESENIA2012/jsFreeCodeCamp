function findElement(arr, func) {
  var num = 0;
  for (let counter = 0; counter < arr.length; counter++) {
    num = arr[counter];

    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

let result = findElement([1, 2, 3, 4], (num) => num % 2 === 0);
console.log(result);
