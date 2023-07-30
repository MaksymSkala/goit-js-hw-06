const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateNameOutput() {
    if (nameInput.value.trim() !== '') {
    nameOutput.textContent = nameInput.value;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
}

nameInput.addEventListener('input', updateNameOutput);

updateNameOutput();
