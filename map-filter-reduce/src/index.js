import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
var newNumbers = [];
function double(x) {
  return newNumbers.push(x * 2);
}
numbers.forEach(double);
//console.log(newNumbers);
// Filter - Create a new array by keeping the items that return true.

const biggerThan = numbers.filter(function (num) {
  return num > 3;
});

console.log(biggerThan);

var newArray = [];

numbers.forEach(function (num) {
  if (num > 3) {
    newArray.push(num);
  }
});
console.log(newArray);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumbers = 0;

numbers.forEach(function (num) {
  newNumbers += num;
});

// console.log(newNumbers)

const newNumber = numbers.reduce(function (Accumulator, number) {
  return Accumulator + number;
});

console.log(newNumber);
//Find - find the first item that matches from an array.
const findFirstNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(findFirstNumber);
//FindIndex - find the index of the first item that matches.
const findFirstNumberIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(findFirstNumberIndex);

const words = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(emojipedia);
console.log(words);
