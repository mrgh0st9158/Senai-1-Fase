programa {
  funcao inicio() {
    inteiro numero1
    inteiro numero2

    escreva("digite o primeiro número ")
    leia(numero1)
    escreva("digite o segundo número ")
    leia(numero2)

    se(numero1 > numero2){
      escreva("O primeiro número é o maior: " + numero1)
    }senao{
      se(numero2 > numero1){
        escreva("O segundo número é o maior: " + numero2)
      }senao{
        se(numero1 == numero2){
          escreva("Os dois números são iguais")
        }
      }
    }
  }
}
