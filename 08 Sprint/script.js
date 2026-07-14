function sprint_dia_semana(){
    let quantidade_dias = 0
    const tarefas_feitas = []
    let total_tarefas = 0

    quantidade_dias = Number(prompt("Digite a quantidade de dias:"))

    for(let i = 1; i <= quantidade_dias; i++){
        let resposta_for = Number(prompt("Digite quantas tarefas foram feitas no dia " + i + ":"))

        tarefas_feitas.push(resposta_for)
        total_tarefas += resposta_for
        item = i - 1

        console.log(i + "° Dia: " + tarefas_feitas[item])
    }

    console.log("\nTotal de tarefas concluídas: " + total_tarefas)
}

function sprint_bugs(){
    const bugs = []
    let quantidade_dias = 0, total_bugs = 0, maior_dia = 0, maior_bugs = 0

    quantidade_dias = Number(prompt("Digite quantos dias esse Sprint possui:"))

    for(let i = 1; i <= quantidade_dias; i++){
        resposta_for = Number(prompt("Digite quantos bugs apareceram no dia " + i))

        
        bugs.push(resposta_for)
        total_bugs += resposta_for
        item = i - 1
        
        if(bugs[item] > maior_bugs){
            maior_bugs = bugs[i]
            maior_dia = bugs.indexOf(maior_bugs)
        }

        console.log(i + "° Dia: " + bugs[item])
    }
    let media_bugs = total_bugs / quantidade_dias

    console.log("\nTotal de Bugs: " + total_bugs)
    console.log("\nMédia de Bugs por dia: " + media_bugs)
    console.log("\nDia com mais bugs: " + maior_dia)
    
}