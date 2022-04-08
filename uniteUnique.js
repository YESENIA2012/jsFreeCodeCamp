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
