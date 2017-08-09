contagem = null
tempo = 40
document.getElementById('nivelJogo').innerHTML = 'Normal'
function iniciar_jogo() {
    const nivel = window.location.search.replace('?', '');
    const numero_baloes = 63
    if (nivel == 1) {
        tempo = 60
        document.getElementById('nivelJogo').innerHTML = 'Fácil'
    } else if (nivel == 2) {
        tempo = 40
        document.getElementById('nivelJogo').innerHTML = 'Normal'
    } else if(nivel == 3){
        tempo = 30
        document.getElementById('nivelJogo').innerHTML = 'Difícil'
    }

    document.getElementById('carregar').href = 'jogo.html?'+ nivel

    document.getElementById('qtd_balao_na_tela').innerHTML = numero_baloes
    document.getElementById('cronometro').innerHTML = tempo


    for (let i = 0; i < numero_baloes; i++) {
        const baloes = document.getElementById('baloes')
        const imagem = document.createElement('img')
        imagem.id = 'b' + i
        imagem.src = 'imagens/balao_azul_pequeno.png'
        imagem.style.padding = '10px'
        imagem.onclick = function () { mudar_imagem(this) }
        baloes.appendChild(imagem)

    }

    contagem_tempo(tempo)

}
const mudar_imagem = (imagem) => {
    document.getElementById(imagem.id).src = 'imagens/balao_azul_pequeno_estourado.png'
    imagem.onclick = ''
    calcular_baloes()
}

const calcular_baloes = () => {
    let valor = parseInt(document.getElementById('qtd_balao_na_tela').innerHTML)
    document.getElementById('qtd_balao_na_tela').innerHTML = --valor

    conferir_vitoria(valor)

    let valor1 = parseInt(document.getElementById('qtd_balao_na_tela_vermelho').innerHTML)
    document.getElementById('qtd_balao_na_tela_vermelho').innerHTML = ++valor1
}

function conferir_vitoria(valor) {
    if (valor == 0) {
        alert('Parabéns, você venceu')
        retirar_eventos()
        clearTimeout(contagem)
    }
}

const contagem_tempo = tempo => {
    let segundos = tempo

    if (segundos == -1) {
        alert('GAME OVER')
        retirar_eventos()
        clearTimeout(contagem)
        return
    }

    document.getElementById('cronometro').innerHTML = segundos
    contagem = setTimeout(() => contagem_tempo(--segundos), 1000)

}

function retirar_eventos() {
    let i = 0

    while (document.getElementById('b' + i)) {
        document.getElementById('b' + i).onclick = ''
        console.log(document.getElementById('b' + i))
        i++
    }
}