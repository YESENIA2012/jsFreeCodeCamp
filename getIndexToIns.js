function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (let counter = 0; counter < arr.length; counter++) {
    if (arr[counter] >= num) {
      console.log(counter);
      return counter;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
