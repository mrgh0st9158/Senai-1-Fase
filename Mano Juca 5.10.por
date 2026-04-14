programa {
  funcao inicio() {
    //variáveis
    real quantidade_maca
    real preco
    real preco_maca
    //escreva
    escreva("Quantas maças você deseja comprar: ")
    leia(quantidade_maca)
    //cálculo
    se(quantidade_maca < 12){
      preco = 0.30
    }senao se (quantidade_maca >= 12){
      preco = 0.25
    }

    preco_maca = preco * quantidade_maca
    //final
    escreva("O valor total é equivalente a: R$" + preco_maca)
  }
}
