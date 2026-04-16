programa {
  funcao inicio() {
    real pagamento_D = 500.00
    real pagamaneto_free = 350.00
    real pagamento_total = pagamento_D + pagamaneto_free
    inteiro horas_free

    escreva("Você tem interesse em contratar os serviços de Junin por quantas horas? ")
    leia(horas_free)

    real valor_total = pagamento_total * horas_free
    real lucro_junin = pagamaneto_free * horas_free

    escreva("\nO valor a pagar deste freelancer é equivalente a R$:" + valor_total)

    escreva("\n")
    escreva("\nJunin lucrou R$:" + lucro_junin + " neste freelancer.")
  }
}
