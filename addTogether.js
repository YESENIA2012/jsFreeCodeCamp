/*Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum. */

function addTogether() {
  const [num1, num2] = arguments;

  if (typeof num1 === "string") {
    return undefined;
  } else if (typeof num2 === "undefined") {
    return (num2) => addTogether(num1, num2);
  } else if (typeof num1 != "number" || typeof num2 != "number") {
    return undefined;
  }

  return num1 + num2;
}

console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, 3));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
