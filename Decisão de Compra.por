programa {
  funcao inicio() {
    real valor_item
    real saldo

    escreva("Qual o valor do item que você deseja comprar? ")
    leia(valor_item)
    escreva("Qual o seu saldo atual? ")
    leia(saldo)

    se(saldo > valor_item){
      escreva("Agradecemos pela compra. Volte sempre.")
    }senao{
      escreva("Compra não efetuada. Você não possui saldo suficiente.")
    }
  }
}
