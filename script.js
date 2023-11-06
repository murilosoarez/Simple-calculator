const buttons = document.querySelectorAll('button')
const Visor = document.getElementsByClassName('Visor')
const body = document.body 

let displayExibition_Visor = false
let button_numberContent = ''
let operator = undefined
let firstValue = null 
let secondValue = null
let equalButton = false

function VisorElements() {

    let operationDisplay = document.createElement('div')
    operationDisplay.className = 'Operation Display'

    let numberDisplay = document.createElement('div')
    numberDisplay.className = 'Number Display'
    
    Visor[0].append(operationDisplay)
    Visor[0].append(numberDisplay)
}

VisorElements()
let operationDisplay_Visor = document.getElementsByClassName('Operation Display')
let numberDisplay_Visor = document.getElementsByClassName('Number Display')

function findValues() {  
    
    if (button_numberContent !== '') {

        if (firstValue === null)  {
            firstValue = parseInt(button_numberContent)
            operationDisplay_Visor[0].append(firstValue)
        }

        else {
            secondValue = parseInt(button_numberContent)
            operationDisplay_Visor[0].append(secondValue)
        }
    }
}

function operationChooser(buttonID) {

    if (buttonID === 'sum') {
        operationDisplay_Visor[0].append('+')
        operator = 'sum'
    }

    else if (buttonID === 'subtract') {
        operationDisplay_Visor[0].append('-')
        operator = 'subtract'
    }

    else if (buttonID === 'multiply') {
        operationDisplay_Visor[0].append('*')
        operator = 'multiply'
    }

    else if (buttonID === 'division') {
        operationDisplay_Visor[0].append('/')
        operator = 'division'
    }
    
    else if (buttonID === 'equal') {
        operationDisplay_Visor[0].append('=')
        equalButton = true
    }
}

function deleteNumbersInVisor() {
        while (numberDisplay_Visor[0].hasChildNodes()) {
            numberDisplay_Visor[0].removeChild(numberDisplay_Visor[0].firstChild)
        }
        displayExibition_Visor = false
}

function deleteOperationsInVisor() {
    while (operationDisplay_Visor[0].hasChildNodes()) {
        operationDisplay_Visor[0].removeChild(operationDisplay_Visor[0].firstChild)
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {

         /* ========== NUMBER BUTTON =========== */ 

        if (button.className === 'number') {

            if (equalButton === true) {
                deleteOperationsInVisor()
            }
            
            if (displayExibition_Visor === true) {
                deleteNumbersInVisor()
            }
            
            numberDisplay_Visor[0].append(button.innerHTML)
            button_numberContent += button.innerHTML
        }
        
        /* ========== OPERATOR BUTTON =========== */ 
        
        if (button.className === 'operator') { 
            
            if (firstValue === null || secondValue === null) {
                findValues()
            }

            displayExibition_Visor = true 

            if (equalButton === true) {
                deleteOperationsInVisor()
                operationDisplay_Visor[0].append(firstValue)
                operationChooser()
            }

            if ((operator === undefined) && firstValue !== null || secondValue !== null) {
                operationChooser(button.id)
                button_numberContent = ''
            }
            
            if (firstValue !== null && secondValue !== null) {
                console.log(operator)
                calculator(firstValue, secondValue)
            }
        }
    })
})

function calculator(a, b) {
    
    let operationResult
    
    while (numberDisplay_Visor[0].hasChildNodes()) {
        numberDisplay_Visor[0].removeChild(numberDisplay_Visor[0].firstChild)
    }

    if (operator === 'sum' || equalButton === true) {
        operationResult = a + b
    }

    else if (operator === 'subtract' || equalButton === true) { 
        operationResult = a - b
    }

    else if (operator === 'multiply' || equalButton === true) {
        operationResult = a * b
    }

    else if (operator === 'division' || equalButton === true) {
        operationResult = a / b
    }

    numberDisplay_Visor[0].append(operationResult)
    
    firstValue = operationResult
    secondValue = null

    operator = undefined
    button_numberContent = ''

}
