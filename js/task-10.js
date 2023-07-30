function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const controlsDiv = document.getElementById('controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

function createBoxes(amount) {
  
    boxesDiv.innerHTML = '';

    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesDiv.appendChild(box);
        size += 10;
    }
}

function destroyBoxes() {
    boxesDiv.innerHTML = '';
}

createButton.addEventListener('click', () => {
    const amount = document.querySelector('input').value;
    createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
