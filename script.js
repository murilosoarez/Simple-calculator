document.addEventListener('DOMContentLoaded', () => {
    const numberDisplay = document.getElementsByClassName('Number Display')
    const operationDisplay = document.getElementsByClassName('Operation Display')
    const buttons = document.querySelectorAll('button')

    let buttonContent = []
    let VAL1 = null
    let VAL2 = null
    let numberDisplayController = false
    
    let typeOfOperation = undefined
    let equalButtonClicked = false
    let operationResult

    let operators = {
        sum: '+',
        subtract: '-',
        multiply: '*',
        division: '/',
    }

    function readingNumberInput(btn) {
        let numberDisplay_Values = document.createElement('div')
        numberDisplay_Values.append(btn.textContent.trim())
        numberDisplay[0].append(numberDisplay_Values)
        buttonContent.push(btn.textContent.trim())
    }

    function deleteDisplay(displayType) {
        while (displayType.hasChildNodes()) {
            displayType.removeChild(displayType.lastChild)
        }
    }

    function restartCalculator() {
        deleteDisplay(numberDisplay[0])
        deleteDisplay(operationDisplay[0])
        VAL1 = null
        VAL2 = null
    }

    function operationChooser(btnID) {
        Object.keys(operators).forEach(symbol => {
            if (btnID === operators[symbol]) {
                operationDisplay[0].append(operators[symbol])
                typeOfOperation = operators[symbol]
            }
            buttonContent = []
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            /*=========================== NUMBER EVENTS =======================*/

            if (button.className === 'Number' && equalButtonClicked) {
                restartCalculator()
                equalButtonClicked = false
            }
            
            if (button.className === 'Number' && VAL1 === null) {
                readingNumberInput(button)
            }
            
            if ((button.className === 'Number' && VAL1 !== null)) {
                if (numberDisplayController === true) {
                    deleteDisplay(numberDisplay[0])
                    numberDisplayController = false
                }
                readingNumberInput(button)
            }
            
            /*=========================== OPERATOR EVENTS =======================*/
            
            
            if (button.className === 'Operator' && button.id === 'equal') {
                equalButtonClicked = true
            }

            if (button.className === 'Operator' && button.id === 'eraser') {
                if (numberDisplay[0].hasChildNodes()) {
                    deleteDisplay(numberDisplay[0])
                    buttonContent.pop()
                }
            }
            
            if (button.className === 'Operator' && button.id !== 'eraser') {
                numberDisplayController = true

                if (VAL1 === null) {
                    VAL1 = parseInt(buttonContent.join(''))
                    operationDisplay[0].append(VAL1)
                    console.log('VAL1 equals to ', VAL1)
                }
                else {
                    VAL2 = parseInt(buttonContent.join(''))
                    operationDisplay[0].append(VAL2)
                    console.log('VAL2 equals to ', VAL2)
                }

                if (equalButtonClicked) {
                    operationDisplay[0].append('=')
                    console.log(VAL1, VAL2)
                }
                else {
                    operationChooser(button.textContent.trim())
                }
            }

            if (button.className === 'Operator' && button.id !== 'eraser' && (VAL1 !== null && VAL2 !== null)) {
                deleteDisplay(numberDisplay[0])
                if (typeOfOperation === '+') {
                    operationResult = VAL1 + VAL2
                }
                else if (typeOfOperation === '-') {
                    operationResult = VAL1 - VAL2
                }
                if (typeOfOperation === '*') {
                    operationResult = VAL1 * VAL2
                }
                if (typeOfOperation === '/') {
                    operationResult = VAL1 / VAL2
                }
                
                numberDisplay[0].append(operationResult)
                VAL1 = operationResult
                numberDisplayController = true

                VAL2 = null
                typeOfOperation = undefined
                buttonContent = []
            }
         })
    })
})
