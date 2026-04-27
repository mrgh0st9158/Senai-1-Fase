//informações
let bombas = 7, bombas_total, show, preco_bomba, preco_total

//entrada
show = Number(prompt("Quantos shows Sarumano irá fazer?"))
preco_bomba = Number(prompt("Qual o preço de cada bomba?"))

//processamento
bombas_total = bombas * show
preco_total = preco_bomba * bombas_total

//saída
console.log("O total de bombas necessárias para realizar todos os shows é equivalente a: " + bombas_total)
console.log("\nO total necessário para cobrir o preço de todas as bombas é equivalente a: R$" + preco_total)