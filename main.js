var counterVal = 1;

function incrementClick() {
    if (counterVal < 5) {
        updateDisplay(++counterVal);
    }
}

function subtractionCounter() {
    if (counterVal > 1) {
        updateDisplay(--counterVal);
    }
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}