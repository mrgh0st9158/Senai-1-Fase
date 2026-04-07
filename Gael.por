programa {
  funcao inicio() {
    inteiro jacare
    inteiro caminhao
    real preco_caminhao = 450.00
    real preco_jacare = 90.00

    escreva("Quantos caminhões com jacarés estão levando? ")
    leia(caminhao)

    inteiro total_caminhao = caminhao * preco_caminhao
    inteiro total_jacare = 50 * caminhao
    inteiro lucro = total_caminhao - total_jacare
    
    escreva("Tivemos um total de: " + caminhao + " caminhões.")
    escreva("\nO lucro total foi equivalente a R$: " + lucro)
  }
}
