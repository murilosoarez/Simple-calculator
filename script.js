const buttons = document.querySelectorAll('button')
const body = document.body 

let Visor = document.getElementsByClassName('Visor')
let operationDisplay = document.createElement('div')
operationDisplay.className = 'Operation Display'
let numberDisplay = document.createElement('div')
numberDisplay.className = 'Number Display'

Visor[0].append(operationDisplay)
Visor[0].append(numberDisplay)

let number = ''

var n1 = null
var n2 = null
var operator = undefined

var displayController = false

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.className === 'number') {

            if (displayController === true) {
                while (numberDisplay.hasChildNodes()) {
                    numberDisplay.removeChild(numberDisplay.firstChild)
                }
                displayController = false
            }

            numberDisplay.append(button.innerHTML)
            number += button.innerHTML
            
            if (n1 !== null) {
                n2 = parseInt(number)
            }
        }

        if (button.className === 'operator') {
            
            displayController = true 

            operationDisplay.append(number)
            
            if (n1 === null) {
                n1 = parseInt(number)
            }
    
            if (operator === undefined) {

                if (button.id === 'sum') {
                    operationDisplay.append('+')
                    operator = 'sum' 
                }

                else if (button.id === 'subtract') {
                    operationDisplay.append('-')
                    operator = 'subtract'
                }
                
                else if (button.id === 'division') {
                    operationDisplay.append('/')
                    operator = 'division'
                }
                
                else if (button.id === 'multiply') {
                    operationDisplay.append('*')
                    operator = 'multiply'
                }

                number = '' // String variable 'number' is renitialized 
            }
            
            if (n1 !== null && n2 !== null)  {
                calculator(n1, n2)
            }     
        }
    })
})

function calculator(a, b) {

    while (numberDisplay.hasChildNodes()) {
        numberDisplay.removeChild(numberDisplay.firstChild)
    }

    if (operator === 'sum') {
        op = a + b
    }

    else if (operator === 'subtract') {
        operationDisplay.append('-')
        op = a - b
    }

    else if (operator === 'multiply') {
        operationDisplay.append('*')
        op = a * b
    }

    else if (operator === 'division') {
        operationDisplay.append('/')
        op = a / b
    }

    numberDisplay.append(op)

    operator = undefined
    number = ''
    n1 = op 
}

