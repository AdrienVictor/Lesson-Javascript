// 1 *** Create a function which solve quadratic equation ax2 + bx + c = 0. A quadratic equation may have one, two or no solution. The function should return a set of the solution/s.

const solvQuadEquation = (a, b, c) => {
  let delta = b ** 2 - 4 * a * c;
  console.log(delta);
  if (a == null || b == null || c == null) return 'Enter values for a, b and c';
  if (delta < 0) return 'the solution does not exist';
  else if (delta === 0) {
    let result = -b / (2 * a);
    return `The solution is ${result}`;
  } else {
    let result1 = (-b + Math.sqrt(delta)) / (2 * a);
    let result2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `There are two solutions: ${result1} and ${result2}`;
  }
};

console.log(solvQuadEquation());
console.log(solvQuadEquation(1, 4, 4));
console.log(solvQuadEquation(1, -1, -2));
console.log(solvQuadEquation(1, 7, 12));
console.log(solvQuadEquation(1, 0, -4));
console.log(solvQuadEquation(1, 0, -4));
console.log(solvQuadEquation(1, -1, 0));

// 2 *** Create a function called isPrime which check if a number is prime or not.

const isPrime = num => {
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
};

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));

// 3 *** Write a function rangeOfPrimes. It takes two parameters, a starting number and an ending number . The function returns an object with properties primes and count. The primes value is an array of prime numbers and count value is the number of prime numbers in the array.

const rangeOfPrimes = (start, end) => {
  let primes = [];
  let primesObj = { primes: '', count: '' };

  for (n = start; n <= end; n++) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }
  primesObj.primes = primes;
  primesObj.count = primes.length;
  return primesObj;
};

console.log(rangeOfPrimes(2, 11));
console.log(rangeOfPrimes(50, 60));
console.log(rangeOfPrimes(95, 107));

// 4 Create a function called isEmpty which check if the parameter is empty. If the parameter is empty, it returns true else it returns false.

const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

console.log(isEmpty(''));
console.log(isEmpty(' '));
console.log(isEmpty('Asabeneh'));
console.log(isEmpty([]));
console.log(isEmpty(['html', 'ccs', 'js']));
console.log(isEmpty({}));
console.log(isEmpty({ name: 'asabeneh', age: 200 }));

// 5a *** Create a function called reverse which take a parameter and it returns the reverse of the parameter. Don't use the built in reverse method.

const reverse = arr => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray.join('');
};

console.log(reverse('cat'));
console.log(reverse('123'));

// 5b *** Create a function called isPalindrome which check if a parameter is a palindrome or not.

const isPalindrome = parameter => {
  let pattern = /[\W_]+/g;
  let newStr = [];

  let str = parameter
    .toString()
    .replace(pattern, '')
    .split('')
    .join('')
    .toLowerCase();

  let splitStr = str.split('');
  for (let i = splitStr.length - 1; i >= 0; i--) {
    newStr.push(splitStr[i]);
  }
  reverseStr = newStr.join('').toLocaleLowerCase();

  return str === reverseStr;
};
console.log(isPalindrome('Anna'));
console.log(isPalindrome(121));
console.log(isPalindrome('Noon'));
console.log(isPalindrome('Asa '));
console.log(isPalindrome('Asab'));
console.log(isPalindrome('cat'));

// 6 *** Create a function called countPalindrowWords which counts the number of palindrome words in the palindoromeWords array or in any array.
const palindromeWords = [
  'Anna',
  'Asa',
  'Civic',
  'common',
  'Kayak',
  'Level',
  'Madam',
  'Mom',
  'Noon ',
  'Rotor',
  'Sagas',
  'Solar',
  'Stats',
  'Tenet ',
  'Wow'
];

const countPalindrowWords = array => {
  let palindromes = [];

  for (let i = 0; i < array.length; i++) {
    if (isPalindrome(array[i])) {
      palindromes.push(array[i]);
    }
  }
  return `The array contains ${palindromes.length} palindromes!`;
};

console.log(countPalindrowWords(palindromeWords));

// 7 *** Count the number of palindrome words in the following sents.

const sentence = `He met his mom at noon and she was watching an epsoide of the begninging of her Solos. Her tenet helped her to level up her stats. After that he went to kayak driving Civic Honda.`;

const countPalindroSentence = sentence => {
  let arr = sentence.split(' ');
  palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  return `There are ${palindromes.length} palindromes in the sentence`;
};

console.log(countPalindroSentence(sentence));

// 8 *** Imagine you are getting the above users collection from a MongoDB database.
// ***      a.Create a function called signUp which allows user to add to the collection.If user exists, inform the user that he has already an account.

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '17/05/2019 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '17/05/2019 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '17/05/2019 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '17/05/2019 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '17/05/2019 10:00 AM',
    isLoggedIn: false
  }
];

const signUp = (arr, userName, email, password) => {
  let newUser = { userName: '', _id: '', email: '', password: '', createdAt: '' };
  let date = new Date().toLocaleString();

  function idGen() {
    let n = 7;
    id = '';
    while (n--) {
      id += ((Math.random() * 36) | 0).toString(36);
    }
    return id;
  }

  console.log(idGen());

  newUser.username = userName;
  newUser._id = id;
  newUser.email = email;
  newUser.password = password;
  newUser.createdAt = date;
  newUser.isLoggedIn = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username === newUser.userName || arr[i].email === newUser.email) {
      return 'You already created an account';
    }
  }
  arr.push(newUser);
  return arr;
};

console.log(signUp(users, 'Adrien', 'adrien@adrien.com', '123456'));
console.log(signUp(users, 'Adrien', 'thomas@thomas.com', '123456'));
console.log(signUp(users, 'Thomas', 'thomas@thomas.com', '123456'));

// ***       b.Create a function called signIn which allows user to sign in to the application

const signIn = (arr, userName, email, password) => {
  let found = false;
  let welcome = '';
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].username === userName &&
      arr[i].email === email &&
      arr[i].password === password
    ) {
      console.log(arr[i].username);
      found = true;
      arr[i].isLoggedIn = true;
      welcome = `welcome back ${arr[i].username}`;
    }
    if (!found) {
      welcome = `please check your username, email or password :)`;
    }
  }
  return welcome;
};

console.log(signIn(users, 'Thomas', 'thomas@thomas.com', '123333'));

// 9 *** The products array has three elements and each of them has six properties.
// ***       a.Create a function called rateProduct which rates the product

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    Rating: [{ userId: 'fg12cy', rating: 5 }, { userId: 'zwf8md', rating: 4.5 }],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    Rating: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    Rating: [{ userId: 'fg12cy', rating: 5 }],
    likes: ['fg12cy']
  }
];

const rateProduct = (arr, productId, userId, rating) => {
  let found = false;
  let newRating = { userId: '', rating: '' };
  newRating.userId = userId;
  newRating.rating = rating;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === productId) {
      found = true;
      arr[i].Rating.push(newRating);
    }
    if (!found) 'the product name or id is invalid';
  }
  return arr;
};

console.log(rateProduct(products, 'aegfal', 'zwf8md', 3.5));
console.log(products[1].Rating);

//  ***   b.Create a function called averageRating which calculate the average rating of a product

const averageRating = (arr, productId) => {
  let found = false;
  let ratings = [];
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]._id);

    if (arr[i]._id === productId) {
      found = true;
      for (let j = 0; j < arr[i].Rating.length; j++) {
        ratings.push(arr[i].Rating[j]);
      }
    }
  }
  if (!found) return 'please enter a valid product Id';
  for (let x = 0; x < ratings.length; x++) {
    sum.push(ratings[x].rating);
  }
  let average = sum.reduce((a, b) => a + b, 0) / sum.length;

  return `The average rating for the product is ${average}.`;
};

console.log(averageRating(products, 'eedfcf'));
console.log(averageRating(products, 'aegfal'));
console.log(averageRating(products, 'hedfcg'));

// 10 *** Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (arr, productId, userId, like) => {
  let found = false;
  if (like === true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].likes[i] === userId) {
        console.log(arr[i].likes[i]);
        return 'You already liked the product';
      }
      if (arr[i]._id === productId) {
        arr[i].likes.push(userId);
        found = true;
      }

      if (!found) return 'please enter a valid product Id';
    }
  }
  if (like === false) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].likes[i] === userId) {
        let index = arr[i].likes[i].indexOf(userId);
        arr[i].likes.splice(index, 1);
        found = true;
      }
      if (!found) return 'please enter a valid product Id';
    }
  }
  return arr;
};
console.log(likeProduct(products, 'eedfcf', 'eefamr', (like = true)));
console.log(likeProduct(products, 'eedfcf', 'ghderc', (like = true)));
console.log(likeProduct(products, 'eedfcf', 'eefamr', (like = false)));
console.log(products);
