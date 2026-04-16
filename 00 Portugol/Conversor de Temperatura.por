programa {
  funcao inicio() {
    real t_celsius
    real t_fahrenheit

    escreva("Insira a temperatura em Celsius: ")
    leia(t_celsius)

    t_fahrenheit = t_celsius * 9 / 5 + 32

    escreva("a temperatura em fahrenheit é equivalente a: " + t_fahrenheit)

    escreva("\n")

    se(t_fahrenheit > 68){
      escreva("Tá super calor, corram pelas suas vidaass.")
    }senao{
      escreva("Não está tão calor assim, podem se manter em suas casas.")
    }
  }
}
