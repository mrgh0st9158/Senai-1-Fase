programa {
  funcao inicio() {
    inteiro prompt = 5
    inteiro caracteres

    escreva("Quantos caracteres esse prompt possui? ")
    leia(caracteres)

    inteiro token = prompt + caracteres
    real v_token = token * 500
    escreva("A IA cobra: " + token + " tokens")
    escreva("\nO total necessário em reais é equivalente a R$: " + v_token)
  
  }
}
