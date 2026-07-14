//C >> Create >> Cadastrar

//R >> Read >> Ler

//U >> Update >> Atualizar

//D >> Delete >> Apagar


const dinos = []

function testar() {
    let add_dino = {
        nome: prompt("Nome: "),
        altura: 3,
        cor: "marrom",
        custo: 14
    }

    dinos.push(add_dino)

    console.log(dinos)
}