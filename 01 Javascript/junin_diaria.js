//informações
let dias_trabalhados, salario_semanal, lucro_diario, salário

//entrada
dias_trabalhados = Number(prompt("Dias Trabalhados:"))
salário = Number(prompt("Salário Mensal:"))

//processamento
lucro_diario = salário / dias_trabalhados
salario_semanal = salário / 4

//saída
console.log("O lucro por dia trabalhado é equivalente a: R$" + lucro_diario.toFixed(2))
console.log("\nTrabalhando na escala 5x2, Junin recebe R$" + salario_semanal.toFixed(2) + " semanalmente.")