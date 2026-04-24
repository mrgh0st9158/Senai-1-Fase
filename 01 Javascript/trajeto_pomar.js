//informações
let quantidade_I
let quantidade_F
let laranjas_vendidas
//entrada
quantidade_I = Number(prompt("Qual foi o total de laranjas no início do dia:"))
quantidade_F = Number(prompt("Qual foi o total de laranjas no final do dia:"))
//processamento
laranjas_vendidas = quantidade_I - quantidade_F
//saída
console.log("O total de laranjas vendidas no dia foi equivalente a: " + laranjas_vendidas)