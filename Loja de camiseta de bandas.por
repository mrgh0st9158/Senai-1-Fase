programa {
  funcao inicio() {
    real preco = 120
    inteiro camisetas = 12
    real imposto = 520
    inteiro lucro_subtotal
    inteiro lucro_total
    inteiro devolucoes = 4
    inteiro camisetas_restantes = camisetas - devolucoes
    real lucro_semifinal
    real lucro_final
    //
    lucro_subtotal = camisetas * preco
    lucro_total = lucro_subtotal - imposto
    lucro_semifinal = camisetas_restantes * preco
    camisetas_restantes = camisetas - devolucoes
    lucro_final = lucro_semifinal - imposto
    //
    escreva("O lucro da loja vendendo as camisetas foi de R$:" + lucro_subtotal)
    escreva("\nO lucro total da loja incluindo impostos é de R$:" + lucro_total)
    escreva("\nPorém, houve devoluções de algumas camisetas. O lucro total após essas devoluções é de R$:" + lucro_semifinal)
    escreva("\nJunto de impostos esse lucro baixa para R$:" + lucro_final)
    escreva("\nEsse mês, a loja de camisetas de banda fez R$:" + lucro_final + "\nParabéns!")
  }
}
