//informações
let valor_dev = 500, valor_por_hora = 350
let horas, valor_final

//entrada
horas = Number(prompt("Quantas horas você deseja para o trabalho?"))

//processamento
lucro_bruto = valor_dev + valor_por_hora * horas
lucro_liquido = lucro_bruto - valor_dev

//saída
console.log("O total a pagar pelo serviço é equivalente a: R$" + lucro_bruto)
console.log("O lucro total com o freelancer foi equivalente a: R$" + lucro_liquido)