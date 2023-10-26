const buttons = document.querySelectorAll('button')
const body = document.body 

let Visor = document.getElementsByClassName('Visor')
let number = ''
let n1 = null
let n2 = null
let op

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.id == 'number') {
            Visor[0].append(button.innerHTML)
            number += button.innerHTML
        }

        if (button.id == 'operator') {
            
            while(Visor[0].hasChildNodes()) {
                Visor[0].removeChild(Visor[0].firstChild)
            }   
            
            if (button.innerHTML === '+') {

                if (n1 === null) {
                    n1 = parseInt(number)
                    console.log('n1', n1)
                    number = ''
                }
    
                else  {
                    n2 = parseInt(number)
                    console.log('n2', n2)
                }

                op = n1 + n2

            }

            if (button.innerHTML === '=') {
                Visor[0].append(op)
            }


        }
    })
})