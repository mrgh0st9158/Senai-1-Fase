// setTimeout(() => {
//     const sectionInicial = document.getElementById("section_inicial");

//     sectionInicial.classList.add("esconder_logo");

//     setTimeout(() => {
//         document.getElementById("section_form").classList.remove("esconder_elemento");

//     }, 700)
// }, 2000)


let itens = []


function adicionar_item() {
    const novo_item = {
        nome: document.getElementById("input_nome").value,
        cor: document.getElementById("input_cor").value,
        custo: Number(document.getElementById("input_custo").value),
        monstro: document.getElementById("input_monstro").value,
        id: Number(document.getElementById("input_id").value)
    }
    
    itens.push(novo_item)
    
}

function mostrar_itens(){
    document.getElementById("div_cards").innerHTML = ""

    for(let i = 0; i < itens.length; i++){

        document.getElementById("div_cards").innerHTML +=
        `<div class="layout_cards">
            <h2>Nome: ${itens[i].nome}<h2>
            <p>Cor: ${itens[i].cor}
            <p>Custo: ${itens[i].custo}
            <p>Monstro: ${itens[i].monstro}
            <p>ID: ${itens[i].id}`
    }
}