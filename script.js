const buttons = document.querySelectorAll('button')
let clickingValue = ""

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickingValue = String(clickingValue + button.innerHTML)
        parseToNumber(clickingValue)
    })
})

function parseToNumber(number) {
    console.log(parseInt(number))
}
