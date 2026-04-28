//informações
let preco_grama, preco_final

//entrada
alert("Atenção\n====================\nA ração granel está R$10,00 o KG")
preco_grama = Number(prompt("Qual o total de ração em gramas você deseja?"))

//processamento
preco_final = preco_grama / 1000 * 10

//saída
console.log("O valor total a pagar é equivalente a: R$" + preco_final.toFixed(2))