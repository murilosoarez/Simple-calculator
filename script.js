const buttons = document.querySelectorAll('button')
const body = document.body 

let Visor = document.getElementsByClassName('Visor')
let number = ''

var n1 = null
var n2 = null
var operator = undefined

function calculator(a, b) {

    while(Visor[0].hasChildNodes()) {
        Visor[0].removeChild(Visor[0].firstChild)
    }   

    if (operator === 'sum') {
        op = a + b
        Visor[0].append(op)
    }

    else if (operator === 'subtract') {
        op = a - b
        Visor[0].append(op)
    }

    else if (operator === 'multiply') {
        op = a * b
        Visor[0].append(op)
    }
    else if (operator === 'division') {
        op = a / b
        Visor[0].append(op)
    }

    operator = undefined
    number = ''
    n1 = op 
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.className === 'number') {
            Visor[0].append(button.innerHTML)
            number += button.innerHTML
        }

        if (button.className === 'operator') {
            
            while(Visor[0].hasChildNodes()) {
                Visor[0].removeChild(Visor[0].firstChild)
            }   
            
            // This section has the purpose of defining which operating will be made according to the click

            if (operator === undefined) {
                if (n1 === null) { // Fills n1 value if it's the first time the value is being entered
                    n1 = parseInt(number)
                }

                
                if (button.id === 'sum') {
                    operator = 'sum' 
                }

                else if (button.id === 'subtract') {
                    operator = 'subtract'
                }
                
                else if (button.id === 'division') {
                    operator = 'division'
                }
                
                else if (button.id === 'multiply') {
                    operator = 'multiply'
                }

                number = '' // String variable 'number' is renitialized

            }
            
            if (button.id === 'equal' && n1 !== null) { // This section is responsible to determine if n1 is already filled so a calculus between two numbers can be made.
                n2 = parseInt(number)
                calculator(n1, n2)
            }
        }
    })
})

