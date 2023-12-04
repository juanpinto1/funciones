const btnBlue = document.getElementById('blue-div')
const btnRed = document.getElementById('red-div')
const btnGreen = document.getElementById('green-div')
const btnYellow = document.getElementById('yellow-div')

let booleanVariable = false
btnBlue.addEventListener('click', () => {

    if (booleanVariable == false) {
        btnBlue.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnBlue.style.backgroundColor = 'blue'
        booleanVariable = false
    }
})
btnRed.addEventListener('click', () => {

    if (booleanVariable == false) {
        btnRed.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnRed.style.backgroundColor = 'red'
        booleanVariable = false
    }
})
btnGreen.addEventListener('click', () => {

    if (booleanVariable == false) {
        btnGreen.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnGreen.style.backgroundColor = 'green'
        booleanVariable = false
    }
})
btnYellow.addEventListener('click', () => {

    if (booleanVariable == false) {
        btnYellow.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnYellow.style.backgroundColor = 'yellow'
        booleanVariable = false
    }
})

const input = document.getElementById('input')
input.addEventListener('input', () => {
    let globalVariable = ''
    if (input.value === 'a') {
        input.style.backgroundColor = 'pink'
        globalVariable = 'rosado'
        console.log(globalVariable)
    }
    if (input.value === 's') {
        input.style.backgroundColor = 'orange'
        globalVariable = 'naranja'
        console.log(globalVariable)
    }
    if (input.value === 'd') {
        input.style.backgroundColor = 'aqua'
        globalVariable = 'celeste'
        console.log(globalVariable)
    }
    if (input.value === 'q') {
        input.style.backgroundColor = 'purple'
        globalVariable = 'morado'
        console.log(globalVariable)
    }
    if (input.value === 'w') {
        input.style.backgroundColor = 'gray'
        globalVariable = 'gris'
        console.log(globalVariable)
    }
    if (input.value === 'e') {
        input.style.backgroundColor = 'brown'
        globalVariable = 'cafe'
        console.log(globalVariable)
    }
    else if(input.value === ''){
        input.style.backgroundColor = 'white'
        globalVariable = 'white'
        console.log(globalVariable)
    }})