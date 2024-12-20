const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    display.value += ` ${operator} `;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to remove the last character from the display
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value.replace(/ /g, ''));
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle keypress events
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber(key);
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});

// Always focus on the display input when the page loads
window.onload = function() {
    display.focus();
};

let memory = 0;

function memoryClear() {
    memory = 0;
    alert("Memory cleared");
}

function memoryRecall() {
    display.value += memory;
}

function memoryAdd() {
    try {
        memory += parseFloat(eval(display.value));
        alert(`Memory: ${memory}`);
    } catch {
        alert("Invalid operation");
    }
}

function memorySubtract() {
    try {
        memory -= parseFloat(eval(display.value));
        alert(`Memory: ${memory}`);
    } catch {
        alert("Invalid operation");
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch {
        display.value = "Error";
    }
}

function calculateReciprocal() {
    try {
        display.value = 1 / eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "Error";
    }
}
