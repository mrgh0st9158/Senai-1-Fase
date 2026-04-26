//informações
let custos, dívida, ganhos

//entrada
custos = Number(prompt("Quais são os gastos mensais da Igreja?"))
ganhos = Number(prompt("Qual o total recebido com doações e dízimos no dia?"))
//processamento
dívida = custos - ganhos

//saída
console.log("O total a pagar para cobrir os gastos mensais é equivalente a: " + dívida)