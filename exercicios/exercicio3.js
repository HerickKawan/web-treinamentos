const input = require('readline-sync')
var numA, numB

numA = 32
numB = 42

numA = input.question('informe o primeiro numero?')
numB = input.question('informe o segundo numero?')

console.log(`olá, ${numB} ${numA}`)