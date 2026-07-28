// setTimeout(() => {
//     const sectionInicial = document.getElementById("section_inicial");

//     sectionInicial.classList.add("esconder_logo");

//     setTimeout(() => {
//         document.getElementById("section_form").classList.remove("esconder_elemento");

//     }, 700)
// }, 2000)


let itens = []

function limpar_input(){
    document.getElementById("input_nome").value = ""
    document.getElementById("input_cor").value = ""
    document.getElementById("input_custo").value = ""
    document.getElementById("input_monstro").value = ""
    document.getElementById("input_id").value = ""
}

function adicionar_item() {
    const novo_item = {
        nome: document.getElementById("input_nome").value,
        cor: document.getElementById("input_cor").value,
        custo: Number(document.getElementById("input_custo").value),
        monstro: document.getElementById("input_monstro").value,
        id: Number(document.getElementById("input_id").value)
    }
    
    itens.push(novo_item)

    limpar_input()
    
}

function mostrar_itens(){
    document.getElementById("div_cards").innerHTML = ""

    for(let i = 0; i < itens.length; i++){

        document.getElementById("div_cards").innerHTML +=
        `<div class="layout_itens">
            <h2>Nome: ${itens[i].nome}</h2>
            <p>Cor: ${itens[i].cor}</p>
            <p>Custo: ${itens[i].custo}</p>
            <p>Monstro: ${itens[i].monstro}</p>
            <p>ID: ${itens[i].id}</p>
         </div>`
    }
}

function teste(){
   itens = [
  {
    id: 1,
    nome: "Taça de Sangue",
    cor: "Vermelho",
    custo: 50,
    monstro: "Vampiro"
  },
  {
    id: 2,
    nome: "Cérebro Fresco",
    cor: "Rosa",
    custo: 25,
    monstro: "Zumbi"
  },
  {
    id: 3,
    nome: "Pó de Plim Plim Mágico",
    cor: "Dourado",
    custo: 40,
    monstro: "Fada"
  },
  {
    id: 4,
    nome: "Amuleto da Lua Cheia",
    cor: "Prata",
    custo: 35,
    monstro: "Lobisomem"
  },
  {
    id: 5,
    nome: "Parafuso Energizado",
    cor: "Verde",
    custo: 60,
    monstro: "Frankenstein"
  }
];
}