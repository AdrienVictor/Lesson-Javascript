// *** question 1: Write a function which count the number of occurrence of a word in a paragraph or a sentence.The function countWords takes a paragraph and word as parameters.

const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

const wordCount = (para, word) => {
  let regEx = new RegExp(word, 'gi');
  return para.match(regEx) == null ? 0 : para.match(regEx).length;
};
console.log(wordCount(paragraph, ''));

// *** question 2: Write a function which takes an array parameter and returns an array of the data types of each item:

const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];
const mixedData = ['John', 25, 'David', 30, 'Sara', 22];

const dataType = array => {
  for (let index = 0; index < array.length; index++) {
    array[index] = typeof array[index];
  }
  return array;
};
console.log(dataType(arr));

// *** question 3: Create a function which filter ages greater than 18.

const ages = [35, 30, 17, 18, 15, 22, 16, 20];

const ageCheck = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 18 ? newArr.push(arr[i]) : '';
  }
  return newArr;
};
console.log(ageCheck(ages));

// *** question 4: Write a function which remove an item or items from the middle of the array and replace with two items

const replaceMiddle = (arr, addOne, addTwo) => {
  arr.length % 2 != 0
    ? arr.splice(Math.floor(arr.length - 1) / 2, 1, addOne, addTwo)
    : arr.splice(Math.floor(arr.length - 1) / 2, 2, addOne, addTwo);

  return arr;
};
console.log(replaceMiddle(ages, 'hi', 'world'));

// *** question 5: Write a function which calculate the average age of the group.

const groupAges = [35, 30, 17, 18, 15, 22, 16, 20];

const averageAge = arr => {
  let average = arr.reduce((a, b) => a + b) / arr.length;
  return `the average age is ${average.toFixed()}yo`;
};
console.log(averageAge(groupAges));

// *** question 6: Write a function which can generate a random Finnish car code.

const genCarPlate = () => {
  let n = 3;
  let numA = '';
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numB = '';
  while (n--) {
    numA += letters.charAt(Math.floor(Math.random() * letters.length));
    numB += Math.floor(Math.random() * 10).toString(10);
  }
  return `${numA}-${numB}`;
};
console.log(genCarPlate());

// *** question 7: Write a function which can generate a random Finnish social security number.

const finnishId = () => {
  let options = { year: '2-digit', month: '2-digit', day: '2-digit' };
  let randomDate = new Date(+new Date() - Math.floor(Math.random() * 1000000000000));
  let date = randomDate.toLocaleString('en-US', options).split('/');
  console.log(date);
  let day = date[0];
  let month = date[1];
  let year = date[2];

  let min = Math.ceil(100);
  let max = Math.floor(899);
  let digits = Math.floor(Math.random() * (max - min)) + min;

  let string = '0123456789ABCDEFHJKLMNPRSTUVWXY';
  let character = string.charAt(Math.floor(Math.random() * string.length));
  console.log(character);

  console.log(date[0]);

  let id = `${day}${month}${year}-${digits}${character}`;

  return `your new finnish id is: ${id}`;
};
console.log(finnishId());

// *** question 8: The following shopping cart has four products. Create an addProduct, removeProduct and editProduct functions to modify the shopping cart. Add , remove, edit at least one product

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const addProduct = item => {
  let newCart = shoppingCart.slice();
  newCart.push(item);
  return newCart;
};
console.log(addProduct('Meat'));

const editProduct = (i, item) => {
  let newCart = shoppingCart.slice();
  newCart.splice(i, 0, item);
  return newCart;
};
console.log(editProduct(3, 'Sugar'));

const removeProduct = i => {
  let newCart = shoppingCart.slice();
  i > -1 ? newCart.splice(i, 1) : '';
  return newCart;
};
console.log(removeProduct(2));

// *** question 9: The following todoList has three tasks. Create an addTask, removeTask and editTask functions to modify the todoList. Add, remove or edit at least on task

const todoList = [
  {
    task: 'Prepare JS Test',
    time: '3/1/2019 12:00',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '3/1/2019 1:00',
    completed: false
  },
  {
    task: 'Sprint Retrospective',
    time: '3/1/2019 3:00',
    completed: false
  }
];

const addTask = taskName => {
  let newTodo = [...todoList]; //using spread operator [...]
  console.log(newTodo);

  let newTask = { task: '', time: '', completed: '' };
  newTask.task = taskName;
  newTask.time = new Date().toLocaleString();
  newTask.completed = false;
  newTodo.push(newTask);
  return newTodo;
};
console.log(addTask('test'));

const removeTask = taskName => {
  let newTodo = todoList.slice();
  console.log(newTodo[0]);
  for (let i = 0; i < newTodo.length; i++) {
    newTodo[i].task == taskName ? newTodo.splice(i, 1) : '';
  }

  return newTodo;
};
console.log(removeTask('Prepare JS Test'));

const editTask = (taskName, newName) => {
  let newTodo = todoList.slice();
  for (let i = 0; i < newTodo.length; i++) {
    newTodo[i].task == taskName ? (newTodo[i].task = newName) : '';
  }
  return newTodo;
};
console.log(editTask('Sprint Retrospective', 'edit task'));

// *** questionn 10: Write a function which check if items of an array are unique?
const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];

const uniqueTest = array => {
  for (let i = 0; i < array.length; i++) {
    return array.includes(array[i], i + 1) ? true : false;
  }
};
console.log(uniqueTest(arrTwo));

// *** bonus question: Write a function which filter users who has scoresGreaterThan85, Write a function which addUser to the user array only if the user does not exist. Write a function which addUserSkill which can add skill to a user only if the user exist. Write a function which editUser if the user exist in the users array.

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
