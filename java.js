
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.getElementById('myDropdown');

dropbtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
};

const toggleButton = document.getElementById('toggleButton');
const body = document.getElementById('body01');

// Adiciona o evento de clique no botão de alternância
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Atualiza o texto do botão com base no modo atual
    toggleButton.textContent = body.classList.contains('dark-mode') 
        ? 'Mudar para Modo Claro' 
        : 'Mudar para Modo Escuro';
});





