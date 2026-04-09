programa {
  funcao inicio() {
    real peso
    real altura
    
    escreva("Digite a sua altura: ")
    leia(altura)
    escreva("Digite a sua peso: ")
    leia(peso)
    
    real calculo = peso / (altura * altura)

    se(calculo > 25){
      escreva("Parabéns seu IMC é maior que 25.")
    }senao{
      escreva("Parabéns seu IMC é menor que 25.")
    }
  }
}
