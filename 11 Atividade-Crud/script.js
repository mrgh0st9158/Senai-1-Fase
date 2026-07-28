setTimeout(() => {
    const sectionInicial = document.getElementById("section_inicial");

    sectionInicial.classList.add("esconder_logo");

    setTimeout(() => {
        document.getElementById("section_form").classList.remove("esconder_elemento");

    }, 700)
}, 2000)


let itens = []
const mensagem = document.getElementById("mensagem")


function limpar_input(){
    document.getElementById("input_nome").value = ""
    document.getElementById("input_cor").value = ""
    document.getElementById("input_custo").value = ""
    document.getElementById("input_monstro").value = ""
    document.getElementById("input_origem").value = ""
    document.getElementById("input_id").value = ""
}

function limpar_mensagem(){
  mensagem.innerHTML = ""
}

function adicionar_item() {
    const novo_item = {
        nome: document.getElementById("input_nome").value,
        cor: document.getElementById("input_cor").value,
        custo: Number(document.getElementById("input_custo").value),
        monstro: document.getElementById("input_monstro").value,
        origem: document.getElementById("input_origem").value,
        id: Date.now()
    }

    if(novo_item.nome.length > 40){
      alert("O nome pode ter no máximo 40 caracteres.");
      return;
    }
    
    itens.push(novo_item)

    limpar_input()

    mostrar_itens()
    
}

function mostrar_itens(){
    document.getElementById("div_cards").innerHTML = ""

    for(let i = 0; i < itens.length; i++){

        document.getElementById("div_cards").innerHTML +=
        `<div id="card_${i}" class="layout_itens ">
            <h2>Nome: ${itens[i].nome}</h2>
            <p>Cor: ${itens[i].cor}</p>
            <p>Custo: ${itens[i].custo}</p>
            <p>Monstro: ${itens[i].monstro}</p>
            <p>Origem: ${itens[i].origem}</p>
            <p>ID: ${itens[i].id}</p>
         </div>`
    }
}

function buscar_item(){
  const nome_pesquisado = document.getElementById("input_nome").value;

  for(let i = 0; i<itens.length; i++){
    if(itens[i].nome === nome_pesquisado){
      document.getElementById("input_cor").value = itens[i].cor
      document.getElementById("input_custo").value = itens[i].custo
      document.getElementById("input_origem").value = itens[i].origem
      document.getElementById("input_monstro").value = itens[i].monstro
      document.getElementById("input_id").value = itens[i].id
    }
  }
}

function cacar_monstro(){
  //resetar elementos
  limpar_mensagem()

  for(let i = 0; i<itens.length; i++){
    document.getElementById("card_" + i).classList.remove("esconder_elemento")
  }
  //=================

  const monstro_pesquisado = document.getElementById("input_monstro").value;
  let encontrados = 0

  for(let i = 0; i < itens.length; i++){
    if(itens[i].monstro !== monstro_pesquisado){
      document.getElementById("card_" + i).classList.add("esconder_elemento")
    }else{
      encontrados++
    }
  }

  if(encontrados === 0){
    mensagem.innerHTML = `<h2>Monstro não encontrado</h2>`
  }
}

function teste(){
   const novo_item = [
  {
    id: 154367,
    nome: "Taça de Sangue",
    cor: "Vermelho",
    custo: 50,
    monstro: "Vampiro",
    origem: "Transilvânia"
  },
  {
    id: 2432212,
    nome: "Cérebro Fresco",
    cor: "Rosa",
    custo: 25,
    monstro: "Zumbi",
    origem: "Humanos"
  },
  {
    id: 397564,
    nome: "Pó de Plim Plim Mágico",
    cor: "Dourado",
    custo: 40,
    monstro: "Fada",
    origem: "Floresta da Luz"
  },
  {
    id: 4425643,
    nome: "Amuleto da Lua Cheia",
    cor: "Prata",
    custo: 35,
    monstro: "Lobisomem",
    origem: "Floresta das Sombras"
  },
  {
    id: 586753,
    nome: "Parafuso Energizado",
    cor: "Verde",
    custo: 60,
    monstro: "Frankenstein",
    origem: "Laboratório Frankestein"
  }
];

for(let i = 0; i<novo_item.length;i++){
  if(!itens.some(item => item.id === novo_item[i].id)){
    itens.push(...novo_item)
  }
}

mostrar_itens()

limpar_mensagem()
}