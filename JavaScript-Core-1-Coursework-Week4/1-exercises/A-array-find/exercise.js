/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function findLongNameThatStartsWithA(names) {
  return names.find((names) => names.length > 7 && names[0] === "A"); // pavel: this is all alomost 100% good :)
                                                                      // the only thing that inside the callback, each element of the 'names' is a single 'name':
                                                                      // names.find((name) => ....);
                                                                      // just in case you want it look even more cooler,
                                                                      // use String.startsWith() method in second part of the condition:
                                                                      // name.startsWith("A")
}

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
