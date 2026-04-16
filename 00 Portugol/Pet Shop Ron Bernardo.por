programa {
  funcao inicio() {
    real valor_kg = 10.00
    real gramas

    escreva("Boa noite, em nosso estabelecimento possuímos ração a R$: " + (valor_kg) + " o kg.")

    escreva("\n")
    escreva("\nQuantas gramas de ração você deseja? ")
    leia(gramas)

    real valor_subtotal = gramas * valor_kg
    real valor_total = valor_subtotal / 1000

    escreva("\n")
    escreva("\nO valor necessário para o pagamento é equivalente a R$:" + valor_total)
  }
}
