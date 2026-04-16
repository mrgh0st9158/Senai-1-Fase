programa {
  funcao inicio() {
    real moradia
    real agua
    real luz
    real internet
    real gasolina
    real streamings
    real telefone
    real outros

    real salario

    escreva("Qual o valor total que você recebe mensalmente? ")
    leia(salario)

    escreva("Qual o seu custo de Moradia? ")
    leia(moradia)
    escreva("Qual o seu custo de Água? ")
    leia(agua)
    escreva("Qual o seu custo de Luz? ")
    leia(luz)
    escreva("Qual o seu custo de Internet? ")
    leia(internet)
    escreva("Qual o seu custo de Gasolina? ")
    leia(gasolina)
    escreva("Qual o seu custo de Streamigs? ")
    leia(streamings)
    escreva("Qual o seu custo de Telefone? ")
    leia(telefone)
    escreva("Qual o seu custo com Gastos Diversos? ")
    leia(outros)

    real gastos = moradia + agua + luz + internet + gasolina + streamings + telefone + outros
    real restante = salario - gastos

    escreva("\nO que sobrou levando em conta o seu salário e os seus gastos foi equivalente a R$: " + restante + ", seu lindo. <3")
  }
}
