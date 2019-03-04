// question1
const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

function countWords(paragraph, word) {
  let regularExpression = new RegExp(word, "g");
  if (paragraph.match(regularExpression) == null) {
    return 0;
  }

  return paragraph.match(regularExpression).length;
}
console.log(countWords(paragraph, "love"));
// question2

const arr = ["Asabeneh", 100, true, null, undefined, { job: "teaching" }];

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

console.log(agesGreaterEighteen(ages));

// question4
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];

function removeMiddleAddNew(array) {
  if (array.length % 2 != 0) array.splice(Math.floor(array.length / 2), 1);
  else array.splice(Math.floor(array.length / 2), 2);

  return array;
}
console.log(removeMiddleAddNew(itCompanies));

// question5
function averageAge(array) {
  let sum =
    array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0) / array.length;
  let sumInterger = sum.toFixed();
  let i = array.length;
  while (i--)
    if (typeof array[i] === "string")
      return "your array must only contain numbers";
    else return `the avarage of the class is ${sumInterger} years old`;
}
console.log(averageAge(ages));

// question6

function genCarPlateNum() {
  let n = 3;
  let numA = "";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numB = "";
  while (n--) {
    numA += letters.charAt(Math.floor(Math.random() * letters.length));
    numB += Math.floor(Math.random() * 11).toString(11);
  }
  //   while (m--) numB += (Math.random() * 10).toString(10);
  //   return `${numA}-${numB}`;
  return `${numA}-${numB}` || `${numB}-${numA}`;
}
console.log(genCarPlateNum());

// question7

function genSocialSecurityNum() {}

// question8

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

function addProduc(array, newItem) {
  let newArray = array.slice();
  newArray.push(newItem);
  return newArray;
}
console.log(addProduc(shoppingCart, "Mango"));

function editProduct(array, i, newItem) {
  let newArray = array.slice();
  newArray.splice(i, 0, newItem);
  return newArray;
}
console.log(editProduct(shoppingCart, 2, "Sugar"));

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
  return "no duplicates to be found";
}
console.log(checkUniqueItem(arrOne));
console.log(checkUniqueItem(arrTwo));
