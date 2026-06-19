const todas_telas = document.querySelectorAll(".tela");

let tela_atual = 0;

function atualizar_telas(){
      todas_telas.forEach(function(todas_tela_funcao, numero_tela){
            if(numero_tela === tela_atual){
                  todas_tela_funcao.classList.remove("esconder_elemento")
            }else{
                  todas_tela_funcao.classList.add("esconder_elemento")
            }

      })


}

function proxima_tela(){
      if(tela_atual < todas_telas.length - 1){
            tela_atual++
            atualizar_telas()

      }

}

function anterior_tela(){
      if(tela_atual > 0){
            tela_atual--
            atualizar_telas()
            
      }

}


function reiniciar_processo(){
      location.reload()
      
      todas_telas.forEach(function(todas_tela_funcao){
            todas_tela_funcao.classList.add("esconder_elemento")
      })

      tela_atual.classList.remove("esconder_elemento")

}


function iniciar_historia(){

    let escolha = 0

    alert("Roque teve a ideia de criar um festival de música pela internet, chamado Rock in Reels." +

          "\n\nEle comentou essa ideia com seus amigos da Banda Jota Qwert " +
          "e eles imediatamente pularam dentro e exigiram o direito de ser a primeira" +
          "banda a tocar!" +

          "\n\nMas, para tornar essa ideia realidade ele vai precisar" +
          "convidar mais de seus amigos músicos para se apresentarem. Com as apresentações" +
          "definidas ele poderá buscar patrocínios e depois encontrar comércios para atenderem" +
          "(virtualmente) durante o evento.");

    alert("Roque já tem a Jota Qwert confirmada e vai atrás da possível segunda atração do Rock in Reels." +

           "\n\nVisitando suas amigas da Tias Fofinhas (uma banda cover de Tear for Fears)" +
           "fez o convite e ouviu suas exigências: 50 toalhas de crochê no camarim." +

           "\n\nRoque então se viu em um dilema:" +
           "nem camarim o evento tem, elas vão tocar pela internet. Quanto mais " +
           "50 toalhas de crochê.")

    escolha = Number(prompt("Roque deve falar a verdade ou mentir que tem camarim e as toalhas." +
                            "\n2: Verdade" +
                            "\n3: Mentir"))
    
    if(escolha == 2){
        alert("Roque contou para  as Tias Fofinhas que o evento ainda está engatinhando" +
              "e não temos camarins ou mesmo verba para comprar toalhas de crochê, infelizmente."+

              "\n\nElas ficaram tristes pela dura realidade dos músicos, mas apreciaram a sinceridade."+
              "Prometeram levar suas próprias toalhas e ainda passaram o contato do grupo de rap dos"+
              "netos de uma amiga delas. Elas já viram Yasmina e os Manos se apresentando no aniversário"+
              "da avó deles e acharam muito talentosos e carismáticos, além de muito conectados. Pode"+
              "ser uma boa adição para este evento."+

              "\n\nRoque foi falar com eles, Yasmina pediu que"+
              "o grupo fosse marcado em todas as fotos postadas de divulgação do evento, assim eles"+
              "poderiam atrair seu público para o evento.")
      

        escolha = Number(prompt("Roque deve aceitar ou rejeitar essa exigência?"+
                                "\n4: Aceitar"+
                                "\n5: Rejeitar"))

                                if(escolha === 4){
                                    alert("Roque aceita e marca Yasmina e os Manos em todas as postagens e o" +
                                           "efeito é assustadoramente bom! O evento viraliza e todo mundo fica" +
                                           "sabendo. Muita audiência, mas muita responsabilidade!" +

                                          "Com todo essa promessa de sucesso, ofertas de parceria e patrocínios" +
                                          "apareceram. Bandas também." +

                                          "Uma desconhecida banda chamada Horrível Trio se ofereceu para tocar." +
                                          "As músicas deles são muito relaxantes e Roque ficou receoso que colocasse" +
                                          "o público para dormir.")


                                    prompt("Roque deve aceitar Horrível Trio?" +

                                           "- Sim: 08"+
                                           "- Não: 09")

                                }if(escolha === 5){
                                      alert("Roque mente para as Tias Fofinhas que tem as toalhas. Elas perguntam" +
                                            "de que cor são, ele diz que são brancas (afinal todas as toalhas de crochê" +
                                            "são brancas, não é?). Elas complementam que suas toalhas tem que ser pretas." +
                                            "Eles gagueja, diz que se enganou e que elas são pretas." +
                                                  
                                            "Elas desconfiam dele, fazem pressão para ver as toalhas e ele acaba" +
                                            "reconhecendo que mentiu. Elas ficam muito decepcionadas e desistem de" +
                                            "participar. Ao saber disso, a banda Jota Qwert também pula fora do barco." +
                                           
                                            "Ao ver Roque abatido com o iminente fracasso, seu pai, Lucio Fernando, oferece" +
                                            "a Roque o estúdio e o salão da associação dos funcionários da sua fábrica, a Meia" +
                                            "Meia Meia, para realizar o evento. Assinando um contrato ele também teria disponível o" +
                                            "dinheiro necessário para trazer as bandas que quisesse." +
                                           
                                            "Roque nunca deixou o dinheiro e a influência de seu pai interferir em sua" +
                                            "carreira artística e se sentiu incomodado com a proposta. Ao mesmo tempo, ficou" +
                                            "balançado porque esse contrato seria a chance de realizar o maior sonho da sua" +
                                            "vida!")
                                           
                                           
                                          }

    }if(escolha == 3){
        alert("Roque contou para  as Tias Fofinhas que o evento ainda está engatinhando" +
              "e não temos camarins ou mesmo verba para comprar toalhas de crochê, infelizmente."+

              "Elas ficaram tristes pela dura realidade dos músicos, mas apreciaram a" +
              "sinceridade. Prometeram levar suas próprias toalhas e ainda passaram o" +
              "contato do grupo de rap dos netos de uma amiga delas. Elas já viram Yasmina" +
              "e os Manos se apresentando no aniversário da avó deles e acharam muito" +
              "talentosos e carismáticos, além de muito conectados. Pode ser uma boa" +
              "adição para este evento."+

              "Roque foi falar com eles, Yasmina pediu que o grupo fosse marcado em" +
              "todas as fotos postadas de divulgação do evento, assim eles poderiam" +
              "atrair seu público para o evento.")

        escolha = Number(prompt("Roque deve aceitar ou rejeitar essa exigência?"+
                                "- Aceitar: 04"+
                                "- Rejeitar: 05"))

    }

}



function iniciar_repetições(){
      let total = 0
      let i = 0
    

      while(i < 3){
            i++
             let preco = Number(prompt("Digite o preço do " + i + "° produto"))
            total = total + preco


            document.getElementById("p-resposta").innerHTML += i + "° produto: R$" + preco.toFixed(2) + "<br>"
                                                  
      }

      document.getElementById("p-resposta").innerHTML += "<br>Valor total: R$" + total.toFixed(2)

      setTimeout(function(){
            reiniciar_processo()
      },4000)
      
}

function calcular_quadrado(){

      let i = 0
      let numero = 0
      while(i < 10){
            i++
            numero = Number(prompt("Digite o " + i + "° Número"))
            let quadrado = numero * numero



            console.log(i + ": " + quadrado + "<br>")
      }

      setTimeout(function(){
            reiniciar_processo()
      },4000)

}

function imprimir_10_a_1(){
      let i = 0
      let numero = 10

      while(i < 10){
            i++
            
            document.getElementById("p-resposta").innerHTML += (numero + "<br>")

            numero--
      }


      setTimeout(function(){
            reiniciar_processo()
      },4000)
}

function soma_1_a_100(){
      let i = 0
      let soma = 0

      while(i < 100){
            i++
            soma = i + soma
            
            document.getElementById("p-resposta").innerHTML = "O resultado é equivalente a: " + soma
      }

      setTimeout(function(){
            reiniciar_processo()
      },4000)

}

function tabuada(){
      let i = 0
      let n_tabuada
      let resposta

      n_tabuada = Number(prompt("Qual tabuada você deseja?"))

      while(i < 10){
            i++
            resposta = n_tabuada * i


            document.getElementById("p-resposta").innerHTML += (resposta + "<br>")
      }

      setTimeout(function(){
            reiniciar_processo()
      },4000)

}

function numeros_impares_1_a_20(){
      i = 0

      while(i < 20){
            i++

            if(i%2 != 0){
                  console.log(i)
            }

      }

}

function numero_fatorial(){
      let i = 0
      let resposta = 1

      let numero = Number(prompt("Qual número você deseja calcular?"))

      while(i < numero){
            i++
            resposta *= i
            


            console.log(resposta)
      }
}

function fizzbuzz(){
      let i = 0
      let numero = 100
      let resposta

      while(i < 100){
            i++
            console.log(i)

            if(i%3 == 0){
                  console.log("fizz")
            }if(i%5 == 0){
                  console.log("buzz")
            }if(i%3 == 0 && i%5 == 0){
                  console.log("fizzbuzz")
            }
            

      }

}

function somar_numeros_serie(){
      let i = 0
      let resposta = 0

      while(i < 10){
            i++
            
            resposta = resposta + 1/i

            console.log(resposta)
      }


}

function pares_e_impares(){
      let i = 0
      let pares = 0
      let impares = 0

      while

}