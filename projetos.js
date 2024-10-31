let index = 0;
const imagens = document.querySelectorAll('.imagem');

function mostrarProximaImagem() {
    imagens[index].classList.remove('ativa'); 
    index = (index + 1) % imagens.length; 
    imagens[index].classList.add('ativa'); 
}

setInterval(mostrarProximaImagem, 3000); 