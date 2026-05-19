let numero_aleatorio
let total = 0

 function dado_d4(){
     numero_aleatorio = Number(Math.ceil(Math.random() * 4))

     total = total + numero_aleatorio

    document.getElementById("resultado_soma_dados").innerHTML = total
    document.getElementById("lista_dados").innerHTML += numero_aleatorio + "<br>"

 }

//  function dado_d6(){
//     let resultado = Math.ceil(Math.random()*6)
    
// }

// function dado_d10(){
//     let resultado = Math.ceil(Math.random()*6)
    
//  }










 
function registrar_venda(){
    let valor = Number(document.getElementById("input_valor").value)

    total = total + valor

    document.getElementById("total_vendido").innerHTML = ("Total de vendas: R$" + total.toFixed(2).replace(".",","))
    document.getElementById("lista_valor").innerHTML += ("" + valor.toFixed(2).replace(".",",")) + "<br>"

    document.getElementById("input_valor").value = ""
    document.getElementById("input_valor").focus()
    
}

cont = 0

function incrementar_contagem(){
    cont ++

    document.getElementById("p-contagem").innerHTML = cont
}

function decrementar_contagem(){
    cont --
    document.getElementById("p-contagem").innerHTML = cont

}

function somar_10(){
    cont = cont + 10
    document.getElementById("p-contagem").innerHTML = cont

}

function somar_2(){
    cont = cont + 2
    document.getElementById("p-contagem").innerHTML = cont

}

function zerarContagem(){
    cont = 0
    document.getElementById("p-contagem").innerHTML = cont

}






let global = "Eu sou uma variável global"
function funcao1(){
    let local = "Eu sou uma variável local"
    console.log(local)
    console.log(global)
}
function funcao2(){
    console.log(global)
    // console.log(local)

}
