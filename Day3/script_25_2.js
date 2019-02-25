// MATH METHODS
const PI = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
console.log(Math.sqrt(2));
console.log(Math.abs(-10));

function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;
  return area.toFixed(2);
}
console.log(areaOfCircle(10));

console.log("4");
console.log(parseInt("4"));
console.log(Number("4"));

console.log(Math.random() * 10 + 1);

function rgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(rgbColor());

// SCOPE

function varTest() {
  let x = 1;
  console.log(x);
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
varTest();
//  let is working on in the scope block and can only be used one
// var can be used anywhere and is not contained to only one scope

for (var i = 0; i < 6; i++) {
  console.log(i);
}
// console.log(i);
// with var i=6 with let i get undeclared

// const: ones is set you dont need to worry about it anymore- is it a set fixed value
// const PI = Math.PI;
const GRAVITY = 9.8;
const numbers = [1, 2, 3, 4, 5];
const countries = ["albania", "canada", "france"];

// ARRAY METHODS
// push, pop, shift, unshift
numbers.push(6);
console.log(numbers);
const arr = [];
for (let i = 0; i < 10; i++) {
  let i = Math.floor(Math.random() * 11);
  arr.push(i);
}
console.log(arr);

const names = ["david", "marta", "jane", "john"];
names.pop();
console.log(names);
// names.unshift("marta");
names.shift();
console.log(names);

// FUNCTIONS

function fullName() {
  let firstName = "adrien";
  let lastName = "fernandez";
  return firstName + " " + lastName;
}
console.log(fullName());

function square(number) {
  return number * number;
}
console.log(square(10));

const fullNameNew = function(firstName, lastName) {
  return firstName + " " + lastName;
};
console.log(fullNameNew("adrien", "fernandez"));

// arrow functions
const fullNameThree = (firstName, lastName) => firstName + " " + lastName;

// OBJECTS

const person = {
  firstName: "adrien",
  lastName: "fernandez",
  age: 29,
  job: "student",
  skills: ["html5", "css3", "JS"],
  isMarried: false,
  getPersonInfo: function() {
    return `I am ${this.firstName} ${this.lastName}. I am ${
      this.age
    } years old.`;
  }
};
console.log(person);
console.log(person.getPersonInfo());

const rectangle = {
  length: 100,
  width: 20,
  getAreaOfRectangle: function() {
    return this.length * this.width;
  },
  getParameterOfRectangle: function() {
    return 2 * (this.length + this.width);
  }
};
console.log(rectangle.getAreaOfRectangle());
console.log(rectangle.getParameterOfRectangle());
