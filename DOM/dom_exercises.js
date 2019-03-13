let para;
for (let i = 0; i < 4; i++) {
  para = document.createElement('p');
  para.textContent = `paragraph ${i + 1}`;
  para.className = 'para';
  para.setAttribute('id', 'para');
  para.style.fontSize = '16px';
  document.body.appendChild(para);
}
// IF I WANTED TO SELECT ALL THE P ELEMENTS AFTER CREATING THEM IN THE FOR LOOP
// const newPara = document.querySelectorAll('p');
// newPara.forEach(element => {
//   element.setAttribute('id', 'para');
// });

let allPara = document.querySelectorAll('#para');
console.log(allPara);

allPara.forEach((element, i, arr) => {
  i % 2 == 0 ? (element.style.color = 'red') : (element.style.color = 'blue');
});

const numberWrapper = document.querySelector('.number-wrapper');
let box;
for (let i = 0; i <= 100; i++) {
  box = document.createElement('div');
  box.textContent = i;
  i % 2 === 0
    ? (box.style.background = 'lightgreen')
    : (box.style.background = 'lightblue');
  numberWrapper.appendChild(box);
}
