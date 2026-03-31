programa {
  funcao inicio() {
    real aposta = 6579
    real premiacoes = 112
    real presentes = 750
    real comissoes = 650
    real lucro_bruto
    real gastos
    real lucro_total

    lucro_bruto = aposta
    gastos = premiacoes + presentes + comissoes
    lucro_total = lucro_bruto - gastos

    escreva("Dona Bete recebeu R$:" + lucro_total + " de lucro total.")
    
  }
}
