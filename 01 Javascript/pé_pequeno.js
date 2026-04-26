//informações
let preco_calcado, calculo_final, quantidade

//entrada
quantidade = Number(prompt("Qual foi a quantidade de pares trocados?"))
preco_calcado = Number(prompt("Qual é o preço de cada par?"))

//processamento
calculo_final = quantidade * preco_calcado

//saída
console.log("Valor a receber: R$" + calculo_final.toFixed(2))