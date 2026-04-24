//informações
let dev_PJ
let dev_PF
let total_dev

//entrada
dev_PF = Number(prompt("Qual o total de devs PFs"))
dev_PJ = Number(prompt("Qual o total de devs PJs"))

//processamento
total_dev = dev_PF + dev_PJ

//saída
console.log("O total de devs na empresa é equivalente a: " + total_dev)