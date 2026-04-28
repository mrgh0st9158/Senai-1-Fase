//informações
let preco_arte, preco_venda

//entrada
preco_arte = Number(prompt("Qual o valor da arte comprada?"))

//processamento
preco_venda = preco_arte * 200 / 100 + preco_arte

//saída
console.log("O valor de venda deve ser equivalente a: R$" + preco_venda.toFixed(2)) 