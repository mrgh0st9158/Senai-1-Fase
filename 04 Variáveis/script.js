let cont = 0

function incrementar_contagem(){
    cont = cont + 1

    document.getElementById("p-contagem").innerHTML = cont
}







let global = "Eu sou uma variável global"
function funcao1(){
    let local = "Eu sou uma variável local"
    console.log(local)
    console.log(global)
}
function funcao2(){
    console.log(global)
    // console.log(local)

}