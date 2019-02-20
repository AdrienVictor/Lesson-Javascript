//   alert("hi everyone");
/*  today
                    we will talk about
                    variables
                    data types
                    and others*/

var firstName = "Adrien";
console.log(firstName.length);
console.log(firstName.toUpperCase());
var firstLetter = firstName.slice(0, 1);
var remainingLetters = firstName.slice(1, firstName.length);
console.log(firstLetter);
console.log(remainingLetters);
var school = "Integrify Academy";
console.log(school);
var modifiedSchool = school.split(" ");
console.log(school.split(" "));
var school = "Integrify Academy Africa";
console.log(school.indexOf("A"));
// INCLUDE

var school = "Integrify Academy Africa";
console.log(school.includes("demy"));
console.log(school.startsWith("I"));

//DATA TYPES

//

var lastName = "Fernandez";
console.log(lastName);
console.log(typeof lastName);
var age = 29;
console.log(age);
console.log(typeof age);
var country = "Finland";
//   var fullName = firstName + " " + lastName;
console.log(firstName);
//   console.log(fullName);
//   var personInfo = fullName + ".I am " + age + ".I live in " + country;
//   USING BACKTICKS FOR MAKING IT "EASIER"
//   var personInfo = `I am ${fullName}.I am ${age}.I live in ${country}`;
//   console.log(personInfo);
var numOne = 10;
var numTwo = 20;
var sum = numOne % numTwo;
console.log(sum);
var weather = "sunny";
//   JS OPERATORS
//   ===, ==, <,>,<=, >=, !=

// DIFFERENT WAY TO WRTIE IF ELSE USING SWITCH
//   if (weather === "rainy")
//     console.log("It is raining.You need your raincoat");
//   else if (weather === "cloudy")
//     console.log("it might be cold, take a jacket");
//   else if (weather === "sunny") console.log("bring your sunglasses");
//   else console.log("dont you worry, no need for raincoat");
switch (weather) {
  case "rainy":
    console.log("It is raining.You need your raincoat");
    break;
  case "cloudy":
    console.log("it might be cold, take a jacket");
    break;
  case "sunny":
    console.log("bring your sunglasses");
    break;
  default:
    console.log("dont you worry, no need for raincoat");
    break;
}

//   FOR LOOP
for (var i = 1; i <= 10; i++) {
  console.log(`${i}*${i}=${i * i}`);
}
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
var j = 0;
do {
  console.log(`${j}*${j}=${j * j}`);
  j++;
} while (j <= 10);

//   FUNCTIONS
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
printFullName("adrien", "fernandez");
printFullName("Dean", "Phan");

function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(addNumbers(5, 4));

function square(number) {
  return number * number;
}
console.log(square(10));

function multiplyTwoNumbers(parameter1, parameter2) {
  return parameter1 * parameter2;
}
//   ARRAYS
console.log(multiplyTwoNumbers(23, 11));
var shoppingCart = [
  "milk",
  "tofu",
  "cucumber",
  "tomatoes",
  "keiju",
  "bread",
  "salad"
];
console.log(`This is what I have in my basket: ${shoppingCart}`);
console.log(`I have ${shoppingCart[0]} in my basket`);
console.log(`I have ${shoppingCart[1]} in my basket`);
console.log(`I have ${shoppingCart[2]} in my basket`);
console.log(`I have ${shoppingCart[3]} in my basket`);
console.log(`I have ${shoppingCart[4]} in my basket`);
console.log(`I have ${shoppingCart[5]} in my basket`);
console.log(`I have ${shoppingCart[6]} in my basket`);
console.log(`I have ${shoppingCart.length} items in my basket`);
// FASTER WAY TO GET THE LISTED ITEMS
for (var i = 0; i < shoppingCart.length; i++) {
  console.log(`I put ${shoppingCart[i]} in my basket`);
}
for (var i = shoppingCart.length - 1; i >= 0; i--) {
  console.log(`I get ${shoppingCart[i]} from my basket`);
}

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[1]);
console.log(numbers.length);

function sumArrayValues(arr) {
  for (i = 0; i < numbers.length; i++) {
    var sum = 0;
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumArrayValues(numbers));
