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

console.log(`${itCompanies} are big IT companies`);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

function findCompany(companyName) {
  return companyName === "apple";
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
