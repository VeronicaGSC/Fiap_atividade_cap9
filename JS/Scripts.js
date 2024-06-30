document.addEventListener("DOMContentLoaded", function() {
    const pageContent = document.getElementById("page-content");
    const pageTitle = document.getElementById("page-title");

    if (window.location.pathname.includes("Perfil.html")) {
        fetch("Perfil.html")
            .then(response => response.text())
            .then(html => {
                pageContent.innerHTML = html;
                pageTitle.textContent = "Meu Perfil";
            });
    } else if (window.location.pathname.includes("servicos_contratados.html")) {
        fetch("servicos_contratados.html")
            .then(response => response.text())
            .then(html => {
                pageContent.innerHTML = html;
                pageTitle.textContent = "Serviços contratados";
            });
    } else {
        fetch("index.html")
            .then(response => response.text())
            .then(html => {
                pageContent.innerHTML = html;
                pageTitle.textContent = "Início";
            });
    }
});
