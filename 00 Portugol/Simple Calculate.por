programa {
  funcao inicio() {
    //Variáveis
    real codigo_P1
    real quantidade_P1
    real valor_P1

    real codigo_P2
    real quantidade_P2
    real valor_P2
    
    escreva("Qual o código do produto 1? ")
    leia(codigo_P1)
    escreva("Qual a quantidade do produto 1? ")
    leia(quantidade_P1)
    escreva("Qual o valor do produto 1? ")
    leia(valor_P1)

    real valor_total_P1 = quantidade_P1 * valor_P1

    escreva("Qual o código do produto 2? ")
    leia(codigo_P2)
    escreva("Qual a quantidade do produto 2? ")
    leia(quantidade_P2)
    escreva("Qual o valor do produto 2? ")
    leia(valor_P2)

    real valor_total_P2 = quantidade_P2 * valor_P2

    real valor_total = valor_total_P1 + valor_total_P2

    escreva("\nO valor a pagar é equivalente a R$: " + valor_total)

  }
}
