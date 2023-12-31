function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const bodyElement = document.body;

function changeBackgroundColor() {
    const newColor = getRandomHexColor();
    bodyElement.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
}

changeColorButton.addEventListener('click', changeBackgroundColor);
