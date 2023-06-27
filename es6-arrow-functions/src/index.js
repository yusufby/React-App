import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

function square(x) {
  return x * x;
}

let squareNumbers = numbers.map(function (x) {
  return x * x;
});
let squareNumbers2 = numbers.map((x) => {
  return x * x;
});
let squareNumbers3 = numbers.map((x) => x * x);

console.log(squareNumbers);
console.log(squareNumbers2);
////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers1 = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
const newNumber2 = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
const newNumber3 = numbers.findIndex((num) => num > 10);

var deneme = [34, 53, 12, 33, 22, 65];

const buyukDeneme = deneme.filter((dene) => dene > 39);
console.log(buyukDeneme);

const firstDeneme = deneme.find((x) => x > 33);
console.log(firstDeneme);
