export default function initMododal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function abrirModal(event) {
        event.preventDefault();
        containerModal.classList.add("ativo");
    }
    function fecharModal(event) {
        event.preventDefault();
        containerModal.classList.remove("ativo");
    }

    function cliqueForaModal(event) {
        if (event.target === containerModal)
            fecharModal(event);
    }

    if (botaoAbrir && botaoFechar && containerModal) {
        botaoAbrir.addEventListener("click", abrirModal);
        botaoFechar.addEventListener("click", fecharModal);
        containerModal.addEventListener("click", cliqueForaModal);
    }
}

//pode ser feito de outra forma utilizando o Toggle

/*export default function initMododal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && containerModal) {
        function toggleModal(event) {
            event.preventDefault();
            containerModal.classList.toggle("ativo");
        }

        function cliqueForaModal(event) {
            if (event.target === containerModal)
                toggleModal(event);
        }

        botaoAbrir.addEventListener("click", toggleModal);
        botaoFechar.addEventListener("click", toggleModal);
        containerModal.addEventListener("click", cliqueForaModal);
    }
}*/