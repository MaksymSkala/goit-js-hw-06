const validationInput = document.getElementById('validation-input');

function checkInputLength() {
  const expectedLength = parseInt(validationInput.dataset.length);
  const currentLength = validationInput.value.length;

    if (currentLength === expectedLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
}

validationInput.addEventListener('blur', checkInputLength);
