// consertar código de dinossauros urgentemente

let numero_aleatorio_aposta
let valor_apostado

function registrar_aposta(){
    valor_apostado = Number(document.getElementById("input_aposta").value)
    numero_aleatorio_aposta = Math.ceil(Math.random() * 10)

    console.log(numero_aleatorio_aposta)

}

function botao_espinossauro(){
    if(numero_aleatorio_aposta == 1){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }

}

function botao_trex(){
     if(numero_aleatorio_aposta == 2){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_braquiossauro(){
     if(numero_aleatorio_aposta == 3){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_velociraptor(){
     if(numero_aleatorio_aposta == 4){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_estegossauro(){
     if(numero_aleatorio_aposta == 5){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_triceratops(){
     if(numero_aleatorio_aposta == 6){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_anquilossauro(){
     if(numero_aleatorio_aposta == 7){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_parassaurolofo(){
     if(numero_aleatorio_aposta == 8){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_alossauro(){
     if(numero_aleatorio_aposta == 9){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

function botao_carnotauro(){
     if(numero_aleatorio_aposta == 10){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}










let numero_aleatorio
let total = 0

 function dado_d4(){
     numero_aleatorio = Number(Math.ceil(Math.random() * 4))

     total = total + numero_aleatorio

    document.getElementById("resultado_soma_dados").innerHTML = "Resultado da soma dos dados: " + total
    document.getElementById("lista_dados").innerHTML += numero_aleatorio + "<br>"

 }

 function dado_d6(){
    numero_aleatorio = Number(Math.ceil(Math.random() * 6))

    total = total + numero_aleatorio

    document.getElementById("resultado_soma_dados").innerHTML = "Resultado da soma dos dados: " + total
    document.getElementById("lista_dados").innerHTML += numero_aleatorio + "<br>"

 }

 function dado_d10(){
    numero_aleatorio = Number(Math.ceil(Math.random() * 10))

     total = total + numero_aleatorio

    document.getElementById("resultado_soma_dados").innerHTML = "Resultado da soma dos dados: " + total
    document.getElementById("lista_dados").innerHTML += numero_aleatorio + "<br>"

 }


function dado_d12(){
    numero_aleatorio = Number(Math.ceil(Math.random() * 12))

     total = total + numero_aleatorio

    document.getElementById("resultado_soma_dados").innerHTML = "Resultado da soma dos dados: " + total
    document.getElementById("lista_dados").innerHTML += numero_aleatorio + "<br>"

}










 
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
