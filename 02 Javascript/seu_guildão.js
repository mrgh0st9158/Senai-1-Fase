//informações
let carne = 0.5, cerveja = 1, agua = 0.5, refri = 0.2, carvao = 0.75, sal = 0.300
let total_carne, total_cerveja, total_agua, total_refri, consumo_carvao, consumo_sal
let pessoas, nivel, nivel_resposta, alcool_resposta, refri_resposta

//entrada
pessoas = Number(prompt("Quantas pessoas irão comparecer?"))
nivel_resposta = Number(prompt("Quanto irão comer\n1 = Leve\n2 = Médio\n3 = Monstro"))
alcool_resposta = (prompt("Vocês irão tomar bebidas alcólicas?\nSim ou Não"))
refri_resposta = (prompt("E refrigerante?\nSim ou Não"))
agua_resposta = (prompt("Desejam água?\nSim ou Não"))

//processamento

   //processamento dos níveis
if(nivel_resposta == 1){
    nivel = 1.5
}if(nivel_resposta == 2){
    nivel = 3
}if(nivel_resposta == 3){
    nivel = 5
}if(nivel_resposta >3 || nivel_resposta < 1){
    console.log("Erro de configuração de perfil. ;c")
}
   //processamento das carnes
total_carne = pessoas * carne * nivel
total_cerveja = pessoas * cerveja * nivel
total_agua = pessoas * agua * nivel
total_refri = pessoas * refri * nivel

   //processamento do carvão e sal
consumo_carvao = carvao * total_carne
consumo_sal = sal * total_carne

   //processamento de bebidas ou não
if(alcool_resposta.toLowerCase() == "não"){
    total_cerveja = 0
}

if(refri_resposta.toLowerCase() == "não"){
    total_refri = 0
}

if(agua_resposta.toLowerCase() == "não"){
    total_agua = 0
}

//saída
console.log("=====================\n")
console.log("Carne: " + total_carne.toFixed(0) + "kg\n")
console.log("Cerveja: " + total_cerveja.toFixed(0) + "L")
console.log("Água: " + total_agua.toFixed(0) + "L")
console.log("Refrigerante: " + total_refri.toFixed(0) + "L")
console.log("=====================\n")
console.log("O consumo de carvão é equivalente a: " + consumo_carvao.toFixed(2) + "KG")
console.log("O consumo de sal é equivalente a: " + consumo_sal.toFixed(2) + "KG")
