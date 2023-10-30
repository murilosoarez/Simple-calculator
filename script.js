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
            
            if (operator === undefined) {
                if (n1 === null) {
                    n1 = parseInt(number)
                }
                console.log('SMT new operator', operator)
                number = ''
                
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
            }

            if (button.id === 'equal' && n1 !== null) {
                n2 = parseInt(number)
                calculator(n1, n2)
            }
        }
    })
})

