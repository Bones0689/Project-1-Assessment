
/* Constants */
const displayNumber = document.getElementById('displayNumber');
const addBTN = document.getElementById('addBTN');
const subBTN = document.getElementById('subBTN');
const displayInput = document.getElementById('displayInput');

/* State Variables */
let total = 0;
let inputValue = '';

/* Functions */
function updateTotal() {
    displayNumber.innerText = total;
}

function isNumeric(value) {
    // Try to convert the value to a number using parseInt()
    const num = parseInt(value);

    // Check if the result is NaN (not a number)
    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }
}

function addValue() {
    if (isNumeric(inputValue)) {
        total += parseInt(inputValue);
        updateTotal();
        displayInput.value = inputValue;
    } else {
        displayNumber.innerText = 'NaN';
    }
}

function subValue() {
    if (isNumeric(inputValue)) {
        total -= parseInt(inputValue);
        updateTotal();
        displayInput.value = inputValue;
    } else {
        displayNumber.innerText = 'NaN';
    }
}

displayInput.addEventListener('input', function(event) {
    inputValue = event.target.value;
});

addBTN.addEventListener('click', addValue);
subBTN.addEventListener('click', subValue);