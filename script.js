let display = document.getElementById("display");

// Function to append value to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate result
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        display.value = "Error";
    }
}
// Function to remove last character from display
function backspace() {
    display.value = display.value.slice(0, -1);
}

