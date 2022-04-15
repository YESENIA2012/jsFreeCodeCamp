//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  let newString = str.toLowerCase();
  let regex = /[a-z0-9]/g;
  let newString2 = newString.match(regex).join("");

  return newString2 == newString2.split("").reverse().join("");
}

//Test
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
