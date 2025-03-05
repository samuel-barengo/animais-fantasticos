export default class Tooltip {
    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    // Método para adicionar os eventos de mouse sobre os elementos
    addTooltipsEvent() {
        this.tooltips.forEach((item) => {
            item.addEventListener("mouseover", this.onMouseOver);
        });
    }

    // Exibe a tooltip ao passar o mouse
    onMouseOver(event) {
        this.criarTooltipBox(event.currentTarget);
        event.currentTarget.addEventListener("mousemove", this.onMouseMove);
        event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    }

    // Inicializa a funcionalidade se houver elementos
    init() {
        if (this.tooltips.length) {
            this.addTooltipsEvent();
        }
        return this;
    }

    // Atualiza a posição da tooltip conforme o movimento do mouse
    onMouseMove(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        if (event.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${event.pageX - 190}px`;
        }
        else {
            this.tooltipBox.style.left = `${event.pageX + 20}px`;
        }
    }

    // Cria e insere a tooltip no body
    onMouseLeave(event) {
        this.tooltipBox.remove();
        event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
        event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
    }

    //Cria a tooltip box e coloca no Body
    criarTooltipBox(element) {
        const tooltipBox = document.createElement("div");
        const text = element.getAttribute("aria-label"); //puxando o texto do elemento que o mouse passar por cima.
        tooltipBox.classList.add("tooltip"); //adicioando a classe.
        tooltipBox.innerText = text; //adicionando o texto que foi criado na parte de cima.
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    }
}