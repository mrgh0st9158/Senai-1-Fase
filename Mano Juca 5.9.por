programa {
  funcao inicio() {
    //variáveis
    real altura
    inteiro genero
    inteiro calculo
    //escreva
    escreva("Qual a sua altura?(em metros) :")
    leia(altura)
    escreva("Qual o seu gênero?\n1 Para Feminino\n2 Para Masculino\n")
    leia(genero)
    //calculo
    se(genero == 1){
     calculo = altura * 62.1 - 42
    }senao se(genero == 2){
      calculo = altura * 72.7 - 58
    }
    //final
    escreva("O seu peso ideal é equivalente a: " + calculo)
  }
}
