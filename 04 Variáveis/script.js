
















// consertar código de dinossauros urgentemente

let numero_aleatorio_aposta
let valor_apostado

function registrar_aposta(){
    valor_apostado = Number(document.getElementById("input_aposta").value)
    numero_aleatorio_aposta = Math.ceil(Math.random() * 10)

    console.log(numero_aleatorio_aposta)

    document.getElementById("input_aposta").value = ""

}

function botao_espinossauro(){
    if(numero_aleatorio_aposta == 1){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
        
    }else{
        valor_apostado = 0
        
        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Espinossauro")
    
    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_trex(){
     if(numero_aleatorio_aposta == 2){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")
        
    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: T-Rex")
    
    f_dinossauro_sorteado()
    
    recarregar_pagina()
}

function botao_braquiossauro(){
     if(numero_aleatorio_aposta == 3){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Braquiossauro")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_velociraptor(){
     if(numero_aleatorio_aposta == 4){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Velociraptor")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_estegossauro(){
     if(numero_aleatorio_aposta == 5){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Estegossauro")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_triceratops(){
     if(numero_aleatorio_aposta == 6){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Triceratops")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_anquilossauro(){
     if(numero_aleatorio_aposta == 7){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Anquilossauro")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_parassaurolofo(){
     if(numero_aleatorio_aposta == 8){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Parassaurolofo")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_alossauro(){
     if(numero_aleatorio_aposta == 9){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Alossauro")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function botao_carnotauro(){
     if(numero_aleatorio_aposta == 10){
        valor_apostado = valor_apostado * 2

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Ganhou, Lindão.🤩")
    }else{
        valor_apostado = 0

        document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
        document.getElementById("resultado_final").innerHTML = ("Perdeu, bobão.🤣")

    }

    document.getElementById("dinossauro_escolhido").innerHTML = ("Dinossauro escolhido: Carnotauro")

    f_dinossauro_sorteado()

    recarregar_pagina()
}

function recarregar_pagina(){
    setTimeout(function() {
        window.location.reload()
    }, 3500)

}

function f_dinossauro_sorteado(){
    if(numero_aleatorio_aposta == 1){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Espinossauro")

    }if(numero_aleatorio_aposta == 2){

         document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: T-Rex")

    }if(numero_aleatorio_aposta == 3){

         document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Braquiossauro")

    }if(numero_aleatorio_aposta == 4){

         document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Velociraptor")

    }if(numero_aleatorio_aposta == 5){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Estegossauro")

    }if(numero_aleatorio_aposta == 6){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Triceratops")

    }if(numero_aleatorio_aposta == 7){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Anquilossauro")

    }if(numero_aleatorio_aposta == 8){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Parassaurolofo")

    }if(numero_aleatorio_aposta == 9){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Alossauro")

    }if(numero_aleatorio_aposta == 10){

        document.getElementById("dinossauro_sorteado").innerHTML = ("Dinossauro sorteado: Carnotauro")

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
