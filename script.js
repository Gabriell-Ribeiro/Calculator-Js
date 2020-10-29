var num = ''
var copy = ''
function addNumber(n) {
    num = n

    var accumulator = document.querySelector('#accumulator')
    var total = document.querySelector('#total')

    accumulator.append(num)
    total.innerHTML = num
}

function cleanAll() {
    num = ''
    copy = ''

    accumulator.innerHTML = ''
    total.innerHTML = ''
}

function percentage() {
    var res = (num * copy) / 100
    total.innerHTML = res
}


var oper = ''
function calcAction(o) {
    oper = o
    accumulator.append(o)

    copy = num
    num = ''
}

function result() {
    if(oper == '+'){
        accumulator.append('=')
        total.innerHTML = copy + num
        accumulator.append(copy + num)
        num = copy + num
    } else if(oper == '-') {
        accumulator.append('=')
        total.innerHTML = copy - num
        accumulator.append(copy - num)
        num = copy - num
    } else if(oper == 'x') {
        accumulator.append('=')
        total.innerHTML = copy * num
        accumulator.append(copy * num)
        num = copy * num
    } else {
        accumulator.append('=')
        total.innerHTML = (copy / num).toFixed(3)
        accumulator.append((copy / num).toFixed(3))
        num = (copy / num).toFixed(3)
    }
}