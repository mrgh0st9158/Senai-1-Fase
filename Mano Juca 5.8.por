programa {
  funcao inicio() {
    inteiro idade
    
    escreva("Digite sua idade: ")
    leia(idade)

    se(idade < 16){
      escreva("Você não pode votar.")
    }senao se(idade >= 16 e idade <= 17){
      escreva("Seu voto é facultativo")
    }senao se(idade >= 18 e idade <= 65){
      escreva("Seu voto é obrigatório")
    }senao se(idade > 65){
      escreva("Seu voto é facultativo.")
    }
  }
}
