//informações
let chance, n_celular

//entrada
n_celular = Number(prompt("Quantas vezes o celular foi utilizado no processo profissionalizante?"))

//processamento
chance = (0.1/(1 + 500 * n_celular)) * 100

//saída
console.log("A chance do aluno ser aprovado é equivalente a: " + chance.toFixed(4) + "%")