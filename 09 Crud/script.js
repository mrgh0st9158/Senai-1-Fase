//C >> Create >> Cadastrar

//R >> Read >> Ler

//U >> Update >> Atualizar

//D >> Delete >> Apagar

let dinos = []

function limpar_input() {
    document.getElementById("input_nome").value = ""
    document.getElementById("input_altura").value = ""
    document.getElementById("input_cor").value = ""
    document.getElementById("input_custo").value = ""
    document.getElementById("input_id").value = ""

    document.getElementById("input_nome").focus()
}

function cadastrar_dino() {
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

    mostrar_todos()

}

function mostrar_todos() {
    document.getElementById("div-resposta").innerHTML = ""
    for (let i = 0; i < dinos.length; i++) {
        // document.getElementById("div-resposta").innerHTML += "ID: " + dinos[i].id + "<br>"
        // document.getElementById("div-resposta").innerHTML += "Nome: " + dinos[i].nome + "<br>"
        // document.getElementById("div-resposta").innerHTML += "Altura: " + dinos[i].altura + "<br>"
        // document.getElementById("div-resposta").innerHTML += "Cor: " + dinos[i].cor + "<br>"
        // document.getElementById("div-resposta").innerHTML += "Custo: " + dinos[i].custo + "<br>"
        // document.getElementById("div-resposta").innerHTML += "========================== <br>"

        document.getElementById("div-resposta").innerHTML +=
            `<div class="layout_dinos">
                <h2>Nome: ${dinos[i].nome}<h2>
                <p>ID: ${dinos[i].id}
                <p>Altura: ${dinos[i].altura}<p>
                <p>Cor: ${dinos[i].cor}<p>
                <p>Custo: ${dinos[i].custo}<p>
                </div>`
    }
}

function testar() {
    dinos = [
        {
            id: 1718324500001,
            nome: "Tiranossauro Rex",
            altura: 6.1,
            cor: "#8B4513", // Marrom
            custo: 150000
        },
        {
            id: 1718324500002,
            nome: "Velociraptor",
            altura: 2.0,
            cor: "#2E8B57", // Verde escuro
            custo: 85000
        },
        {
            id: 1718324500003,
            nome: "Tricerátops",
            altura: 3.0,
            cor: "#708090", // Cinza
            custo: 120000
        },
        {
            id: 1718324500004,
            nome: "Braquiossauro",
            altura: 13.0,
            cor: "#556B2F", // Verde oliva
            custo: 250000
        },
        {
            id: 1718324500005,
            nome: "Pterodáctilo",
            altura: 1.5,
            cor: "#4682B4", // Azul aço
            custo: 95000
        }
    ]
}

function pesquisar() {
    let nome_procurado = document.getElementById("input_nome").value

    for (let i = 0; i < dinos.length; i++) {
        if (nome_procurado === dinos[i].nome) {
            document.getElementById("input_altura").value = dinos[i].altura
            document.getElementById("input_cor").value = dinos[i].cor
            document.getElementById("input_custo").value = dinos[i].custo
            document.getElementById("input_id").value = dinos[i].id

            console.log(i)
        }
    }

}

function salvar_dino(){
    let id = Number(document.getElementById("input_id").value)

    for (let i = 0; i < dinos.length; i++) {
        if (id === dinos[i].id) {
            dinos[i].altura = document.getElementById("input_altura").value
            dinos[i].cor = document.getElementById("input_cor").value
            dinos[i].custo = document.getElementById("input_custo").value
            dinos[i].id = document.getElementById("input_id").value

            console.log(i)
        }
    }

    mostrar_todos()

}

function apagar_dino(){
    let id = Number(document.getElementById("input_id").value)

    for (let i = 0; i < dinos.length; i++) {
        if (id === dinos[i].id) {
            dinos.splice(i, 1)

            console.log(i)
        }
    }

    mostrar_todos()
}