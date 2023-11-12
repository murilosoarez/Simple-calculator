const buttons = document.querySelectorAll('button')
const operationDisplay = document.getElementsByClassName('Operation Display')
const numberDisplay = document.getElementsByClassName('Number Display')

let buttonStringContent = ''

const operation = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    division: '/'
}

let typeOfOperation

function operationChooser(btnID) {
    Object.keys(operation).forEach(symbol => {
        if (btnID === operation[symbol]) {
            operationDisplay[0].append(operation[symbol])
            typeOfOperation = operation[symbol]
        }
        buttonStringContent = ''
    })
}

function deleteNumberDisplay() {
    while (numberDisplay[0].hasChildNodes()) {
        numberDisplay[0].removeChild(numberDisplay[0].firstChild)
    }
}

function deleteOperationDisplay() {
    while (operationDisplay[0].hasChildNodes()) {
        operationDisplay[0].removeChild(operationDisplay[0].firstChild)
    }
}

let VAL1 = null
let VAL2 = null
let numberDisplayController = false 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className == 'Number') {
            if (numberDisplayController === true) {
                deleteNumberDisplay()
                numberDisplayController = false
            }
            numberDisplay[0].append(button.innerHTML)
            buttonStringContent += button.innerHTML
        }
        
        if (button.className == 'Operator' && buttonStringContent !== '') {
            numberDisplayController = true
            operationDisplay[0].append(buttonStringContent)

            if   (VAL1 === null) { VAL1 = parseInt(buttonStringContent) }
            else                 { VAL2 = parseInt(buttonStringContent) }

            operationChooser(button.innerHTML)

            if (VAL1 !== null && VAL2 !== null) {
                deleteNumberDisplay()
                operationResult = calculator(VAL1, VAL2)
                numberDisplay[0].append(operationResult)

                VAL1 = operationResult
                VAL2 = null
            }
        }
    })
})

function calculator (a, b) {
    if (typeOfOperation === '+') {
        return a + b 
    }
    else if (typeOfOperation === '-') {
        return a - b
    }
    else if (typeOfOperation === '*') {
        return a * b
    }
    else if (typeOfOperation === '/') {
        return a / b
    }
}