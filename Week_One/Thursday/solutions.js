// // What is the difference between a parameter and an argument?
//ANSWER: A parameter is how the input is represented in the function, the argument is what's put in.
// Within a function, what is the difference between return and console.log?
//The return value can be used to pass on data, whereas you can't do the same with the console.log

//
const checkPalindrome = (word) => {
  if (word == word.toLowerCase("").split("").reverse().join("")) {
    return true
  } else {
    return false
  }
}

console.log(checkPalindrome("racecar"));

//Commit 2 - Palindrome
