const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

/*
Declaration function
      function countWords(para, word) {
        const formatedPara = para.split(' ');
        let count = 0;
        for (let i = 0; i < formatedPara.length; i++) {
          if (formatedPara[i].includes(word)) {
            count = count + 1;
          }
        }
        return count;
      }
      console.log(countWords(paragraph, 'love'));
      */

/*
      Expression function
      const countWords = function (para, word) {
            const formatedPara = para.split(' ');
            let count = 0;
            for (let i = 0; i < formatedPara.length; i++) {
                if (formatedPara[i].includes(word)) {
                    count = count + 1;
                }
            }
            return count;
        }
        console.log(countWords(paragraph, 'love'));
        */
/*
        Arrow function
          const countWords = (para, word) => {
                const formatedPara = para.split(' ');
                let count = 0;
                for (let i = 0; i < formatedPara.length; i++) {
                    if (formatedPara[i].includes(word)) {
                        count = count + 1;
                    }
                }
                return count;
            }
            console.log(countWords(paragraph, 'love'));
            */

/*Regular express
      const countWords = (para, word) => {
        const pattern = new RegExp(word, 'gi');
        const matches = para.match(pattern);
        let count = matches === null ? 0 : matches.length;
        return count;
      };
      console.log(countWords(paragraph, 'love'));
      */

const countWords = (para, wrd) => {
  const formatedPara = para.split(' ');
  let count = 0;
  for (let word of formatedPara) {
    if (word.includes(wrd)) {
      count = count + 1;
    }
  }

  return count;
};
console.log(countWords(paragraph, 'love'));

const person = {
  name: 'David',
  age: 200,
  country: 'Finland'
};
//   for (let key in person) {
//     console.log(key);
//   }
const names = ['Hari', 'Koray', 'Alba'];
console.log(names);
//   for (let index in names) {
//     console.log(index);
//     console.log(names[index]);
//   }

//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }

/*
      names.forEach(function(name, i) {
        console.log(i + 1, name.toUpperCase());
      });
      */

names.forEach((name, i) => console.log(i + 1, name.toUpperCase()));

const newNames = names.map(function(name, i) {
  if (name !== 'Koray') {
    return name.toUpperCase();
  }
  return name;
});
const nums = [0, 1, 2, 3, 4, 5];
console.log(nums);
const numsSquare = nums.map(function(num, i) {
  return num * num;
});
console.log(numsSquare);

const numbersGreater2 = nums.filter(function(num, i) {
  return num > 2;
});
console.log(numbersGreater2);

const countries = [
  'Finland',
  'Scotland',
  'Sweden',
  'Iceland',
  'Norway',
  'Netherland'
];
//   const countriesWithLand = countries.filter(function(country) {
//     return country.includes('land');
//   });
//   console.log(countriesWithLand);
//   const countriesHavingSixLetters = countries.filter(function(country) {
//     return country.length === 6;
//   });
//   console.log(countriesHavingSixLetters);

const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);
const countriesHavingSixLetters = countries.filter(
  country => country.length === 6
);
console.log(countriesHavingSixLetters);

console.log(newNames);
