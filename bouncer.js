/*Remove all falsy values from an array. 
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/

function bouncer(arr) {
  let newArray = [];
  for (let counter = 0; counter < arr.length; counter++) {
    let element = arr[counter];

    if (Boolean(element) != false) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
