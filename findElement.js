/*Create a function that looks through an array arr and returns 
the first element in it that passes a 'truth test'. This means 
that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined. */
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
