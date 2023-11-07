const buttons = document.querySelectorAll('button')
const operationDisplay = document.getElementsByClassName('Operation Display')
const numberDisplay = document.getElementsByClassName('Number Display')

let buttonStringContent = ''
let VAL1 = null 
let VAL2 = null
let operator = undefined
let operationResult
let equalButton = false 
let numberDisplayController = false 

function deleteOperationDisplayElements() {
    while (operationDisplay[0].hasChildNodes()) {
        operationDisplay[0].removeChild(operationDisplay[0].firstChild)
    }
}

function deleteNumberDisplayElements() {
    while (numberDisplay[0].hasChildNodes()) {
        numberDisplay[0].removeChild(numberDisplay[0].firstChild)
    }
}

function addArithmeticSymbol(BTN_ID) {

    if (BTN_ID === 'sum') {
        operationDisplay[0].append('+')
        operator = 'sum'
    }
    if (BTN_ID === 'subtract') {
        operationDisplay[0].append('-')
        operator = 'subtract'
    }
    if (BTN_ID === 'multiply') {
        operationDisplay[0].append('*')
        operator = 'multiply'
    }
    if (BTN_ID === 'divide') {
        operationDisplay[0].append('/')
        operator = 'divide'
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.className === 'Number') {

            if (equalButton === true) {
                deleteNumberDisplayElements()
                deleteOperationDisplayElements() 

                VAL1 = null 
                equalButton = false
            }

            if (numberDisplayController === true) {
                deleteNumberDisplayElements()
                numberDisplayController = false
            }

            numberDisplay[0].append(button.innerHTML)
            buttonStringContent += button.innerHTML
        }

        if (button.className === 'Operator' && (buttonStringContent !== '' || equalButton === true)) {

            numberDisplayController = true

            if (equalButton === true) {
                deleteOperationDisplayElements()
                
                buttonStringContent = VAL1
                VAL2 = null
                equalButton = false
            }

            operationDisplay[0].append(buttonStringContent) 
            
            if (VAL1 === null) { VAL1 = parseInt(buttonStringContent) }
            else { VAL2 = parseInt(buttonStringContent)}
            
            if (operator === undefined) {
                addArithmeticSymbol(button.id)
                buttonStringContent = ''
            }
            
            if (VAL1 !== null && VAL2 !== null) {
                if (button.id === 'equal') {
                    equalButton = true
                }
                calculator(VAL1, VAL2)
            }
        }
    })
})

function calculator(a, b) {

    if (numberDisplay[0].hasChildNodes()) { deleteNumberDisplayElements() }

    if (equalButton === true) {
        operationDisplay[0].append('=')
    }
    else {
        addArithmeticSymbol()
    }

    if (operator === 'sum') {
        operationResult = a + b
    }
    else if (operator === 'subtract') {
        operationResult = a - b
    }
    else if (operator === 'multiply') {
        operationResult = a * b
    }
    else if (operator === 'divide') {
        operationResult = a / b
    }

    numberDisplay[0].append(operationResult)
    
    VAL1 = operationResult
    VAL2 = null
    operator = undefined 
    buttonStringContent = ''

}