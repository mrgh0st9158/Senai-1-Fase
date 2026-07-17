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