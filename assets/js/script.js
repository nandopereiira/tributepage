
function subirTela() {
    // função para subir tela
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function deciderBotaoScroll() {
    if(window.scrollY === 0) {
        // ocultar o botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // mostrar o botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', deciderBotaoScroll);

window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if (document.querySelector("#menu nav").style.display == 'flex') {
            document.querySelector("#menu nav").style.display = 'none'; 
        } else {
            document.querySelector("#menu nav").style.display = 'flex';
        }
    });
};
