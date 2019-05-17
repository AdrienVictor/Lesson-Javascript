// QUESTION 1

var firstName = 'adrien';
var lastName = 'fernandez';
var maritalStatus = 'avomies';
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

var company = 'Integrify Academy';
console.log(company);
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.substr(0, 9));
console.log(company.includes('Academy'));
console.log(company.split(''));
console.log(company.split(' '));
var company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(','));
var company = 'Integrify Academy';
console.log(company.replace('Integrify', 'Microsoft'));
var company = 'Integrify Academy';
console.log(company.charAt(10));
console.log(company.charCodeAt(10));
console.log(company.indexOf('e'));
console.log(company.lastIndexOf('e'));
var company = ' Integrify Academy ';
console.log(company.trim());
var company = 'Integrify Academy';
console.log(company.startsWith('I'));
console.log(company.endsWith('y'));
console.log(company.match(/a/gi));
var integrify = 'Integrify';
var academy = 'Academy';
console.log(integrify.concat(' ' + academy));
console.log((company + ' ').repeat(5));

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
var b9 = Boolean(4 != '4');
var b10 = Boolean(4 == '4');
var b11 = Boolean(4 === '4');
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
var question7 = 'question7';
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
var b10 = Boolean(!(4 === '4'));
console.log(b10);

// QUESTION 8
var question8 = 'question8';
console.log(question8);

// var age = prompt("enter your age");
// console.log(`you are ${age}`);
// if (age < yourAge) {
//   console.log(`you are ${yourAge - age} years younger than me`);
// } else console.log(`you are ${age - yourAge} years older than me`);
// if (age >= 18) {
//   console.log("your are old enough to drive");
// } else console.log(`you are left with ${18 - age} years to drive`);

// QUESTION 9

var question9 = 'question9';
console.log(question9);

let a = 4;
let b = 3;

console.log(a > b ? 'a is greater than b' : 'b i greater than a');

// QUESTION 10

var question10 = 'question10';
console.log(question10);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
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
  `${itCompanies.slice(0, itCompanies.length - 1)} and ${itCompanies[6]} are big IT companies`
);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

function findCompany(companyName) {
  return companyName === 'Apple';
}

itCompanies.find(findCompany)
  ? console.log(`${itCompanies.find(findCompany)} exists in the array`)
  : console.log(`${itCompanies.find(findCompany)} does not exists in the array`);

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

var question11 = 'question11';
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

// var itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon"
// ];

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

let companyName = 'Oracle';
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
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i].indexOf('oo') != -1 ? console.log(itCompanies[i]) : console.log('not found');
}

// EXERCISES: FUNCTIONS

console.log('exercises:functions');
// 1
function fullName() {
  let fullName = 'adrien fernandez';
  return fullName;
}

// 2
function fullName(firstName, lastName) {
  return `My name is ${firstName} ${lastName}`;
}
console.log(fullName('adrien', 'fernandez'));

// 3
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addNumbers(10, 20));

// 4
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(20, 11));

// 5
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(5, 7));

// 6
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return `the volume of your rectangle is ${volume} m3`;
}
console.log(volumeOfRectPrism(3, 5, 11));

// 7
function density(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(density(30, 50));

// 8
function weight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}
console.log(weight(30, 9.81));

// 9
function bmi(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}
console.log(bmi(69, 1.77));

// 10
function solvLinEquation(a, b, y) {
  let answer = (y - b) / a;
  return `x= ${answer}`;
}
console.log(solvLinEquation(5, 6, 10));

// 11
function solvQuadEquation(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  console.log(delta);

  if (delta < 0) return 'the solution does not exist';
  else if (delta === 0) {
    let result = -b / (2 * a);
    return `the solution is ${result}`;
  } else {
    let result1 = (-b + Math.sqrt(delta)) / (2 * a);
    let result2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `there are two solutions: ${result1} and ${result2}`;
  }
}
console.log(solvQuadEquation(2, -10, -7));

// 12
let arrayTestOne = [2, 5, 34, 'hello', 2 + 3 + 4];
function printArray(array) {
  for (i = 0; i < array.length; i++) console.log(array[i]);
}
printArray(arrayTestOne);

function reverseArray(array) {
  for (i = array.length - 1; i >= 0; i--) console.log(array[i]);
}
reverseArray(arrayTestOne);

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
  array = array.map(function(item) {
    return item.toUpperCase();
  });
  return array;
}
console.log(capitalizeArray(itCompanies));

// 19
function addItem(array, item) {
  let newArray = array.slice(); //if I need to clone the array before adding a new item
  newArray.push(item);
  return newArray;
}
console.log(addItem(itCompanies, 'Yle'));

// 20
function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}
console.log(removeItem(itCompanies, 3));

// 21
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfNumbers(7));

// 22
function sumOfOddNumbers(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
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

  for (let i = 0; i < number; i++) {
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
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumArrayValues([1, 2, 3, 4, 5, 10, -2, 3 * 3]));

// 26
function randomHexaNumberGenerator() {
  let n = 6,
    hexColor = '#';
  while (n--) {
    hexColor += ((Math.random() * 16) | 0).toString(16); // random char from 0 to f
  }
  return hexColor;
}
console.log(randomHexaNumberGenerator());

// 27
function userIdGenerator() {
  let n = 7;
  id = '';
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

// function userIdGeneratedByUser() {
//   let charNum = prompt("number of characters:");
//   let idNum = prompt("number of ids:");
//   let allIds = [];
//   let id = "";

//   while (idNum > 0) {
//     for (i = 0; i <= charNum; i++) {
//       id += ((Math.random() * 36) | 0).toString(36);
//     }
//     allIds[idNum - 1] = id;
//     id = "";
//     idNum--;
//   }
//   return allIds;
// }
// console.log(userIdGeneratedByUser());

// 30

function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 255) || Math.ceil(Math.random() * 255);
  let g = Math.floor(Math.random() * 255) || Math.ceil(Math.random() * 255);
  let b = Math.floor(Math.random() * 255) || Math.ceil(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

console.log(rgbColorGenerator());

// 31

let date = new Date();
console.log(date);

// 32

function displayDateTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

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
  } else if (number < 0) return 'enter a positive number';
  else return number * factorial(number - 1);
}
console.log(factorial(6));
// this is a recusive function: check https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea

// 35

function isEmpty(parameter) {
  if (parameter === undefined) return 'your parameter is empty';
  else return parameter;
}
console.log(isEmpty());

// 36

function sum() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  // let sum = arguments.reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0);
  return sum;
}
console.log(sum(3, 4, 4, 4, 4, 10, 100));

// 37

function sumOfArrayItems(array) {
  let sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  let i = array.length;
  while (i--)
    if (typeof array[i] === 'string') return 'your array must only contain numbers';
    else return sum;
}
console.log(sumOfArrayItems([3, 5, 6, 4 * 6, 10 / 2, 'hello']));

// 38

function average(array) {
  let sum =
    array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0) / array.length;
  let i = array.length;
  while (i--)
    if (typeof array[i] === 'string') return 'your array must only contain numbers';
    else return `the avarage of your array is ${sum}`;
}
console.log(average([19, 34, 10 + 3, 9 * 3, 23 / 4]));

// 39
let testArray = ['lemon', 'carrot', 'apple', 'mango', 'banana'];
function modifyArray(array) {
  array[4] = array[4].toUpperCase();
  let i = array.length;
  // while (i--)
  if (i < 4) return 'item not found';
  else return array;
}
console.log(modifyArray(itCompanies));

// 45
let arrayTestUnique = ['hello', 'hi', 'bonjour', 'hi', 'hi'];
function checkUniqueItem(array) {
  for (i = 0; i < array.length; i++)
    if (array.includes(array[i], i + 1)) return `array contains duplicates: ${array[i]}`;
  return 'no duplicates to be found';
}
console.log(checkUniqueItem(arrayTestUnique));

// 47

function sevenRandomNumbers() {
  let arr = [];
  while (arr.length < 7) {
    var r = Math.floor(Math.random() * 10);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
console.log(sevenRandomNumbers());

// OBJECTS EXERCISES

console.log('objects exercises:');

// 1

let personAccount = {
  firstName: 'adrien',
  lastName: 'fernandez',
  incomes: { kela: 580, work: 350, france: 490 },
  expenses: { rent: 600, transport: 50, food: 120 },
  // totalIncomes: function(incomes) {
  //   var sum = 0;
  //   for (var i in this.incomes) {
  //     if (this.incomes.hasOwnProperty(i)) {
  //       sum += parseFloat(this.incomes[i]);
  //     }
  //   }
  //   return sum;
  // },THIS IS THE OLD WAY OF DOING THINGS
  // totalIncomes: function() {
  //   return Object.values(this.incomes).reduce((total, num) => total + num);
  // }, arrow version
  totalIncomes: function() {
    return Object.values(this.incomes).reduce(function(sum, current) {
      return sum + current;
    }, 0);
  }, // THIS IS THE NEW AND EASIER WAY OF DOING THINGS
  totalExpenses: function() {
    return Object.values(this.expenses).reduce(function(sum, current) {
      return sum + current;
    }, 0);
  },
  accountInfo: () => `${this.firstName} ${this.lastName}`,
  addIncome: function(nameIncome, numIncome) {
    return (this.incomes[nameIncome] = numIncome);
  },
  addExpense: function(nameExpense, numExpense) {
    return (this.expenses[nameExpense] = numExpense);
  },
  accountBalance: function() {
    return this.totalIncomes() - this.totalExpenses();
  }
};

console.log(personAccount);
console.log('your incomes', personAccount.totalIncomes());
console.log('your expenses', personAccount.totalExpenses());
console.log('your account balance', personAccount.accountBalance());
console.log('new income', personAccount.addIncome('other', 400));
console.log('updated incomes', personAccount.totalIncomes());
console.log('new expense', personAccount.addExpense('other', 200));

console.log('personAccountV2');

let personAccountTwo = {
  firstName: 'adrien',
  lastName: 'fernandez',
  incomes: [{ kela: 580 }, { work: 350 }, { france: 490 }],
  expenses: [{ rent: 600 }, { transport: 50 }, { food: 120 }],
  totalIncomes: function() {
    let total = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      total += Object.values(this.incomes[i])[0];
    }
    return total;
  },
  totalExpenses: function() {
    let total = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      total += Object.values(this.expenses[i])[0];
    }
    return total;
  },
  accountBalance: function() {
    return this.totalIncomes() - this.totalExpenses();
  },
  addIncome: function(nameIncome, numIncome) {
    let newIncome = {};
    newIncome[nameIncome] = numIncome;
    this.incomes.push(newIncome);
    return 'add income: ' + nameIncome + ' ' + numIncome;
  },
  addExpense: function(nameExpense, numExpense) {
    let newExpense = {};
    newExpense[nameExpense] = numExpense;
    this.expenses.push(newExpense);
    return 'add income: ' + nameExpense + ' ' + numExpense;
  }
};

console.log(personAccountTwo);
console.log(personAccountTwo.totalIncomes());
console.log(personAccountTwo.totalExpenses());
console.log(personAccountTwo.accountBalance());
console.log(personAccountTwo.addIncome('other', 200));
console.log(personAccountTwo.addIncome('extra', 100));
console.log(personAccountTwo.addExpense('other', 150));
console.log(personAccountTwo.totalExpenses());

const nums = [1, 2, 3, 4, 5];
const squareNums = nums.map(num => {
  return num * num;
});
console.log(squareNums);

const countries = ['iceland', 'finland', 'sweden', 'norway', 'netherland'];
const landCountries = countries.filter(country => {
  if (country.includes('land')) return country;
});
console.log(landCountries);

const sixCharCountries = countries.filter(country => {
  if (country.length == 6) return country;
});
console.log(sixCharCountries);

const points = [1, 2, 3, 4, 5, 6];

// *** check if a number is a prime number

let arr = [0, 1, 2, 3, 4, 5, 6, 7.5, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const primeNums = array => {
  let primes = [];

  function isPrime(num) {
    if (num <= 1 || Number.isInteger(num) === false) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  for (n = 0; n < array.length; n++) {
    if (isPrime(array[n])) {
      primes.push(array[n]);
    }
  }
  return primes;
};
console.log(primeNums(arr));

//  or using high order function: filter

let numsArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeArr = numsArr.filter(number => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(primeArr);

//  or ??

for (var counter = 0; counter <= 100; counter++) {
  var notPrime = false;
  for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(counter);
  }
}
