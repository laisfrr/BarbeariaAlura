const btn = document.querySelector('#send')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    validarCampos()
})

// VALIDAR CAMPO DO NOME E SOBRENOME
function validarNome() {
    const name = document.querySelector('#name')
    const value = name.value
    const splitNome = value.split(' ')
    const primeiroNome = splitNome[0]

    if ((value == '') | (splitNome.length == '1')) {
        document.querySelector('#nomeErro').innerHTML =
            'Preencha o campo Nome e Sobrenome'
        return true
    }
}

// VALIDAR CAMPO EMAIL
function validarEmail() {
    const email = document.querySelector('#email')
    const emailValue = email.value

    //VERIFICA SE O CAMPO DO EMAIL VAI SER UNDEFINED OU SE NÃO CONTER O @
    if (emailValue === undefined || !emailValue.includes('@')) {
        document.querySelector('#emailErro').innerHTML =
            'Preencha o campo Email corretamente.'
        return true
    }
    //CAPTURAR O USUARIO E DOMINIO DO EMAIL
    const splitEmail = emailValue.split('@')
    const user = splitEmail[0]
    const domain = splitEmail[1]
    const elementoEmail = splitEmail[1].split('.')
    //ABAIXO EU PEGO O ELEMENTO DO DOMINIO DEPOIS DO '.' PARA SABER SE VAI CONTER ALGO E VALIDAR LOGO ABAIXO
    const elementoDomain = elementoEmail[1]
    //SE O DOMINIO NÃO INCLUIR PONTO OU SE O DOMINIO NÃO TIVER NADA APOS O '.' VAI DAR ERRO
    if (!domain.includes('.') || elementoDomain === '') {
        document.querySelector('#emailErro').innerHTML =
            'Preencha o campo Email corretamente.'
        return true
    }
}

// VALIDAR CAMPO TELEFONE

function validarTelefone() {
    const telefone = document.querySelector('#telefone').value
    //REGEX SOMENTE PARA ACEITAR NUMERO NO CAMPO DE TELEFONE
    function validarRegex(telefone) {
        let regex = /^([0-9])+$/
        return regex.test(telefone)
    }
    // VALIDO REGEX PARA MOSTRAR A MENSAGEM CASO A PESSOA COLOQUE ALGO ALÉM DE NÚMEROS
    if (!validarRegex(telefone)) {
        document.querySelector('#telErro').innerHTML =
            'Preencha o campo telefone e utilize apenas números!'
        return true
    }
}

function validarMsg() {
    const mensagem = document.querySelector('#mensagem').value
    if (mensagem === '') {
        document.querySelector('#msgErro').innerHTML = 'Escreva uma mensagem'
        return true
    }
}

function validarCampos() {
    limparMsgErros()
    if (
        (validarNome() === true) |
        (validarEmail() === true) |
        (validarTelefone() === true) |
        (validarMsg() === true)
    ) {
        limparMsgSucesso()
        return
    } else {
        limparMsgErros()
        mensagemSucesso()
    }
    limparCampos()
}
function mensagemSucesso() {
    document.querySelector('#msgSucesso').innerHTML =
        'Mensagem Enviada com Sucesso!'
}

function limparMsgErros() {
    const msgNome = (document.querySelector('#nomeErro').innerHTML = '')
    const msgEmail = (document.querySelector('#emailErro').innerHTML = '')
    const msgTel = (document.querySelector('#telErro').innerHTML = '')
    const msgTexto = (document.querySelector('#msgErro').innerHTML = '')
}

function limparMsgSucesso() {
    const msgSuccess = (document.querySelector('#msgSucesso').innerHTML = '')
}

function limparCampos() {
    const name = document.querySelector('#name')
    const value = name.value
    name.value = ''
    //EMAIL
    const email = document.querySelector('#email')
    const emailValue = email.value
    email.value = ''
    //TELEFONE
    const telefone = document.querySelector('#telefone')
    const telValor = telefone.value
    telefone.value = ''
    //MENSAGEM
    const mensagem = document.querySelector('#mensagem')
    const valorMensagem = mensagem.value
    mensagem.value = ''
}
