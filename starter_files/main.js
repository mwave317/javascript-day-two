// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a, b){
    // Your answer here
    if ( a > b) {
      return a
    } else
      return b
}

console.log(max(5,6));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(c,d,e){
    // Your answer here
    if (c > d && c > e) {
      return c
    } else if (d > c && d > e) {
      return d
    } else {
      return e
    }
}
console.log(maxOfThree(1,2,3));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    // Your answer here
    if ("a" || "e" || "i"|| "o" || "u") {
      return true
    } else
      return false
}
console.log(isVowel("n"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (f, g) {
  let h = f + g;
  return h
}
console.log(sum(234, 876));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(i,j,k) {
  let l = (i + j + k) / 3;
  return l
}

console.log(avg(3,1,6));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(l) {
  let m = l.length
  return l
}

console.log(getLength("Butterbeer"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(m,n) {
  if (m < n) {
    return true
  } else {
    return false
  }
}

console.log(greaterThan(7,4));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(o) {
  var message = "Hello, " + o + "!";
  return message
}

console.log(greet("Samantha"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madLib(noun, verb, person, adjective) {
  let t = "The 89th Annual " + noun + " Awards show! It's the Awards show you been " + verb + " all year. The " + person + "'s! There are many " + adjective + " reasons to watch this year.";
  return t
}
console.log(madLib("table", "walking", "Melissa", "big"));
