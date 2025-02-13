export default function initTooltip() {
    const tooltips = document.querySelectorAll("[data-tooltip]");
    tooltips.forEach((item) => {
        item.addEventListener("mouseover", onMouseOver);
    });

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener("mousemove", onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener("mouseleave", onMouseLeave);
            this.element.removeEventListener("mousemove", onMouseMove);
        },
    };

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + "px";
            this.tooltipBox.style.left = event.pageX + 20 + "px";
        },
    };

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement("div");
        const text = element.getAttribute("aria-label"); //puxando o texto do elemento que o mouse passar por cima.
        tooltipBox.classList.add("tooltip"); //adicioando a classe.
        tooltipBox.innerText = text; //adicionando o texto que foi criado na parte de cima.
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}

/*
fluxo detalhado:

toolltips.forEach((itens) => {...}):
Esse trecho de código seleciona todos os elementos que possuem o atributo data-tooltip usando o método querySelectorAll. Em seguida, ele adiciona um ouvinte de eventos (addEventListener) a cada um desses elementos para o evento mouseover.


Função onMouseOver(event):
Quando o evento mouseover ocorre em qualquer um desses elementos, a função onMouseOver é chamada.

this dentro da função onMouseOver: No contexto dessa função, o this faz referência ao elemento que está atualmente sendo "ouvindo" o evento de mouseover. Em outras palavras, é o elemento específico em que o mouse passou por cima.


Dentro da função onMouseOver:
O this é passado como argumento para a função criarTooltipBox(this). Isso significa que o elemento que acionou o evento é passado para a função criarTooltipBox, e lá ele é usado para pegar o atributo aria-label e criar a tooltip.

<div data-tooltip aria-label="Informação importante">Passe o mouse aqui</div>


No código que você forneceu, o this dentro da função onMouseOver faz referência ao elemento que acionou o evento, ou seja, o elemento no qual o mouse passou por cima e que tem o atributo data-tooltip.

Aqui está o fluxo detalhado:

toolltips.forEach((itens) => {...}):

Esse trecho de código seleciona todos os elementos que possuem o atributo data-tooltip usando o método querySelectorAll. Em seguida, ele adiciona um ouvinte de eventos (addEventListener) a cada um desses elementos para o evento mouseover.
Função onMouseOver(event):

Quando o evento mouseover ocorre em qualquer um desses elementos, a função onMouseOver é chamada.
this dentro da função onMouseOver: No contexto dessa função, o this faz referência ao elemento que está atualmente sendo "ouvindo" o evento de mouseover. Em outras palavras, é o elemento específico em que o mouse passou por cima.
Dentro da função onMouseOver:

O this é passado como argumento para a função criarTooltipBox(this). Isso significa que o elemento que acionou o evento é passado para a função criarTooltipBox, e lá ele é usado para pegar o atributo aria-label e criar a tooltip.


EXEMPLO PRÁTICO
Se você tiver um elemento como este:

<div data-tooltip aria-label="Informação importante">Passe o mouse aqui</div>

Quando você passar o mouse sobre este elemento:

O this dentro da função onMouseOver será o próprio <div> com data-tooltip.
Ele será usado para obter o texto "Informação importante" (usando this.getAttribute('aria-label')) e criar a tooltip.
Então, em resumo, o this sempre faz referência ao elemento específico que acionou o evento.
*/
