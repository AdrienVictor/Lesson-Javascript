const input = document.querySelector('input');
const result = document.querySelector('.result-generator');
const button = document.querySelector('button');
// const inputNumber = input.value;

function randomColor() {
  let n = 6,
    hexColor = '#';
  while (n--) {
    hexColor += ((Math.random() * 16) | 0).toString(16);
  }
  return hexColor;
}

function generator() {
  let inputNumber = input.value;
  result.innerHTML = '';
  for (let i = 0; i < inputNumber; i++) {
    let color = randomColor();
    let box = document.createElement('div');
    let copy = document.createElement('button');
    box.classList.add('random-color');
    copy.classList.add('copy-button');
    box.innerHTML = `<b >${color}</b>`;
    box.style.backgroundColor = color;
    copy.textContent = 'Copy';
    result.appendChild(box);
    box.appendChild(copy);
    copy.addEventListener('click', copyColor);
  }
}
function copyColor() {
  let copyText = this.parentNode.querySelector('b').textContent;
  console.log(copyText);
  let textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  textArea.value = copyText;
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
}
button.addEventListener('click', generator);
