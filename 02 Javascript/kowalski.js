//informações
let relatorios_PF, tempo_PF, valor_PF
let relatorios_PJ, tempo_PJ, valor_PJ
let quantidade_relatorios, tempo_total, valor_total
let media_valor_PF, media_tempo_PF, media_valor_PJ, media_tempo_PJ

//entrada
relatorios_PF = Number(prompt("Total de relatórios PF:"))
relatorios_PJ = Number(prompt("Total de relatórios PJ:"))
tempo_PF = Number(prompt("Tempo para fazer relatórios PF:"))
tempo_PJ = Number(prompt("Tempo para fazer relatórios PJ:"))
valor_PF = Number(prompt("Valor de relatórios PF"))
valor_PJ = Number(prompt("Valor de relatórios PJ"))

//processamento
quantidade_relatorios = relatorios_PF + relatorios_PJ
tempo_total = tempo_PF + tempo_PJ
valor_total = valor_PF + valor_PJ

media_valor_PF = valor_PF / relatorios_PF
media_tempo_PF = tempo_PF / relatorios_PF

media_valor_PJ = valor_PJ / relatorios_PJ
media_tempo_PJ = tempo_PJ / relatorios_PJ

//saída
console.log("==================================")
console.log("Quantidade total de relatórios: " + quantidade_relatorios)
console.log("Tempo total trabalhado: " + tempo_total + " Horas")
console.log("Valor total recebido: R$" + valor_total.toFixed(2))
console.log("==================================")
console.log("Média de valor recebido por relatório PF: R$" + media_valor_PF.toFixed(2))
console.log("Média de tempo gasto por cada relatório PF: " + media_tempo_PF.toFixed(2) + " Horas")
console.log("\n")
console.log("Média de valor recebido por relatório PJ: R$" + media_valor_PJ.toFixed(2))
console.log("Média de tempo gasto por cada relatório PJ: " + media_tempo_PJ.toFixed(2) + " Horas")
console.log("==================================")