programa {
  funcao inicio() {
    inteiro vitorias
    inteiro empates

    escreva("Quantas vitórias o time de futebol teve? ")
    leia(vitorias)

    escreva("Quantos empates o time de futebol teve?  ")
    leia(empates)

    inteiro p_vitoria = vitorias * 3
    inteiro p_empates = empates * 1
    inteiro p_total = p_empates + p_vitoria


    escreva("O time de futebool teve um total de: " + p_total + " pontos.")
  }
}
