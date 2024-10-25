// Função para rolar suavemente para a seção especificada
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Evento para a CTA
document.querySelector('.cta').addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll('#produtos'); // Chama a função de rolagem suave para produtos
});

// Eventos para os links da navegação
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão
        const targetId = this.getAttribute('href'); // Obtém o valor do atributo href
        smoothScroll(targetId); // Chama a função de rolagem suave
    });
});


// Mostrar o botão ao rolar para baixo
window.onscroll = function() {
    let button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
};

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
