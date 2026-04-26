//informações
let peso_bruto, tara, peso_carga

//entrada
peso_bruto = Number(prompt("Peso bruto do caminhão e carga:"))
tara = Number(prompt("Peso total da tara:"))

//processamento
peso_carga = peso_bruto - tara

//saída
console.log("o peso total da carga é equivalente a: " + peso_carga)