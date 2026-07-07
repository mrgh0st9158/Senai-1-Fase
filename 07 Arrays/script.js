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

let dias_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let numeros_pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let frutas = ["Banana", "Maçã", "Uva"]

let produtos = ["Meia", "Pá de Corte", "Suco de manga", "Leite"]
let precos = [666, 777, 12, 4]


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

function array_dias_semana(){
  console.log(dias_da_semana)
}

function inverter_array(){
  dias_da_semana.reverse()

  console.log(dias_da_semana)
}

function adicionar_feriado(){
  dias_da_semana.push("Feriado")

}

function remover_dia_da_semana(){
  dias_da_semana.pop()

}

function array_numeros_pares(){
  console.log(numeros_pares)
}

function substituir_numero(){
  numeros_pares[2] = 12
}

function array_frutas(){
  console.log(frutas)
}

function adicionar_fruta(){
  frutas.push("Morango")
}