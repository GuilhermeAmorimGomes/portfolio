// eu.js

document.getElementById('toggleButton').addEventListener('click', function() {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');

    // Atualiza o texto do botão com base no estado atual
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Mudar para Modo Claro';
    } else {
        this.textContent = 'Mudar para Modo Escuro';
    }
});
