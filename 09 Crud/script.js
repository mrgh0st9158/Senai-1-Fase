//C >> Create >> Cadastrar

//R >> Read >> Ler

//U >> Update >> Atualizar

//D >> Delete >> Apagar


let dinos = []

function limpar_input(){
    document.getElementById("input_nome").value = ""
    document.getElementById("input_altura").value = ""
    document.getElementById("input_cor").value = ""
    document.getElementById("input_custo").value = ""

    document.getElementById("input_nome").focus()
}

function cadastrar_dino(){
    const novo_dino = {
        id: Date.now(),
        nome: document.getElementById("input_nome").value,
        altura: Number(document.getElementById("input_altura").value),
        cor: document.getElementById("input_cor").value,
        custo: Number(document.getElementById("input_custo").value)
    }

    dinos.push(novo_dino)

    console.log(dinos)

    limpar_input()

}

function mostrar_todos(){
    for(let i = 0; i < dinos.length; i++){
        document.getElementById("div-resposta").innerHTML += "ID: " + dinos[i].id + "<br>"
        document.getElementById("div-resposta").innerHTML += "Nome: " + dinos[i].nome + "<br>"
        document.getElementById("div-resposta").innerHTML += "Altura: " + dinos[i].altura + "<br>"
        document.getElementById("div-resposta").innerHTML += "Cor: " + dinos[i].cor + "<br>"
        document.getElementById("div-resposta").innerHTML += "Custo: " + dinos[i].custo + "<br>"
        document.getElementById("div-resposta").innerHTML += "========================== <br>"
    }
}

function testar() {
    
}
