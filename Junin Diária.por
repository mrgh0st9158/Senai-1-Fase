programa {
  funcao inicio() {
    real salario
    inteiro dias
    real salario_diario

    escreva("Digite seu salário: ")
    leia(salario)
    escreva("Quantos dias trabalhou no mês:  ")
    leia(dias)
    salario_diario = salario / dias
    escreva("\nPor dia você recebe R$: " + salario_diario)
    
  }
}