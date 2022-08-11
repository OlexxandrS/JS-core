/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// arr.forEach(element => console.log(element), arr % 5 === 0 ? Buzz : arr % 15 === 0 ? FizzBuzz:);
arr.forEach((number) => {
  if (number % 15 === 0) {
    console.log("FizzBuzz"); // pavel: we never return anything from Array.forEach() method.
  } else if (number % 3 === 0) {
    // this method basically replaces for-loop :)
    console.log("Fizz"); // console.log() doesn't return anything either
  } else if (number % 5 === 0) {
    // so we could just simply 'console.log()' here without 'return'
    console.log("Buzz");
  } else {
    console.log(number);
  }
});

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
