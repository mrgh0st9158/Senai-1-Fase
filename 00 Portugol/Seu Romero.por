programa {
  funcao inicio() {
    real preco_arte

    escreva("Quanto custa a Arte que você obteu? ")
    leia(preco_arte)

    real porcentagem = preco_arte * 200 / 100
    real valor_venda = preco_arte + porcentagem

    escreva("Você deve vender a arte a R$: " + valor_venda + " Para obter o lucro desejado de 200%.")

  }
}
