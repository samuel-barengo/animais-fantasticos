export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        // bind this ao callback para fazer referência ao objeto da classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    // abre o feche o modal
    toggleModal() {
        this.containerModal.classList.toggle("ativo");
    }

    // adicona o evento de toggle ao modal 
    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    // fecha modal ap clicar do lado de fora
    cliqueForaModal(event) {
        if (event.target === this.containerModal)
            this.toggleModal(event);
    }

    // Adicona os eventos aos elementos do modal
    addModalEvent() {
        this.botaoAbrir.addEventListener("click", this.eventToggleModal);
        this.botaoFechar.addEventListener("click", this.eventToggleModal);
        this.containerModal.addEventListener("click", this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent();
        }
        return this;
    }
}