//Sorting Numbers
const numbers = [10, 2, 13, 4, 15];

//Copying the original before manipulating in different way
// const copyNumbers = numbers.slice(0);
const copyNumbers = [].concat(numbers);
//console.log(copyNumbers);
const copyNumbers = [...numbers];
copyNumbers.sort(function(a, b) {
  return b - a;
});

const names = ['david', 'drook', 'dsab', 'darri'];
//Copy the names before you use sorting or reversing methods
// const copyNames = names.slice(0);
const copyNames = [...names];
const sortedNames = copyNames.sort(function(a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) {
    return -1;
  }
});
console.log(sortedNames);

//Sorting array of objects
console.log(countriesObject.reverse());
const copyCountriesObject = [...countriesObject];
const sortByCity = copyCountriesObject.sort(function(a, b) {
  if (a.capital > b.capital) {
    return -1;
  }
  if (a.capital < b.capital) {
    return 1;
  }
  return 0;
});
console.log(sortByCity);
console.log(numbers);
