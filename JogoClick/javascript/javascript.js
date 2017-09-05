function iniciarJogo() {
    const nivel = document.getElementById('nivel').value
    window.location.href = 'jogo.html?' + nivel
}