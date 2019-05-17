// *** question 1: Looping a triangle Write a loop that makes seven calls to console.log to output the following triangle:

let i = 7;
let r = '';
while (i--) {
  r += '#';
  r;
  //   return triangle;
  console.log(r);
}

// *** question 2: FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those).

let j = 1;
let test = [];
while (j < 100) {
  if (j % 3 == 0 && j % 5 == 0) {
    test.push('fizzbuzz');
  }
  if (j % 3 == 0) {
    test.push('fizz');
    console.log('fizz');
  }
  if (j % 5 == 0 && j % 3 != 0) {
    test.push('buzz');
    console.log('fizz');
  } else test.push(j);

  j++;

  console.log(j);
}
console.log(test);

// *** question 3: Maximum Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.

const findMax = (a, b, c) => {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  if (c > a && c > b) return c;
};
console.log(findMax(0, -10, -5));

// *** question 4: Reversing an array Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

const reverseArray = arr => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};
console.log(reverseArray(['a', 'b', 'c', 'd']));

// *** question 5: Modifying an array Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and returns the array. If the array length is less than five it return ‘item not found’.

const modifyArray = arr => {
  if (arr.length < 5) return 'item not found';
  else {
    let index = arr[4].toUpperCase();
    arr.splice(4, 1, index);
  }

  return arr;
};
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Integrify']));

// *** question 6: Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

const sevenRandomNumbers = () => {
  let arr = [];
  while (arr.length < 7) {
    let r = Math.floor(Math.random() * 10);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};
console.log(sevenRandomNumbers());

// *** question 7: Write a funch which takes any number of arguments and return the sum of the arguments

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 10));

// *** question 8: Write a function which removes items from the middle of an array and replace with three items.

const removeMiddleAddthree = (array, itemOne, itemTwo, itemThree) => {
  if (array.length % 2 != 0)
    array.splice(Math.floor(array.length / 2), 1, itemOne, itemTwo, itemThree);
  else array.splice(Math.floor(array.length / 2), 2, itemOne, itemTwo, itemThree);

  return array;
};
console.log(removeMiddleAddthree([1, 2, 3, 4], 4, 5, 6));

// question 9: Calculate the total annual income of the person by extracting the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// method1:

const amountCheck = () => {
  let amounts = [];
  let arr = text.split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(isNaN(arr[i]));
    if (!isNaN(arr[i])) {
      amounts.push(Number(arr[i]));
    }
  }
  let salary = amounts[0] * 12;
  let bonus = amounts[1];
  let courses = amounts[2] * 12;

  console.log(salary + bonus + courses);
  return salary + bonus + courses;
};
console.log(amountCheck());

// method 2:

let incomeNumbers = text.match(/\d+/g);
console.log(incomeNumbers);

let salary = 12 * +incomeNumbers[0];
let bonus = +incomeNumbers[1];
let courses = 12 * +incomeNumbers[2];

let income = salary + bonus + courses;
console.log(income);

// question 10: Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false . Take two strings as arguments. Determine if second string matches ending of first string. Return boolean value.

const matchFunc = (string1, string2) => {
  let ending = string1.slice(-string2.length);
  return ending == string2 ? true : false;
};
console.log(matchFunc('integrity', 'ity'));
