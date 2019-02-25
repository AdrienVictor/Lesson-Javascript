// QUESTION 1

var firstName = "adrien";
var lastName = "fernandez";
var maritalStatus = "avomies";
console.log(firstName);
var personalInfo = `${firstName} ${lastName} ${maritalStatus}`;
console.log(personalInfo);
var myAge = 29;
var yourAge = 40;
console.log(`I am ${myAge} years old`);
console.log(`You are ${yourAge} years old`);

// QUESTION 2

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof maritalStatus);
console.log(typeof myAge);
console.log(typeof yourAge);

// QUESTION 3

var company = "Integrify Academy";
console.log(company);
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.substr(0, 9));
console.log(company.includes("Academy"));
console.log(company.split(""));
console.log(company.split(" "));
var company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(","));
var company = "Integrify Academy";
console.log(company.replace("Integrify", "Microsoft"));
var company = "Integrify Academy";
console.log(company.charAt(10));
console.log(company.charCodeAt(10));
console.log(company.indexOf("e"));
console.log(company.lastIndexOf("e"));
var company = " Integrify Academy ";
console.log(company.trim());
var company = "Integrify Academy";
console.log(company.startsWith("I"));
console.log(company.endsWith("y"));
console.log(company.match(/a/gi));
var integrify = "Integrify";
var academy = "Academy";
console.log(integrify.concat(" " + academy));
console.log((company + " ").repeat(5));

// QUESTION 4

var b1 = Boolean(10 > 8);
console.log(b1);

var b2 = Boolean(1000);
console.log(`1000 is ${b2}`);

var b3 = Boolean(5 == 5);
console.log(b3);

var b1 = Boolean(2 > 8);
console.log(b1);

var b2 = Boolean(8 != 8);
console.log(b2);

var b3 = Boolean(7 == 5);
console.log(b3);

// QUESTION 5

let operandOne = 4;
let operandTwo = 3;

console.log(operandOne + operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo);
console.log(--operandTwo * ++operandOne);
console.log(++operandOne);

// QUESTION 6

var b1 = Boolean(4 > 3);
var b2 = Boolean(4 >= 3);
var b3 = Boolean(4 < 3);
var b4 = Boolean(4 <= 3);
var b5 = Boolean(4 == 4);
var b6 = Boolean(4 === 4);
var b7 = Boolean(4 != 4);
var b8 = Boolean(4 !== 4);
var b9 = Boolean(4 != "4");
var b10 = Boolean(4 == "4");
var b11 = Boolean(4 === "4");
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);
console.log(b7);
console.log(b8);
console.log(b9);
console.log(b10);
console.log(b11);

// QUESTION 7
var question7 = "question7";
console.log(question7);
var b1 = Boolean(4 > 3 && 10 < 12);
console.log(b1);
var b2 = Boolean(4 > 3 && 10 > 12);
console.log(b2);
var b3 = Boolean(4 > 3 || 10 < 12);
console.log(b3);
var b4 = Boolean(4 > 3 || 10 > 12);
console.log(b4);
var b5 = Boolean(!(4 > 3));
console.log(b5);
var b6 = Boolean(!(4 < 3));
console.log(b6);
var b7 = Boolean(!false);
console.log(b7);
var b8 = Boolean(!(4 > 3 && 10 < 12));
console.log(b8);
var b9 = Boolean(!(4 > 3 && 10 > 12));
console.log(b9);
var b10 = Boolean(!(4 === "4"));
console.log(b10);

// QUESTION 8
var question8 = "question8";
console.log(question8);

var age = prompt("enter your age");
console.log(`you are ${age}`);
if (age < yourAge) {
  console.log(`you are ${yourAge - age} years younger than me`);
} else console.log(`you are ${age - yourAge} years older than me`);
if (age >= 18) {
  console.log("your are old enough to drive");
} else console.log(`you are left with ${18 - age} years to drive`);

// QUESTION 9

var question9 = "question9";
console.log(question9);

let a = 4;
let b = 3;

console.log(a > b ? "a is greater than b" : "b i greater than a");

// QUESTION 10

var question10 = "question10";
console.log(question10);

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];
console.log(itCompanies);
console.log(itCompanies.length);
for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// use itcompanie.slice(itcompanies.length-1)
console.log(
  `${itCompanies.slice(0, itCompanies.length - 1)} and ${
    itCompanies[6]
  } are big IT companies`
);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

function findCompany(companyName) {
  return companyName === "Apple";
}

itCompanies.find(findCompany)
  ? console.log(`${itCompanies.find(findCompany)} exists in the array`)
  : console.log(
      `${itCompanies.find(findCompany)} does not exists in the array`
    );

// ASABENEH METHOD -- 19.2

// var compName;

// function findCompany(companyName) {
//     var compName = companyName === "Integrify" ? companyName : "Integrify";
//     console.log(compName);
//     return companyName === "Integrify";
// }

// var result = itCompanies.find(findCompany)
//     ? `${itCompanies.find(findCompany)} exists in the array`
//     : `${compName} does not exists in the array`;
// console.log(result);

// QUESTION 11

var question11 = "question11";
console.log(question11);

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (j = 10; j <= 20; j++) {
  console.log(j);
}

for (k = 100; k >= 90; k--) {
  console.log(k);
}
var i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

j = 20;
while (j >= 10) {
  console.log(j);
  j--;
}

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];

for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

var companyName = "Oracle";
i = 0;
while (i < itCompanies.length && companyName != itCompanies[i]) {
  i++;
}
companyName == itCompanies[i]
  ? console.log(`${companyName} exists in the array`)
  : console.log(`${companyName} does not exist in the array`);
// for (var i = 0; i < itCompanies.length; i++)
//   companyName === itCompanies[i]
//     ? console.log(`${companyName} exists in the array`)
//     : console.log(`${companyName} does not exist in the array`);

// for (var i = 0; i < itCompanies.length; i++) {
//   if (itCompanies[i].indexOf("oo") != -1) console.log(itCompanies[i]);
// }
for (var i = 0; i < itCompanies.length; i++) {
  itCompanies[i].indexOf("oo") != -1
    ? console.log(itCompanies[i])
    : console.log("not found");
}

// EXERCISES: FUNCTIONS

console.log("exercises:functions");
// 1
function fullName() {
  var fullName = "adrien fernandez";
  return fullName;
}

// 2
function fullName(firstName, lastName) {
  return `My name is ${firstName} ${lastName}`;
}
console.log(fullName("adrien", "fernandez"));

// 3
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
console.log(addNumbers(10, 20));

// 4
function areaOfRectangle(length, width) {
  var area = length * width;
  return area;
}
console.log(areaOfRectangle(20, 11));

// 5
function perimeterOfRectangle(length, width) {
  var perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(5, 7));

// 6
function volumeOfRectPrism(length, width, height) {
  var volume = length * width * height;
  return `the volume of your rectangle is ${volume} m3`;
}
console.log(volumeOfRectPrism(3, 5, 11));

// 7
function density(mass, volume) {
  var density = mass / volume;
  return density;
}
console.log(density(30, 50));

// 8
function weight(mass, gravity) {
  var weight = mass * gravity;
  return weight;
}
console.log(weight(30, 9.81));

// 9
function bmi(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}
console.log(bmi(69, 1.77));

// 10
function solvLinEquation(a, b, y) {
  var answer = (y - b) / a;
  return `x= ${answer}`;
}
console.log(solvLinEquation(5, 6, 10));

// 11
function solvQuadEquation(a, b, c) {
  var delta = b ** 2 - 4 * a * c;
  if (delta < 0) return "the solution does not exist";
  else if (delta === 0) {
    var result = -b / (2 * a);
    return `the solution is ${result}`;
  } else {
    var result1 = (-b + Math.sqrt(delta)) / (2 * a);
    var result2 = -b - Math.sqrt(delta) / (2 * a);
    return `there are two solutions: ${result1} and ${result2}`;
  }
}
console.log(solvQuadEquation(3, 40, 5));

// 12
var array = [2, 5, 34, "hello", 2 + 3 + 4];
function printArray(array) {
  for (i = 0; i < array.length; i++) console.log(array[i]);
}
printArray(array);

function reverseArray(array) {
  for (i = array.length - 1; i >= 0; i--) console.log(array[i]);
}
reverseArray(array);

// 18
// function capitalizeArray(arrayToCapitalize) {
//   var newArray = arrayToCapitalize[0].toUpperCase();
//   for (i = 1; i < arrayToCapitalize.length; i++) {
//     var newArray = newArray + " " + arrayToCapitalize[i].toUpperCase();
//   }
//   return newArray.split(" ");
// }
// console.log(capitalizeArray(itCompanies));
function capitalizeArray(array) {
  var array = array.map(function(item) {
    return item.toUpperCase();
  });
  return array;
}
console.log(capitalizeArray(itCompanies));

// 19
function addItem(array, item) {
  var newArray = array.slice(); //if I need to clone the array before adding a new item
  newArray.push(item);
  return newArray;
}
console.log(addItem(itCompanies, "Yle"));

// 20
function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}
console.log(removeItem(itCompanies, 3));

// 21
function sumOfNumbers(number) {
  var sum = 0;
  for (var i = 0; i < number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfNumbers(7));

// 22
function sumOfOddNumbers(number) {
  var sum = 0;

  for (var i = 0; i < number; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfOddNumbers(7));

// 23

function sumOfEvenNumbers(number) {
  var sum = 0;

  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfEvenNumbers(7));

// 24
function evenAndOdds(count) {
  even = 0;
  odd = 0;
  for (i = 0; i <= count; i++) i % 2 == 0 ? even++ : odd++;

  return `the number of odds are ${odd}\nthe number of even are ${even}`;
}
console.log(evenAndOdds(100));

// 25
function sumArrayValues(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumArrayValues([1, 2, 3, 4, 5, 10, -2, 3 * 3]));

// 26
function randomHexaNumberGenerator() {
  var n = 6,
    hexColor = "#";
  while (n--) {
    hexColor += ((Math.random() * 16) | 0).toString(16); // random char from 0 to f
  }
  return hexColor;
}
console.log(randomHexaNumberGenerator());

// 27
function userIdGenerator() {
  var n = 7;
  id = "";
  while (n--) {
    id += ((Math.random() * 36) | 0).toString(36);
  }
  return id;
}
console.log(userIdGenerator());

// 28
// function userIdGeneratedByUser() {
//   var charNum = prompt("number of characters:");
//   var idNum = prompt("number of ids:");
//   let allIds = [];

//   while (idNum > 0) {
//     var id = "";
//     for (i = 0; i <= charNum; i++) {
//       id += ((Math.random() * 36) | 0).toString(36);
//     }
//     allIds[idNum - 1] = id;
//     id = "";
//     idNum--;
//   }
//   return allIds.join(",");
// }
// console.log(userIdGeneratedByUser());

function userIdGeneratedByUser() {
  var charNum = prompt("number of characters:");
  var idNum = prompt("number of ids:");
  let allIds = [];
  var id = "";

  while (idNum > 0) {
    for (i = 0; i <= charNum; i++) {
      id += ((Math.random() * 36) | 0).toString(36);
    }
    allIds[idNum - 1] = id;
    id = "";
    idNum--;
  }
  return allIds.join(",");
}
console.log(userIdGeneratedByUser());

// 30

function rgbColorGenerator() {
  var r = Math.floor(Math.random() * 255) || Math.ceil(Math.random() * 255);
  var g = Math.floor(Math.random() * 255) || Math.ceil(Math.random() * 255);
  var b = Math.floor(Math.random() * 255) || Math.ceil(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

console.log(rgbColorGenerator());

// 31

var date = new Date();
console.log(date);

// 32

function displayDateTime() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hour = date.getHours() + 1;
  var minutes = date.getMinutes() + 1;

  return `${day}/${month}/${year} ${hour}:${minutes}`;
}
console.log(displayDateTime());

// 33

function shuffleArray(array) {
  let i = array.length;
  while (i--) {
    let index = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  return array;
}
console.log(shuffleArray(itCompanies));

// 34

// var result = 75; check later for previous question 'conditon q5'

// switch (true) {
//   case result >= 70 && result <= 80:
//     console.log("good grade");
//     break;
//   default:
//     console.log("bad grade");
//     break;
// }

function factorial(number) {
  if (number === 0) {
    return 1;
  } else if (number < 0) return "enter a positive number";
  else return number * factorial(number - 1);
}
console.log(factorial(6));
// this is a recusive function: check https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea

// 35

function isEmpty(parameter) {
  if (parameter === undefined) return "your parameter is empty";
  else return parameter;
}
console.log(isEmpty());
