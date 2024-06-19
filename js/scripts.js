operand1 = null;
operand2 = null;
operator = null;

function writeOnDisplay(value) {
    display.value += value;
}

function operation(op) {
    if (operand1 === null) {
        operand1 = parseFloat(display.value);
        operator = op;
        display.value = '';
    } else {
        operand2 = parseFloat(display.value);
        calculate();
        operator = op;
    }
}

function calculate() {
    if (operand1 !== null && operand2 !== null && operator !== null) {
        switch (operator) {
            case '+':
                display.value = operand1 + operand2;
                break;
            case '-':
                display.value = operand1 - operand2;
                break;
            case '*':
                display.value = operand1 * operand2;
                break;
            case '/':
                if (operand2 === 0) {
                    display.value = 'Error';
                } else {
                    display.value = operand1 / operand2;
                }
                break;
            default:
                display.value = 'Error';
                break;
        }
        operand1 = parseFloat(display.value);
        operand2 = null;
    }
}

function calculateResult() {
    operand2 = parseFloat(display.value);
    calculate();
    operator = null;
}

function clearAll() {
    clearDisplay();
    operand1 = null;
    operand2 = null;
    operator = null;
}

function clearDisplay() {
    display.value = '';
}