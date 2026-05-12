let resposta = document.getElementById("resultado")

function verificarProvisoes(){
    // informações

    let marujos, comida
    let comida_por_marujo
    // entradas

    marujos = Number(prompt("Quantidade de marujos:"))
    comida = Number(prompt("Quilos de comida:"))
    // processamentos
    comidaPorMarujo = comida / marujos

    // saidas
    if(marujos >= 10 && comidaPorMarujo >= 1.5){ // ||
        document.getElementById('resultado').innerHTML = "Provisões suficientes. Rumo ao horizonte!"
    }else{
        document.getElementById('resultado').innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
    }
    
}

function calcularChances(){
    // alert("Aqui vou calcular as chances das criancinhas...")

    document.getElementById("resultado").innerHTML = "Resultado das chances..."
}

function calcularPrecoBrique(){
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS 
    precoCompra = Number(prompt("Preço de compra:"))
    // PROCESSAMENTO
    precoVenda = precoCompra * 3
    // SAIDAS
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda: R$" + precoVenda.toFixed(2));

    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)
}

function recrutamento_marujos(){
    //informações
    let sabe_nadar, idade, resposta_recomendação

    //entrada
    idade = Number(prompt("Digite sua idade:"))
    sabe_nadar = (prompt("Sabe nadar?\nS ou N"))
    resposta_recomendação = (prompt("Possui recomendação?\nS ou N"))

    //processamento


    //saída
    if(idade > 16 && sabe_nadar.toLowerCase == "s"){
        document.getElementById("resultado").innerHTML = "Aprovado para o navio!"
    } if(idade >= 14 && resposta_recomendação == "s"){
        document.getElementById("resultado").innerHTML = "Aprovado sob recomendação. Monitorar nas primeiras viagens."
    }else{
        document.getElementById("resultado").innerHTML = "Reprovado. Volte quando estiver mais preparado para o mar."
    }
}
function maquina_fumaca(){
    //informações
    let criancas_pequenas, velocidade_vento

    //entrada
    criancas_pequenas = Number(prompt("Qual o total de crianças na festa?"))
    velocidade_vento = Number(prompt("Qual a velocidade do vento no momento?"))
    
    //processamento
    

    //saída
    if(criancas_pequenas == 0 && velocidade_vento >= 0.5){
        document.getElementById("resultado").innerHTML = ("Fumaça liberada. Que comecem os mistérios!")
    }else{
        document.getElementById("resultado").innerHTML = ("Fumaça bloqueada. Aguardar condições ideais.")
    }
}
function verificar_idade(){
    //informações
    let idade

    //entrada
    idade = Number(prompt("Digite sua idade:"))

    //processamento
    

    //saída
    if(idade >= 18){
      resposta.innerHTML = "Você é maior de idade."
    }else{
      resposta.innerHTML = "Você é menor de idade."
    }
}
function deslocamento_eventos(){
    //informações
    let esta_gripado, tempo_distancia

    //entrada
    esta_gripado = (prompt("Sarumano está gripado?\nSim = S Não = N"))
    tempo_distancia = Number(prompt("Quantos minutos leva até chegar no local do evento?"))

    //processamento


    //saída
    if((esta_gripado.toLowerCase == "s" || esta_gripado.toLowerCase == "sim") && tempo_distancia < 45){
        resposta.innerHTML = "Viagem autorizada. Rumo ao show!"
    }else{
        resposta.innerHTML = "Deslocamento inviável. Melhor recusar este evento."
    }
}
function entrada_palco(){
    //informações
    let som_funcionando, figurino

    //entrada
    som_funcionando = (prompt("O som está funcionando corretamente?\nSim ou Não"))
    figurino = (prompt("O figurino está completo? Até mesmo o chapéu de Sarumano?"))

    //processamento


    //saída
    if(som_funcionando.toLowerCase() == "sim" && figurino == "sim"){
        resposta.innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!"
    }if((figurino.toLowerCase() == "nao" || figurino.toLowerCase() == "não") && som_funcionando.toLowerCase() == "sim"){
        resposta.innerHTML = "Faltando parte do figurino. Te vira no improviso!"
    }if((som_funcionando.toLowerCase() == "nao" || som_funcionando.toLowerCase() == "não") && figurino.toLowerCase() == "sim"){
        resposta.innerHTML = "Sem som. Realizar apresentação alternativa no salão."
    }if((som_funcionando.toLowerCase() == "nao" || som_funcionando.toLowerCase() == "não") && figurino.toLowerCase() == "nao" || figurino.toLowerCase == "não"){
        resposta.innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer…"
    }
}
function jogo_adivinhação(){
    // let numero = Math.round(Math.random()*10)// 0..10
    // let numero = Math.floor(Math.random()*10) // 0..9
    let numero = Math.ceil(Math.random()*3) // 1..3
    // let numero = Math.random()
    // console.log(numero);
    // numero = numero * 10
    // console.log(numero);
    // numero = Math.ceil(numero)
    // console.log(numero);

    let chute = Number(prompt("Dá o chute aí. Se for o mesmo número que escolhi, você ganha."))

    console.log(numero)

    if(chute == numero){
        resposta.innerHTML = "Acertou!"
    }else{
        resposta.innerHTML = "Errou! ;c"
    }
}
function sistema_transporte(){
    //informações
    let emergencia_ativa, manutenção_ativa
    
    //entrada
    emergencia_ativa = (prompt("A emergência está ativa no momento?"))
    manutenção_ativa = (prompt("O parque está em manuntenção?"))

    //processamento


    //saída
   if((emergencia_ativa == "nao" || emergencia_ativa == "não") && (manutenção_ativa == "nao" || manutenção_ativa == "não")){
    resposta.innerHTML = "Transporte liberado para uso."
   }else{
    resposta.innerHTML = "Transporte indisponível por motivo de segurança."
   }
}
function jaula_junin(){
    //informações
    let horario_atual, visitantes_na_area

    //entrada
    horario_atual = Number(prompt("Qual o horário atual?"))
    visitantes_na_area = Number(prompt("Quantos visitantes possuem na área?"))

    //processamento


    //saída
    if(visitantes_na_area == 0 && (horario_atual < 8 || horario_atual > 18)){
        resposta.innerHTML = ("Liberação autorizada. Abrindo jaula.")
    }else{
        resposta.innerHTML = ("Liberação negada. Área em uso ou fora do horário permitido.")
    }
    // if(visitantes_na_area > 0 || horario_atual >= 8 && horario_atual <= 18){
    //     resposta.innerHTML = ("Liberação negada. Área em uso ou fora do horário permitido.")
    // }else{
    //     resposta.innerHTML = ("Liberação autorizada. Abrindo jaula.")
    // }
}
function verificar_dia_semana(){
    //informações
    let numero, resposta_semana
 
    //entrada
    numero = Number(prompt("Digite o número do dia da semana:"))

    //processamento
    if(numero == 1){
        resposta_semana = "Domingo"
    }if(numero == 2){
        resposta_semana = "Segunda-feira"
    }if(numero == 3){
        resposta_semana = "Terça-feira"
    }if(numero == 4){
        resposta_semana = "Quarta-feira"
    }if(numero == 5){
        resposta_semana = "Quinta-feira"
    }if(numero == 6){
        resposta_semana = "Sexta-feira"
    }if(numero == 7){
        resposta_semana = "Sábado"
    }if(numero > 7 || numero < 1){
        resposta_semana = "Dia não existente."
    }

    //saída
    resposta.innerHTML = ("O dia da semana é: " + resposta_semana)
}
function beecrowd_media1(){
    //informações
    let peso_nota1 = 3.5, peso_nota2 = 7.5
    let resposta_nota1, resposta_nota2, media

    //entrada
    resposta_nota1 = Number(prompt("Resultado da nota 1:"))
    resposta_nota2 = Number(prompt("Resultado da nota 2"))

    //processamento
    media = ((resposta_nota1 * peso_nota1) + (resposta_nota2 * peso_nota2)) / 11

    //saída
    resposta.innerHTML = ("A média final é equivalente a: "  + media.toFixed(5))
}
function beecrowd_media2(){
    //informações
    let peso_nota1 = 2, peso_nota2 = 3, peso_nota3 = 5
    let resposta_nota1, resposta_nota2, resposta_nota3, media

    //entrada
    resposta_nota1 = Number(prompt("Digite a nota 1:"))
    resposta_nota2 = Number(prompt("Digite a nota 2"))
    resposta_nota3 = Number(prompt("Digite a nota 3"))

    //processamento
    media = ((peso_nota1 * resposta_nota1) + (peso_nota2 * resposta_nota2) + (peso_nota3 * resposta_nota3)) / 10

    //saída
    resposta.innerHTML = ("A média dessas 3 notas é equivalente a: " + media)
}
function beecrowd_salario(){
    //informações
    let id_funcionario, horas_trabalhadas, salario_por_horas
    let salario_mensal

    //entrada
    id_funcionario = Number(prompt("Digite a ID do funcionário:"))
    horas_trabalhadas = Number(prompt("Digite as horas trabalhadas:"))
    salario_por_horas = Number(prompt("Digite o salário recebido por hora trabalhada:"))

    //processamento
    salario_mensal = horas_trabalhadas * salario_por_horas

    //saída
    resposta.innerHTML = ("O salário mensal é equivalente a: U$" + salario_mensal.toFixed(2))
}
function dona_bete(){
   // infos
    let totalBruto, premiacoes, presentes, comissoes, lucro
    let meta
    // entradas
    totalBruto = Number(prompt("Total bruto: "))
    premiacoes = Number(prompt("Premiações: "))
    presentes = Number(prompt("Presentinhos: "))
    comissoes = Number(prompt("Comissões: "))
    meta = Number(prompt("Meta de hoje:"))
    // processamento
    lucro = totalBruto - premiacoes - presentes - comissoes
    let mensagem = ""
    if(lucro >= meta){
        // bateu a meta - 
        mensagem = "👵Batemos a meta, lucro de R$" + lucro.toFixed(2).replace('.',',')
    }else{
        // não bateu a meta
        if(lucro > 0){
        // sem meta mas com lucro
            mensagem = "Não batemos a meta, mas tivemos lucro de R$" + lucro.toFixed(2).replace('.',',')
        }else{
        // sem meta e prejuízo
            let prejuizo = lucro * -1
            mensagem = "💀☠️⚔️🗡️🔫🦵Não batemos a meta e ainda tivemos prejuízo de R$" + prejuizo.toFixed(2).replace('.',',') 
        }
    }    
    //saída
    resposta.innerHTML = mensagem
}
function tempo_viagem_mano_juca(){
    //informações
    let distancia_quilometros, tempo_final_segundos, velocidade = 300000
    let tempo_em_minutos, tempo_em_horas, tempo_em_dias, tempo_em_segundos, tempo_em_meses, tempo_em_anos

    //entrada
    distancia_quilometros = Number(prompt("Qual a distância da corrida em KMs?"))
    
    //processamento
    tempo_em_segundos = distancia_quilometros / velocidade

    //saída
     resposta.innerHTML = (tempo_em_segundos + "segundos")

     if(tempo_em_segundos > 60){
        tempo_em_minutos = tempo_em_segundos / 60

        resposta.innerHTML += "<br> ou " + tempo_em_minutos.toFixed(3) + " minutos"
    }if(tempo_em_minutos > 60){
        tempo_em_horas = tempo_em_minutos / 60
        
        resposta.innerHTML += "<br> ou " + tempo_em_horas.toFixed(3) + " horas"
       
     }if(tempo_em_horas > 24){
        tempo_em_dias = tempo_em_horas / 24

        resposta.innerHTML += "<br> ou " + tempo_em_dias.toFixed(3) + " dias"
     }if(tempo_em_dias > 30){
        tempo_em_meses = tempo_em_dias / 30

        resposta.innerHTML += "<br> ou " + tempo_em_meses.toFixed(3) + " meses"
     }if(tempo_em_meses > 12){
        tempo_em_anos = tempo_em_meses / 12

        resposta.innerHTML =+"<br> ou " + tempo_em_anos.toFixed(3) + " anos"
     }
}
function plumas_de_avalon(){
    //informações
    let salario, valor_emprestimo, valor_prestação, quantidade_prestacoes, exigencia_emprestimo
    parseFloat = salario, valor_emprestimo, quantidade_prestacoes

    //entrada
    salario = (prompt("Digite o salário:"))
    valor_emprestimo = (prompt("Digite o valor do empréstimo:"))
    quantidade_prestacoes = (prompt("Digite a quantidade das prestações:"))

    //processamento
    valor_prestação = valor_emprestimo / quantidade_prestacoes

    exigencia_emprestimo = salario * 0.30

    //saída
    if(valor_prestação < exigencia_emprestimo){
        resposta.innerHTML = ("Pagamento realizado com sucesso.")
    }if(salario < 1){
        resposta.innerHTML = ("Não é possível realizar o pagamento, não é possível realizar testes com salários negativos ou zerados.")
    }else{
        resposta.innerHTML = ("Não é possível realizar o pagamento, seu salário passa de 30% das prestações")
    }
}