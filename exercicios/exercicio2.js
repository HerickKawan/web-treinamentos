const input = require('readline-sync')

var n1, n2, result

n1 = parseInt(input.question('Informe um número? '))
n2 = parseInt(input.question('Informe outro número? '))

result = n1 - n2

console.log(`O resultado é ${result}`)