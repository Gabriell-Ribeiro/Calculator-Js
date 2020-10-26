var num = []
var copy
var calc 
var accumulator = document.querySelector('#accumulator')
var total = document.querySelector('div #total')

function addNumber(a) {
    accumulator.append(a)
    total.append(a)
    num.push(a)
}

function cleanAll() {
    // limpa array
    var c = 0
    while(c < num.length) {
        num.shift()
    }
    accumulator.innerHTML = ''
    total.innerHTML = ''
}

function cleanCurrentEntry() {

}

function percentage() {

}

function calcAction(a) {
    if(a == '+') {
        var s = 2 + 2
    }
    console.log(s)
}

function addComma() {

}

function result() {
}