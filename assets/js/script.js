// Regras do JS

// - CaseSensitive(nome / Nome) mais usado camelCase
// - Não usa tipagem de dados// Compilado pelo navegador?? 
// - Compilado pelo navegador

// Declaração das variaveis

//var nome = 'thiago'  -> não recomendado por ser o modelo mais "antigo"
// let nome = "thiago" -> usado para variaveis que podem ser modificadas ao longo do script(local)
// const nome = "thiago" ->usado para variaveis que não irão sofrer alteração(global que não muda o valor)


//Uso da DOM

/*
por Tag: getElementByTagName()
por Id:get ElementByID()
por Nome: getElementsByName()
por Classe getElementsByClassName()
por Seletor: querySelector()
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = ''
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = ''
        emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto Ultrapassou o Limite de Caracteres (100)"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Enviado com Sucesso')
    } else {
        alert('Não Enviado, Revise as Informações')
    }
}

function mapaZoom() {
    mapa.style.width = '3000px'
    mapa.style.height = '1550px'
}

function mapaNormal() {
    mapa.style.width = '1550px'
    mapa.style.height = '300px'
}