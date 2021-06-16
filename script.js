// Create add, subtract, multiply, and divide functions

function add(a, b) {
return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator ) {
    operator.toString
if (operator == '+') {
    return add(a, b)
} else if (operator == '-'){
    return subtract(a, b)
} else if (operator == '*') {
    return multiply(a, b)
} else if (operator == "/") {
    return divide(a, b)
}
}

function numberDisplay(test) {
    let writeDisplay = document.querySelector('.input > p').innerHTML = test
    return writeDisplay
}