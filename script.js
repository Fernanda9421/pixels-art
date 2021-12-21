function createPixels() {
  const line = document.querySelectorAll('.line');

  for (let index = 0; index < line.length; index += 1) {
    const pixelsLine = line[index];

    for (let index2 = 0; index2 < line.length; index2 += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');

      pixelsLine.appendChild(createPixel);
    }
  }
}
createPixels();

const colorOne = document.querySelector('.colorOne');
const colorTwo = document.querySelector('.colorTwo');
const colorThree = document.querySelector('.colorThree');
const colorFour = document.querySelector('.colorFour');

// Bônus 3 - gerar cores aleatórias ao carregar a página
const generateBackgroundColor = () => {
  const getColorBoard = document.querySelectorAll('.color');
  for (let index = 1; index < getColorBoard.length; index += 1) {
    const currentColor = getColorBoard[index];
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);
    currentColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    colorOne.classList.add('selected');
  }
};

window.onload = generateBackgroundColor;

function setColorSelected(event) {
  const getColorSelected = document.querySelector('.selected');
  getColorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

colorOne.addEventListener('click', setColorSelected);
colorTwo.addEventListener('click', setColorSelected);
colorThree.addEventListener('click', setColorSelected);
colorFour.addEventListener('click', setColorSelected);

// Referência: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
function backgroundColorPixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const changeBackgroundColor = () => {
      const selectedClass = document.querySelector('.selected');
      const color = window.getComputedStyle(selectedClass).getPropertyValue('background-color');
      pixels[index].style.backgroundColor = color;
    };
    pixels[index].addEventListener('click', changeBackgroundColor);
  }
}
backgroundColorPixel();

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');

  const clearOnOnclick = () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  };

  button.addEventListener('click', clearOnOnclick);
}
clearPixels();

const buttonGenerateNumber = document.querySelector('#generate-board');
const resetBoard = () => {
  const lines = document.querySelectorAll('.line');
  for (let index = 0; index < lines.length; index += 1) {
    lines[index].parentElement.removeChild(lines[index]);
  }
};

const definePixels = () => {
  const divLines = document.querySelectorAll('.line');
  for (let indexTwo = 0; indexTwo < divLines.length; indexTwo += 1) {
    const pixelsLine = divLines[indexTwo];

    for (let indexThree = 0; indexThree < divLines.length; indexThree += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');

      pixelsLine.appendChild(createPixel);
    }
  }
};

const addNumberGenerateBoard = () => {
  let inputNumber = document.querySelector('#board-size').value;
  if (inputNumber >= 50) {
    inputNumber = 50;
  }
  if (inputNumber === '') {
    alert('Board inválido!');
  } else if (inputNumber >= 5) {
    resetBoard();
    for (let index = 1; index <= inputNumber; index += 1) {
      const pixelsBoard = document.querySelector('#pixel-board');
      const pixelsLine = document.createElement('div');
      pixelsLine.classList.add('line');
      pixelsBoard.appendChild(pixelsLine);
    }
    definePixels();
    backgroundColorPixel();
    clearPixels();
  }
};
buttonGenerateNumber.addEventListener('click', addNumberGenerateBoard);
