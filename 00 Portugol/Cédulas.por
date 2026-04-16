programa {
  funcao inicio() {
    inteiro valor

    inteiro nota100 = 100.00
    inteiro nota50 = 50.00
    inteiro nota20 = 20.00
    inteiro nota10 = 10.00
    inteiro nota5= 5.00
    inteiro nota2 = 2.00
    inteiro nota1 = 1.00

    escreva("Escreva o valor: ")
    leia(valor)

    nota100 = valor / 100
    valor = valor % 100
    
    nota50 = valor / 50
    valor = valor % 50

    nota20 = valor / 20
    valor = valor % 20

    nota10 = valor / 10
    valor = valor % 10

    nota2 = valor / 2
    valor = valor % 2

    nota1 = valor / 1


    escreva("Notas de R$100,00: " + nota100)
    escreva("\n")
    escreva("Notas de R$50,00: " + nota50)
    escreva("\n")
    escreva("Notas de R$20,00: " + nota20)
    escreva("\n")
    escreva("Notas de R$10,00: " + nota10)
    escreva("\n")
    escreva("Notas de R$2,00: " + nota2)
    escreva("\n")
    escreva("Notas de R$1,00: " + nota1)
    
     }
}