// *** - Learn if a number or a word is a palindrome or not

const paragraph = 'Red rum, sir, is murder';

const isPalindrome = () => {
  let pattern = /[\W_]+/g;

  let str = paragraph
    .replace(pattern, '')
    .split('')
    .join('')
    .toLowerCase();

  let reverseStr = str
    .split('')
    .reverse()
    .join('')
    .toLocaleLowerCase();

  return str === reverseStr;
};
console.log(isPalindrome());

// *** - Learn how to solve equation: linear or quadratic

const solvQuadEquation = (a, b, c) => {
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
};
console.log(solvQuadEquation(2, -10, -7));

// *** - Learn to check if a number is even, odd or prime

let arr = [0, 1, 2, 3, 4, 5, 6, 7.5, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const primeNums = array => {
  let primes = [];
  let odds = [];
  let evens = [];

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
    if (array[n] % 2 === 0) {
      evens.push(array[n]);
    } else odds.push(array[n]);
  }
  return `primes: ${primes}, odds: ${odds}, evens: ${evens}`;
};
console.log(primeNums(arr));

// *** - Learn how to check if a value is empty or not

const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};
console.log(isEmpty(123));

// or

// const isEmpty = (value) => {
//   if (typeof value === "number") {
//     return false;
//   }
//   return (
//     value === null
//     || value === undefined
//     || (typeof value === "string" && value.trim().length === 0)
//     || Object.keys(value).length === 0
//   );
// };
