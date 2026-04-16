programa {
  funcao inicio() {
    real nota_A, nota_B, media

    escreva("Qual foi a nota primeira nota? ")
    leia(nota_A)
    escreva("Qual foi a nota da segunda nota? ")
    leia(nota_B)

    media = (nota_A + nota_B) / 2
    se(nota_A > 10 ou nota_A < 0 ou nota_B > 10 ou nota_B < 0){
      escreva("Erro no cálculo de média")
    }senao{
      escreva("A sua média foi equivalente a: " + media)
    }
    
  }
}
