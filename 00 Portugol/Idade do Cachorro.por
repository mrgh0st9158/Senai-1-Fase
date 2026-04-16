programa {
  funcao inicio() {
   inteiro idade_cachorro
   inteiro idade_cachorro_H

   escreva("Escreva a idade do seu cachorro: ")
   leia(idade_cachorro)

   idade_cachorro_H = idade_cachorro * 7

   escreva("O seu cachorro possui " + idade_cachorro_H + " anos humanos\n")

   se(idade_cachorro_H > 65){
    escreva("Parabéns, seu cachorro já pode se aposentar! ^-^")
   }senao{
    escreva("Seu cachorro ainda não está apto para a aposentadoria... :c")
   }
  }
}
