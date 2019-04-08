let countriesWrapper = document.querySelector('.countries-wrapper');
let subtitle = document.querySelector('.subtitle');
let searchInput = document.querySelector('#search-input');
let buttons = document.querySelector('.buttons');

const createContent = content => {
  const { name, capital, languages, population, flag } = content;
  const formatedLang = languages.map(lang => lang.name).join(', ');

  return `<div>
  <img src="${flag}" />
  <p>${name}</p>
  <p>${capital}</p>
  <p>${formatedLang}</p>
  <p>${population.toLocaleString()}</p>
</div>`;
};

const filterCountries = (arr, search) => {
  const filteredCountries = arr.filter(country => {
    let { name, capital, languages } = country;
    let isName = name.toLowerCase().includes(search);
    let isCapital = capital.toLowerCase().includes(search);
    let isLanguages = languages
      .join()
      .toLowerCase()
      .includes(search);

    return isName || isCapital || isLanguages;
  });
  let result = search == '' ? arr : filteredCountries;
  return result;
};

const showCountries = arr => {
  let contents = '';
  countriesWrapper.innerHTML = '';
  arr.forEach((country, i) => {
    contents += createContent(country);
  });
  countriesWrapper.innerHTML = contents;
};

buttons.addEventListener('click', e => {
  console.log(e.target.className);
  alert(e.target.className);
});

const url = 'https://restcountries.eu/rest/v2/all';
fetch(url)
  .then(response => response.json())
  .then(data => {
    let { languages } = data;
    console.log(languages);
    subtitle.textContent = `Currently, we have ${data.length} countries`;
    showCountries(filterCountries(data, searchInput.value));
    console.log(data);
    /*=== Event listener to get search input === */
    searchInput.addEventListener('input', e => {
      let searchTerm = e.target.value.toLowerCase();
      showCountries(filterCountries(data, searchTerm));
    });
  })
  .catch(error => console.log(error));
