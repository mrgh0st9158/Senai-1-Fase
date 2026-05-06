//informações
let caminhao = 450, jacare = 90, quantidade_caminhao, quantidade_jacare
let lucro, valor_caminhao, valor_jacare

//entrada
quantidade_caminhao = Number(prompt("Quantos caminhões estão saindo no total:"))

//processamento
valor_caminhao = quantidade_caminhao * caminhao
quantidade_jacare = quantidade_caminhao * 50
valor_jacare = quantidade_jacare * jacare
lucro = valor_jacare - valor_caminhao

//saída
console.log("===============================\n")
console.log("Caminhões: " + quantidade_caminhao)
console.log("Jacarés vendidos: " + quantidade_jacare)
console.log("===============================\n")
console.log("Faturamento: R$" + valor_jacare)
console.log("Custo: R$" + valor_caminhao)
console.log("===============================\n")
console.log("Lucro: R$" + lucro)