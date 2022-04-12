/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object 
property and you need to return true if its value is truthy. Otherwise, return false. */

function truthCheck(collection, pre) {
  let counterElement = 0;
  let counterPre = 0;
  let counterTrue = 0;
  collection.forEach((element) => {
    counterElement = counterElement + 1;
    for (let property in element) {
      if (property == pre) {
        counterPre = counterPre + 1;
        if (Boolean(element[property]) == true) {
          counterTrue = counterTrue + 1;
        }
      }
    }
  });
  if (counterTrue == counterPre && counterElement == counterPre) {
    return true;
  } else if (counterElement != counterPre) {
    return false;
  } else {
    return false;
  }
}

//Test
console.log(
  truthCheck(
    [
      { name: "Quincy", username: "QuincyLarson" },
      { name: "Naomi", username: "nhcarrigan" },
      { name: "Camperbot" },
    ],
    "username"
  )
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
);
