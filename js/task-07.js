const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

function updateFontSize() {
    const fontSizeValue = fontSizeControl.value;
    textElement.style.fontSize = `${fontSizeValue}px`;
}

fontSizeControl.addEventListener('input', updateFontSize);