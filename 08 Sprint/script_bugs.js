function sprint_bugs(){
    const bugs = []
    let quantidade_dias = 0, total_bugs = 0, maior_dia = 0, maior_bugs = 0, menor_dia = 0, loop = true

    quantidade_dias = Number(prompt("Digite quantos dias esse Sprint possui:"))

    for(let i = 1; i <= quantidade_dias; i++){
        resposta_for = Number(prompt("Digite quantos bugs apareceram no dia " + i))
        
        bugs.push(resposta_for)
        total_bugs += resposta_for
        item = i - 1
        
        if(resposta_for > maior_bugs){
            maior_bugs = resposta_for
            maior_dia = i
        }
        if(loop = true ){
            menor_bugs = resposta_for
        }

        console.log(i + "° Dia: " + bugs[item])
    }
    let media_bugs = total_bugs / quantidade_dias

    console.log("\nTotal de Bugs: " + total_bugs)
    console.log("\nMédia de Bugs por dia: " + media_bugs)
    console.log("\nDia com mais bugs: " + maior_dia + "° Dia")
    console.log("\nQuantidade de bugs no dia com mais bugs: " + maior_bugs)
    console.log("\nDia com menos bugs: " + menor_dia + "° Dia")
    console.log("\nQuantidade de bugs no dia com menos bugs: " + menor_bugs)
    
}