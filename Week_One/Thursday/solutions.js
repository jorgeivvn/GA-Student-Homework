// // What is the difference between a parameter and an argument?
//ANSWER: A parameter is how the input is represented in the function, the argument is what's put in.
// Within a function, what is the difference between return and console.log?
//The return value can be used to pass on data, whereas you can't do the same with the console.log

//Couldn't figure out how to make it work with capital letter
const checkPalindrome = (word) => {
  let lowerCase = word.toLowerCase()
  if (lowerCase == word.split("").reverse().join("")) {
    return true
  } else {
    return false
  }
}
// THIS WAS DANIEL'S WAY WITH A IF ELSE STATEMENT THAT I TRIED TO DO ABOVE
// const check Palindrome = (word) => {
//   const reversed = word.split("").reverse().join("");
//   if (reversed.toLowerCase() === word.toLowerCase()){
//     return true
//     else {
//       return false
//     }
//   }
// }
console.log(checkPalindrome("Racecar"));

//Digit Sum
const sumDigits = (num) => {
  let sum = 0;
  let add = num.toString().split('');
  for (var i = 0; i < add.length; i++) {
    sum += Number(add[i]);
  }
  return sum
}

console.log(sumDigits(42));

//Pythagorean Theorem

const calculateSide = (sideA, sideB) => {
  let pyth = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  return pyth
}

console.log(calculateSide(8,6));

//Commit 4 - Pythagoras //

//can't figure out
const sumArray = (array) => {
  let sum = 0;
  let array=
  for (var i = 0; i < array.length; i++) {
    return sum
  }
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

//Got this far on this problem, couldn't figure out the rest...
// went over it with Daniel in class, this is what we came up with, and makes sense now. Was overthinking it. *Re-read instructions on homework. They're might be something missing below.. 
const checkPrime = (num) => {
  if (num%2 != 0) {
    return true
  } else {
    return false
  }
}

console.log(checkPrime(5));

//step 2 of checkPrime/printPrime

//
const insertDash = (num) => {

}
