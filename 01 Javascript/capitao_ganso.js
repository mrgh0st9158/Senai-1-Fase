//informações
let gastos, lucro_item, lucro_ingresso
let lucro, lucro_percentual

//entrada
gastos = Number(prompt("Qual foi o gasto total em suprimentos e mercadorias:"))
lucro_item = Number(prompt("Qual foi o faturamento com a venda de itens?"))
lucro_ingresso = Number(prompt("Qual foi o faturamento com os ingressos?"))

//processamento
lucro_bruto = lucro_item + lucro_ingresso
lucro_total = lucro_bruto - gastos
lucro_percentual = lucro_total / gastos * 100

//saída
console.log("O lucro total foi equivalente a: " + lucro_total.toFixed(2))
console.log("\nO lucro percentual foi equivalente a " + lucro_percentual.toFixed(2) + "%")