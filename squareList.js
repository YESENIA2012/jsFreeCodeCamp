/* Complete the code for the squareList function using any combination 
of map(), filter(), and reduce(). The function should return a new array 
containing the squares of only the positive integers (decimal numbers are not integers) 
when an array of real numbers is passed to it. An example of an array of real numbers 
is [-3, 4.8, 5, 3, -3.2]. */

const squareList = (arr) => {
  let newArray = arr.filter((num) => {
    return Number.isInteger(num);
  });
  let newArray2 = newArray.filter((element) => {
    if (element >= 0) {
      return element;
    }
  });
  let newArray3 = newArray2.map((element) => {
    let result = 0;
    result = element * element;
    return result;
  });
  return newArray3;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
