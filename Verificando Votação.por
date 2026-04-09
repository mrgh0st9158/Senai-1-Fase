programa {
  funcao inicio() {
    inteiro idade

    escreva("Digite sua idade: ")
    leia(idade)
    
    se(idade >= 16){
      escreva("Você pode votar este ano, parabéns.")
    }senao{
      escreva("Você ainda não pode votar este ano. :c")
    }
  }
}
