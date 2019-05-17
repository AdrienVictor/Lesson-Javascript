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

// *** - Learn how to modify an object, understanding  the bonus part of the previous exam could help a lot

const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
];

const scoresGreaterThan85 = arr => {
  const scores = [];
  arr.forEach(element => {
    element.scores > 85 ? scores.push(element.name) : '';
  });
  return scores;
};
console.log(scoresGreaterThan85(users));

const addUser = (arr, name, score, skills, age) => {
  newUser = { name: '', score: '', skills: '', age: '' };
  newUser.name = name;
  newUser.score = score;
  newUser.skills = skills;
  newUser.age = age;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === newUser.name) {
      return ' User does exist';
    }
  }
  arr.push(newUser);
  return arr;
};
console.log(addUser(users, 'Adrien', 90, ['html', 'css', 'js', 'react'], 29));

const addSkill = (arr, name, skill) => {
  let found = false;
  arr.forEach(user => {
    if (user.name == name) {
      user.skills.push(skill);
      found = true;
    }
  });
  if (!found) {
    return 'user not found';
  }
  return arr;
};
console.log(addSkill(users, 'Sara', 'redux'));

const editUser = (arr, name, newName, newScore, newSkills, newAge) => {
  let found = false;

  arr.forEach(user => {
    if (user.name === name) {
      user.name = newName;
      user.scores = newScore;
      user.skills = newSkills;
      user.age = newAge;
      found = true;
    }
  });
  if (!found) {
    return 'user not found';
  }
  return arr;
};
console.log(editUser(users, 'David', 'Asabeneh', 800, ['HTML', 'CSS', 'JS'], 250));

// *** - Learn how to solve equation: linear or quadratic

const solvLinEquation = (a, b, y) => {
  let answer = (y - b) / a;
  return `x= ${answer}`;
};
console.log(solvLinEquation(5, 6, 10));

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
