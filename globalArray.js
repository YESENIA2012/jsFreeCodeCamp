/*Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate the globalArray variable.*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = arr.slice();
  newArray.sort(function (a, b) {
    return a - b;
  });
  return newArray;
  // Only change code above this line
}

nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray));
