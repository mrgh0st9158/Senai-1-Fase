//informações
let prompt_ia = 5, caracteres, tokens
let resposta_token, valor_token

//entrada
caracteres = Number(prompt("Total de caracteres:"))
resposta_token = Number(prompt("Qual o valor de cada token?"))

//processamento
tokens = prompt_ia + caracteres
valor_token = resposta_token * tokens

//saída
console.log("O total de tokens é equivalente a: " + tokens)
console.log("\nO total a pagar é equivalente a: R$" + valor_token)