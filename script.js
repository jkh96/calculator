// button setup
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equals');
const percentButton = document.querySelector('.percent');
const clearLastButton = document.querySelector('.CE')
const allClearButton = document.querySelector('.AC')
const previousOperand = document.querySelector('.previous-operand')
const currentOperand = document.querySelector('.current-operand')
const tempResult = document.querySelector('.temp-result')

let disNum1 = "";
let disNum2 = "";
let result = null;
let lastOperation = "";
let dotPresent = false;

numberButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        if (e.target.innerText === '.' && !dotPresent){
            dotPresent = true;
        } else if (e.target.innerText ==='.' && dotPresent){
            return
        }
        disNum1 += e.target.innerText;
        currentOperand.innerText = disNum1
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        if(!disNum1) result;
        dotPresent= false;
        const operationName = e.target.innerText;
        if(disNum1 && disNum2 && lastOperation){
            mathOperation()
        } else {
            result = parseFloat(disNum1)
        }
        clearVar(operationName)
        lastOperation = operationName
        console.log(result);
    })
})

function clearVar(name="") {
disNum2 += disNum1 + ' ' + name + " "
previousOperand.innerText = disNum2
currentOperand.innerText = '';
disNum1 = '';
tempResult.innerText = result;
}


// Create add, subtract, multiply, and divide functions

function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(disNum1)
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(disNum1)
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(disNum1)
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(disNum1)
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(disNum1)
    } 
}

equalButton.addEventListener('click', (e)=> {
    if(!disNum1 || !disNum2) return;
    dotPresent = false;
    mathOperation();
    clearVar();
    currentOperand.innerText = result;
    tempResult.innerText = '';
    disNum1 = result;
    disNum2 = '';
})

allClearButton.addEventListener('click', (e)=>{
    currentOperand.innerText = '0';
    previousOperand.innerText = '0';
    disNum1 = '';
    disNum2 = '';
    tempResult.innerText = '';
})

clearLastButton.addEventListener('click', (e)=>{
    currentOperand.innerText = ''
    disNum1 = ''
})

// keyboard setup

window.addEventListener('keydown', (e) => {
   if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
        ) {
       clickBtnElement(e.key)
   } else if (
       e.key === '+' ||
       e.key === '/' ||
       e.key === '-' ||
       e.key === '%'
   ){ 
    clickBtnOperator(e.key)
   } else if (e.key === '*') {
       clickBtnOperator('X')
   } else if (e.key == 'Enter' || e.key === '=') {
       clickEqualBtn()
   }
});

function clickBtnElement(key) {
    numberButtons.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickBtnOperator(key) {
    operatorButtons.forEach(button => {
        if (button.innerText === key){
            button.click()
        }
    })
}

function clickEqualBtn(){
    equalButton.click()
}