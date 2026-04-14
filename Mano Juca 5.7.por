programa {
  funcao inicio() {
    //informações
    real valor_total, valor_diaria, desconto10, desconto15, multa=150, valor_bruto
    inteiro dias
    //entradas
    escreva("Quantos dias?: ")
    leia(dias)
    //processamento
    se(dias <= 5){
      valor_diaria = 100
    }senao se(dias >= 6 e dias <=10){
      valor_diaria = 90
    }senao se(dias >= 11){
      valor_diaria = 80
    }
    valor_bruto = dias * valor_diaria
    desconto10 = valor_bruto * 0.1
    desconto15 = valor_bruto * 0.15
    valor_total = valor_bruto - desconto10 - desconto15 + multa
    //saídas
    escreva("\n======================\n")
    escreva("Valor Bruto: R$" +valor_bruto)
    escreva("\nDesconto 1: R$" + desconto10)
    escreva("\nDesconto 2: R$" + desconto15)
    escreva("\nMulta: R$" + multa)
    escreva("\n----------------------\n")
    escreva("Total a pagar: R$" + valor_total)
    escreva("\n----------------------\n")
  }
}
