/*Write a function that takes two or more arrays and returns a new 
array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the 
final array should not be sorted in numerical order. */

function uniteUnique(arr) {
  var args = [...arguments];
  var newArray = [];
  for (let counter = 0; counter < args.length; counter++) {
    for (let counter2 = 0; counter2 < args[counter].length; counter2++) {
      if (newArray.includes(args[counter][counter2]) != true) {
        newArray.push(args[counter][counter2]);
      }
    }
  }
  console.log(newArray);
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
