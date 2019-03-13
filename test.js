// question1
const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

// function countWordsSolution(text, word) {
//   let para = paragraph.split(" ");
//   let count = 0;
//   for (let i = 0; i < para.length; i++) {
//     if (para[i].includes(word)) count += 1;
//   }
//   return count;
// }
// console.log(countWordsSolution(paragraph, "love"));

const countWordsBestSolution = (text, word) => {
  let regularExpression = new RegExp(word, 'gi'); //create a new regEx that check for the word parameter using global and case insensitive
  if (paragraph.match(regularExpression) == null) {
    return 0;
  }
  return paragraph.match(regularExpression).length;
};
console.log(countWordsBestSolution(paragraph, ''));

// function countWords(paragraph, word) {
//   let regularExpression = new RegExp(word, "g");
//   if (paragraph.match(regularExpression) == null) {
//     return 0;
//   }

//   return paragraph.match(regularExpression).length;
// }
// console.log(countWords(paragraph, "love"));
// question2

const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];

function dataTypes(array) {
  for (i = 0; i < array.length; i++) array[i] = typeof array[i];

  return array;
}

console.log(dataTypes(arr));

// question3

const ages = [35, 30, 17, 18, 15, 22, 16, 20];

function agesGreaterEighteen(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) if (ages[i] > 18) newArray.push(ages[i]);
  return newArray;
}
const ageChecker = ages.filter(age => {
  return age > 18;
});
console.log(ageChecker);

console.log(agesGreaterEighteen(ages));

// question4
let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];

function removeMiddleAddNew(array, newOne, newTwo) {
  if (array.length % 2 != 0)
    array.splice(Math.floor(array.length / 2), 1, newOne);
  else array.splice(Math.floor(array.length / 2), 2, newOne, newTwo);

  return array;
}
console.log(removeMiddleAddNew(itCompanies, 'Integrify', 'Smartly'));

// question5
function averageAge(array) {
  let sum =
    array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0) / array.length;
  let sumInterger = sum.toFixed();
  let i = array.length;
  while (i--)
    if (typeof array[i] === 'string')
      return 'your array must only contain numbers';
    else return `the avarage of the class is ${sumInterger} years old`;
}
console.log(averageAge(ages));

// question6

function genCarPlateNum() {
  let n = 3;
  let numA = '';
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numB = '';
  while (n--) {
    numA += letters.charAt(Math.floor(Math.random() * letters.length));
    numB += Math.floor(Math.random() * 10).toString(10);
  }
  //   while (m--) numB += (Math.random() * 10).toString(10);
  //   return `${numA}-${numB}`;
  return `${numA}-${numB}` || `${numB}-${numA}`;
}
console.log(genCarPlateNum());

// question7

function genSocialSecurityNum() {
  let day = Math.ceil(Math.random() * 31);
  let month = Math.ceil(Math.random() * 12);
  let year = Math.floor(Math.random() * 100);

  return day;
}
console.log(genSocialSecurityNum());
// question8

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

function addProduc(array, newItem) {
  let newArray = array.slice();
  newArray.push(newItem);
  return newArray;
}
console.log(addProduc(shoppingCart, 'Mango'));

function editProduct(array, i, newItem) {
  let newArray = array.slice();
  newArray.splice(i, 0, newItem);
  return newArray;
}
console.log(editProduct(shoppingCart, 2, 'Sugar'));

function removeProduct(array, indexNum) {
  let newArray = array.slice();
  let index = newArray.indexOf(indexNum);
  if (index > -1) {
    newArray.splice(index, 1);
  }
  return newArray;
}
console.log(removeProduct(shoppingCart, 3));

// question10
const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];

function checkUniqueItem(array) {
  for (i = 0; i < array.length; i++)
    if (array.includes(array[i], i + 1))
      return `array contains duplicates: ${array[i]}`;
  return 'no duplicates to be found';
}
console.log(checkUniqueItem(arrOne));
console.log(checkUniqueItem(arrTwo));

// question 11

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

function scoresGreaterThan85(array) {
  // return users.filter(userItem => userItem.scores > 85);
  let newArray = [];
  for (i = 0; i < array.length; i++)
    if (users[i].scores > 85) newArray.push(users[i]);
  return newArray;
}
console.log(scoresGreaterThan85(users));

function addUser(newUser) {
  let checkUser = users.filter(oldUser => oldUser.name === newUser.name);
  if (checkUser.length === 0) users.push(newUser);
  return newUser;
}
console.log(
  addUser({
    name: 'Adrien',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 29
  })
);

console.log(users);

function addUserSkill(userName, newSkill) {
  let checkUser = users.filter(oldUser => oldUser.name === userName);
  if (checkUser.length > 0) checkUser[0].skills.push(newSkill);
  return `${userName} learned ${newSkill}`;
}
console.log(addUserSkill('Thomas', 'React'));

function editUser(userName, newUserData) {
  let checkUser = users.filter(oldUser => oldUser.name === userName);
  if (checkUser.length > 0) {
    users.splice(users.indexOf(checkUser[0]), 1);
    users.push(newUserData);
  }
}
console.log(
  editUser('Adrien', {
    name: 'Adrian',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 29
  })
);
console.log(users);

// EXTRAS
// generate random date between a starting and an ending date
function randomDate(start, end) {
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  console.log(date);

  return date
    .toISOString() //change the date into a string
    .slice(2, 10) //slice the english date from the two last digit of the year
    .replace(/-/g, '') //remove the hyphen between the year month and date
    .match(/../g) //pack the numbers in two
    .reverse()
    .join(''); //join to turn the array into a string
}
console.log(randomDate(new Date(1900, 0, 1), new Date(2020, 11, 31)));
