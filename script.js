
document.addEventListener('DOMContentLoaded', () => {

    const numberDisplay = document.getElementsByClassName('Number Display')
    const operationDisplay = document.getElementsByClassName('Operation Display')
    const buttons = document.querySelectorAll('button')

    let val1 = null 
    let val2 = null
    let operator = undefined
    let NumberOnMyDisplay = false

    function deleteDisplay(display) {
        while (display.hasChildNodes()) {
            display.removeChild(display.firstChild)
        }
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            if (button.className === 'Number') {

                if (NumberOnMyDisplay == true) {
                    deleteDisplay(numberDisplay[0])
                    NumberOnMyDisplay = false 
                }

                numberDisplay[0].append(button.innerHTML)
                
            }

            if (button.className === 'Operator') {

                NumberOnMyDisplay = true

                operationDisplay[0].append(numberDisplay[0].innerHTML)

                if (val1 === null) {
                    val1 = parseInt(numberDisplay[0].innerHTML)
                }
                else {
                    val2 = parseInt(numberDisplay[0].innerHTML)
                }

                deleteDisplay(numberDisplay[0])

                if (operator == undefined) {
                    operator = button.id 
                    operationDisplay[0].append(button.innerHTML)
                }

                class Calculator {
                    constructor(a, b) {
                        this.a = a
                        this.b = b
                    }
                
                    get result(){
                        return this.calculation()
                    }
                
                    calculation() {
                        if (operator === 'sum') {
                            return this.a + this.b
                        }
                        else if (operator === 'subtract') {
                            return this.a - this.b
                        }
                        else if (operator === 'multiply') {
                            return this.a * this.b
                        }
                        else if (operator === 'division') {
                            return this.a / this.b
                        }
                    }

                }

                if (val1 !== null && val2 !== null) {

                    operation = new Calculator(val1, val2)
                    numberDisplay[0].append(operation.result)

                    val1 = parseInt(numberDisplay[0].innerHTML)
                    val2 = null
                    operator = undefined

                }
            }
        })
    })
})