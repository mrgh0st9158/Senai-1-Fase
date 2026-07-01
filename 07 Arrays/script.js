const nomes = [
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
];

const dias_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const copia_semana = []

let produtos = ["Meia", "Pá de Corte", "Suco de manga", "Leite"]
let precos = [666, 777, 12, 4]

function inverter_array(){
  let removido = dias_da_semana.pop(7)
  copia_semana.push(removido)

  console.log(dias_da_semana)
  console.log
}

function ver_produtos(){
  
  for(let i = 0; i < produtos.length; i++){
    let j = i + 1
    document.getElementById("lista_produtos").innerHTML += "<p>" + j + "°: " + produtos[i] + "</p>"
  }
}

function ver_produtos_e_precos(){

  document.getElementById("lista_produtos").innerHTML = ""
  for(let i = 0; i < produtos.length; i++){
    let j = i + 1
    document.getElementById("lista_produtos").innerHTML += "<p>" + j + "°: " + produtos[i] + " - R$" + 
    precos[i].toFixed(2).replace(".",",") + "</p>"
  }
}

function remover_ultimo_produto(){
  produtos.pop()
  precos.pop()
}

function aumentar_preco_300_porcento(){
  for(i = 0; i < produtos.length; i++){
    precos[i] *= 4
  }
}

function adicionar_produto(){
  let nome_produto
  let preco_produto = 0

    do{
      nome_produto = prompt("Nome do produto:")
    }while(nome_produto === "" ||  !isNaN(nome_produto))

    do{
      preco_produto = Number(prompt("Preço do produto:"))
          
    }while(preco_produto <= 0)
        
        
    
  produtos.push(nome_produto)
  precos.push(preco_produto)

  ver_produtos_e_precos()

}