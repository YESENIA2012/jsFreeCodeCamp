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
