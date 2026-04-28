//informações
let moradia, agua, luz, gasolina, streamings, telefone, outros
let salario, valor_final, gastos

//entrada
salario = Number(prompt("Valor do salário:"))
moradia = Number(prompt("Valor da moradia:"))
agua = Number(prompt("Valor da água:"))
luz = Number(prompt("Valor da luz:"))
internet = Number(prompt("Valor da internet:"))
gasolina = Number(prompt("Valor da gasolina:"))
streamings = Number(prompt("Valor do streamings:"))
telefone = Number(prompt("Valor do telefone:"))
outros = Number(prompt("Valor de outros:"))

//processamento
gastos = moradia + agua + luz + internet + gasolina + streamings + telefone + outros
valor_final = salario - gastos

//saída
console.log("O valor restante retirando as contas é equivalente a: R$" + valor_final.toFixed(2)) 