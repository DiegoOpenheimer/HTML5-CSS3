let jogada = true
let contadorJogadas = 0

var matriz_jogo = Array()
matriz_jogo['a'] = Array(3)
matriz_jogo['b'] = Array(3)
matriz_jogo['c'] = Array(3)

matriz_jogo['a'][1] = 0
matriz_jogo['a'][2] = 0
matriz_jogo['a'][3] = 0

matriz_jogo['b'][1] = 0
matriz_jogo['b'][2] = 0
matriz_jogo['b'][3] = 0

matriz_jogo['c'][1] = 0
matriz_jogo['c'][2] = 0
matriz_jogo['c'][3] = 0


$(document).ready(() => {

    $('.jogo').hide()

    $('#iniciar_jogo').click(() => {
        const nome1 = $('#jogador_1').val()
        const nome2 = $('#jogador_2').val()
        if (nome1 == '' || nome2 == '') {
            alert('Informe apelido')
            return false
        } else if (nome1 === nome2) {
            alert('Apelidos iguais')
            $('#jogador_1').focus()
            return false
        }

        appearName(nome1, nome2)
        $('.jogada').click(function () {
            const valor_do_id = this.id
            $('#' + valor_do_id).off()
            iniciar_jogo(valor_do_id)
        })

        //some com a tela iniciar
        $('.jogo').show()
        //aparece a tela de jogo
        $('.inicio').hide()

    })
})

function appearName(apelido1, apelido2) {
    $('#apelido1').html(apelido1)
    $('#apelido2').html(apelido2)
}

function iniciar_jogo(id) {
    contadorJogadas++
    console.log(contadorJogadas)
    let icone = ''
    let linha_coluna = id.split('-')
    if (jogada) {
        icone = 'url("imagens/marcacao_1.png")'
        $('#' + id).css('background-image', icone)

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = -1
        jogada = false
        confere()
    } else {
        icone = 'url("imagens/marcacao_2.png")'
        $('#' + id).css('background-image', icone)
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = 1
        jogada = true
        confere()
    }

}

function confere() {
    confereLinha()
    confereColuna()
    confereDiagonal()
    confereEmpate()

}

function confereLinha() {

    let ponto = 0
    for (let i in matriz_jogo['a'])
        ponto += matriz_jogo['a'][i]
    if (ponto == -3) {
        alert($('#apelido1').html() + ' Venceu')
        $('.jogada').off()
        return
    } else if (ponto == 3) {
        alert($('#apelido2').html() + ' Venceu')
        $('.jogada').off()
        return
    }

    ponto = 0

    for (let i in matriz_jogo['b'])
        ponto += matriz_jogo['b'][i]
    if (ponto == -3) {
        alert($('#apelido1').html() + ' Venceu')
        $('.jogada').off()
        return
    } else if (ponto == 3) {
        alert($('#apelido2').html() + ' Venceu')
        $('.jogada').off()
        return
    }

    ponto = 0

    for (let i in matriz_jogo['c'])
        ponto += matriz_jogo['c'][i]
    if (ponto == -3) {
        alert($('#apelido1').html() + ' Venceu')
        $('.jogada').off()
        return
    } else if (ponto == 3) {
        alert($('#apelido2').html() + ' Venceu')
        $('.jogada').off()
        return
    }
}

function confereColuna() {
    let ponto = 0
    for (let i = 1; i <= 3; i++) {
       ponto = 0
        ponto += matriz_jogo['a'][i]
        ponto += matriz_jogo['b'][i]
        ponto += matriz_jogo['c'][i]
        
        if (ponto == -3) {
            alert($('#apelido1').html() + ' Venceu')
            $('.jogada').off()
            return
        } else if (ponto == 3) {
            alert($('#apelido2').html() + ' Venceu')
            $('.jogada').off()
            return
        }
    }
}

function confereDiagonal() {
    let ponto = 0

    ponto = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3]

    if (ponto == -3) {
        alert($('#apelido1').html() + ' Venceu')
        $('.jogada').off()
        return
    } else if (ponto == 3) {
        alert($('#apelido2').html() + ' Venceu')
        $('.jogada').off()
        return
    }


}

function confereEmpate() {
    if(contadorJogadas == 9){
        alert('Empate')
        return
    }
}
