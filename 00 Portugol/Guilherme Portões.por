programa {
  funcao inicio() {
    inteiro devclt
    inteiro estagiario
    inteiro devpj

    escreva("Quantidade de CLTs:")
    leia(devclt)
   
    escreva("\nQuantidade de Estagiários:")
    leia(estagiario)

    escreva("\nQuantidade de PJs:")
    leia(devpj)

    inteiro dev_total = devclt + estagiario + devpj

    escreva("\nEm nossa empresa temos um total de: " + dev_total + (" Desenvolvedores."))
  }
}
