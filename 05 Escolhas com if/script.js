function iniciar_historia(){

    const escolha = 0

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