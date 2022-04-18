/*You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */
function frankenSplice(arr1, arr2, n) {
  let copiaArray1 = arr1.map((number) => {
    return number;
  });
  let copiaArray2 = arr2.map((number) => {
    return number;
  });
  let newArray = [...copiaArray2];
  newArray.splice(n, 0, ...copiaArray1);
  return newArray;
}

let newArray = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(newArray);
