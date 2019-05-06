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
  if (j % 3 == 0) {
    console.log('buzz');
  }
  if (j % 5 == 0 && j % 3 != 0) {
    test.push('fizz');
    console.log('fizz');
  }

  j++;

  console.log(j);
}
console.log(test.length);
