
/* Constants */
const displayNumber = document.getElementById('displayNumber');
const addBTN = document.getElementById('addBTN');
const subBTN = document.getElementById('subBTN');
const displayInput = document.getElementById('displayInput');

/* State Variables */
let total = 0;
let inputValue = '';

/* Functions */

// updates the innerText property of the displayNumber element with the current value of total.
function updateTotal() {
    displayNumber.innerText = total;
}

// that takes a value and checks if it can be converted to a number using parseInt()
// If it can be converted, it returns true, otherwise, it returns false.
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

// adds the current inputValue to the total variable, also updating the displayNumber and displayInput elements
// If inputValue is not a number, display the NaN string in the displayNumber element.
function addValue() {
    if (isNumeric(inputValue)) {
        total += parseInt(inputValue);
        updateTotal();
        displayInput.value = inputValue;
    } else {
        displayNumber.innerText = 'NaN';
    }
}

// subtracts the current inputValue from the total variable also updating the displayNuber and inputValue elements
// If inputValue is not a number display the NAN string in the displayNumber element
function subValue() {
    if (isNumeric(inputValue)) {
        total -= parseInt(inputValue);
        updateTotal();
        displayInput.value = inputValue;
    } else {
        displayNumber.innerText = 'NaN';
    }
}

// listens for input events, and whenever the input value changes and updates the inputValue variable 
// 
displayInput.addEventListener('input', function(event) {
    inputValue = event.target.value;
});

/*Event Listeners*/

// both listen for click events calling addValue and subValue functions if their buttons are clicked
addBTN.addEventListener('click', addValue);
subBTN.addEventListener('click', subValue);