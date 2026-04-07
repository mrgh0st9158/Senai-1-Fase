programa {
  funcao inicio() {
    inteiro bomba = 7
    inteiro show
    inteiro valor_bomba

    escreva("Quantos shows Sarumano irá fazer? ")
    leia(show)
    escreva("Quanto cada bomba custa? ")
    leia(valor_bomba)
    
    inteiro bombas_faltante = show * bomba
    inteiro gasto_por_show = valor_bomba * bombas_faltante

    escreva("Sarumano irá precisar de: " + bombas_faltante + " bombas de fumaça para fazer todos os seus shows.")
    escreva("\nSarumano também precisará desbancar R$: " + gasto_por_show + " para poder realizar a compra de todas as bombas.")
  }
}
