//informações
let lucro_bruto, premiações, presentes, comissões, custos, lucro_total

//entrada
lucro_bruto = Number(prompt("Qual foi o faturamento bruto?"))
premiações = Number(prompt("Qual o valor pago em premiações?"))
presentes = Number(prompt("Qual o valor pago em presentes?"))
comissões = Number(prompt("Qual o valor pago em comissões?"))

//processamento
custos = premiações + presentes + comissões
lucro_total = lucro_bruto - custos

//saída
console.log("O lucro total foi equivalente a: R$" + lucro_total.toFixed(2))