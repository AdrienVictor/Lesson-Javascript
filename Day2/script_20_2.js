console.log("welcome to JavaScript");

// var firstName = "adrien";
// var lastName = "fernandez";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

console.log("welcome to JS!", "the most popular language", 2019);

var firstName;
console.log(firstName);
firstName = "adrien";
console.log(firstName);
var age;
console.log(age);
age = 29;
console.log(age);

var gravity = 9.81;
var boilingPoint = 100;
var bodyTemp = 37;
console.log(
  `the boiling point of water is ${boilingPoint}°C\nhuman temperature is ${bodyTemp}°C\ngravity on Earth ${gravity}m/s2`
);

var numOne = 3;
var numTwo = 4;
console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne * numTwo);
console.log(numOne / numTwo);
console.log(numOne % numTwo);

// writing in single line

var firstName = "adrien",
  age = 29,
  city = "Helsinki";

//   comparison operators <,>,==, ===, !=, !==

var houseNumber = "1234";
console.log(typeof houseNumber);
console.log(typeof parseFloat(houseNumber));
// what is parse?

// logical operators &&, ||

var items = ["item 1", "item 2", "item 3", "Mango"];
console.log(items.length);
console.log(items[0]);
console.log(items[items.length - 1]);
var products = ["milk", "Meat", "Carrot", "Tomato"];
// check splice method!

// CONDITIONALS

num = 1;
num > 10
  ? console.log(`${num} greater than 10`)
  : console.log(`${num} lower than 10`);

// LOOPS

for (i = 1; i <= 3; i++) {
  console.log(i * 2);
}

for (i = 100; i > 0; i -= 10) {
  console.log(i);
}

for (i = 0; i <= 100; i++)
  i % 2 == 0 ? console.log(`${i}is even`) : console.log(`${i}is odd`);

oddNumbers = 0;
evenNumbers = 0;

for (i = 0; i <= 100; i++)
  i % 2 == 0 ? (evenNumbers = evenNumbers + i) : (oddNumbers = oddNumbers + i);
console.log("sum of all even numbers:" + evenNumbers);
console.log("sum of all odd numbers:" + oddNumbers);

// FUNCTIONS

function sumTwoNumbers() {
  var num1 = 10;
  var num2 = 20;
  return num1 + num2;
}
console.log(sumTwoNumbers());

function sumOfEvenOddNumbers(count) {
  evenNumbers = 0;
  oddNumbers = 0;
  for (i = 0; i <= count; i++)
    i % 2 == 0
      ? (evenNumbers = evenNumbers + i)
      : (oddNumbers = oddNumbers + i);

  return [evenNumbers, oddNumbers];
}
console.log(sumOfEvenOddNumbers(100));
