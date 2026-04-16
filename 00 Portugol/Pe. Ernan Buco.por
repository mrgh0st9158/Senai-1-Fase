programa {
  funcao inicio() {
    real custo_mensal = 4500
    real lucro = 3250
    inteiro divida

    divida = custo_mensal - lucro
    
    escreva("O custo mensal desta igreja é equivalente a R$: " + custo_mensal)
    escreva("\nPorém, a igreja faturou R$: " + lucro)
    escreva("\nPrecisamos de R$: " + divida + " para podermos cobrir os gastos mensais.")
  }
}
