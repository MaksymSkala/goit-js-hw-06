const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueElement = document.getElementById('value');

let counterValue = 0;

function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

decrementBtn.addEventListener('click', function () {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener('click', function () {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();