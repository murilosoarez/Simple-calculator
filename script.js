
document.addEventListener('DOMContentLoaded', () => {

    const numberDisplay = document.getElementsByClassName('Number Display')
    const operationDisplay = document.getElementsByClassName('Operation Display')
    const buttons = document.querySelectorAll('button')

    let firstValue = null 
    let subsequentValue = null
    let operatorType = undefined
    let NumberOnMyDisplay = false
    let equalButtonClicked = false

    function deleteDisplay(display) {
        while (display.hasChildNodes()) {
            display.removeChild(display.firstChild)
        }
    }

    function resetCalculator() {
        deleteDisplay(numberDisplay[0])
        deleteDisplay(operationDisplay[0])     
        firstValue = null
        subsequentValue = null
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            
            if (button.className === 'Number') {

                if (equalButtonClicked) {
                    resetCalculator()
                    equalButtonClicked = false
                }

                if (NumberOnMyDisplay == true) {
                    deleteDisplay(numberDisplay[0])
                    NumberOnMyDisplay = false 
                }

                numberDisplay[0].append(button.innerHTML)
                
            }
            
            if (button.className === 'Operator') {
                
                if (equalButtonClicked) {
                    deleteDisplay(numberDisplay[0])
                    deleteDisplay(operationDisplay[0])
                    operationDisplay[0].append(firstValue)
                    equalButtonClicked = false
                }

                operationDisplay[0].append(numberDisplay[0].innerHTML)
                NumberOnMyDisplay = true
                
                if (firstValue === null) {
                    firstValue = parseInt(numberDisplay[0].innerHTML)
                    operationDisplay[0].append(button.innerHTML)
                }
                else {
                    subsequentValue = parseInt(numberDisplay[0].innerHTML)
                    operation = eval(operationDisplay[0].innerHTML)

                    if (operatorType === undefined) {
                        operationDisplay[0].append(button.innerHTML)
                    }
                }

                deleteDisplay(numberDisplay[0])
        
                if (firstValue !== null && subsequentValue !== null) {

                    if (button.id === 'equal') {
                        equalButtonClicked = true
                    }

                    numberDisplay[0].append(operation)

                    firstValue = operation
                    subsequentValue = null
                    operatorType = undefined
                }
            }

            if (button.className === 'Tool') {

                if (button.id === 'delete') {
                    resetCalculator()
                }

                if (button.id === 'eraser') {
                    numberDisplay[0].removeChild(numberDisplay[0].firstChild)
                }
                
            }
        })
    })
})