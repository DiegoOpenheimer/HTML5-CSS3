let interval = 0
let pontuacao = 0
document.addEventListener('DOMContentLoaded', function() {
    let nivel = window.location.search.replace('?', '') || 2
    var elementSpanNivelJogo = document.createElement('div')
    var nivelString = nivel == 3 ? 'Díficil' : nivel == 2 ? 'Normal' : 'Fácil'
    elementSpanNivelJogo.innerHTML = '<h1>Nível ' + nivelString + '</h1>'

    document.getElementById('nivelJogo').appendChild(elementSpanNivelJogo)
    var pontos = document.createElement('span')
    pontos.setAttribute('id', 'pontoValor')
    pontos.innerHTML = pontuacao
    document.getElementById('pontos').appendChild(pontos)
    iniciarJogo(nivel)
})

function iniciarJogo(nivel) {
    let n = nivel == 3 ? 0500 : nivel == 2 ? 0700 : 0800
    interval = setInterval(() => {
        addBola()
        conferirResultado()
    }, n)
    var qtd = document.getElementsByClassName('balao')

}

function addBola() {
    var balao = document.createElement('div')
    balao.setAttribute('onclick', 'removeBall(this)')
    balao.style.position = 'absolute'
    balao.style.top = Math.floor(Math.random() * 70) + '%' //450
    balao.style.left = Math.floor(Math.random() * 80) + '%' //800


    balao.setAttribute('class', 'balao')
    document.getElementById('idJogo').appendChild(balao)
}

function conferirResultado() {
    var qtd = document.getElementsByClassName('balao')
    if (qtd.length == 10) {
        clearInterval(interval)
        alert('GAME OVER\nPontucao: ' + pontuacao)
    }
}

function removeBall(elemento) {
    document.getElementById('idJogo').removeChild(elemento)
    pontuacao++
    document.getElementById('pontoValor').innerHTML = pontuacao
}

function refresh() {
    window.location.href = window.location.href
}