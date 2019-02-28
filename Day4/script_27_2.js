console.log("I am running on the console.");
console.log("Now, we knew the console");
/*
Multiline comment
This multiline
commment
*/
// We are about to talk Variables
let firstName;
console.log(firstName);
firstName = "Asabeneh";
console.log(firstName);
let lastName = "Yetayeh";
console.log(lastName);
let fullName = firstName + " " + lastName;
console.log(fullName);
//Data types:string, number,boolean, null, undefined
let country = "Finland";
let numOne = 3;
let numTwo = 4;
const gravity = 9.81;
const PI = 3.14;
const boilingPoint = 100;
let isRaining = false;
let isLightOn = false;
let isMarried = true;
// Check data types

console.log(typeof country);
console.log(typeof numOne);
console.log(typeof isRaining);
console.log(`The sum of ${numOne} and ${numTwo} is ${numOne + numTwo}`);

// Arthimetic operations
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mul = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;

//Comparison Operators: >, <, >=, <=, ==, ===, !=, !==
console.log(4 > 3);
console.log(3 < 4);
console.log(4 >= 3);
console.log(3 <= 4);
console.log(4 == 4);
console.log(4 == "4");
console.log(4 != "4");
console.log(4 !== "4");
console.log(4 === "4");
console.log(4 === 4);

// Logical operators:
// &&, ||, !

console.log(!(4 < 3 || 10 < 9));
console.log(!4 > 3);
// Conditionals
let x = 3;
if (x >= 3) {
  console.log("The if block of code will run");
} else {
  console.log("If the if block doesnt run else will do");
}
//Looops
//For loop

let allEvens = 0;
let allOdds = 0;
for (let i = 0; i < 101; i = i + 1) {
  if (i % 2 === 0) {
    allEvens += i;
    console.log("I am proud even", i);
  } else {
    allOdds += i;
    console.log("I am proud odd", i);
  }
}

console.log(allEvens, allOdds);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);
let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]);

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
console.log("The average of the array items", total / numbers.length);

function square(num) {
  return num * num;
}
console.log(square(3));
console.log(square(4));
console.log(square(10));

const createSevenRandNums = () => {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
};
console.log(createSevenRandNums());

const printFullName = (firstName = "John", lastName = "Doe") =>
  firstName + " " + lastName;

console.log(printFullName());
console.log(printFullName("Asabeneh", "Yetayeh"));
const areaOfCircle = (r = 10) => Math.PI * r * r;

console.log(areaOfCircle(20).toFixed(2));
