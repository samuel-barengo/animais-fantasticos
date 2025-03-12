export default class AnimaNumeros {
    constructor(numeros, observerClass, observerTarget) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerClass = observerClass;
        this.observerTarget = document.querySelector(observerTarget);

        // Bind o this do objeto ao callback da mutação
        this.handleMutation = this.handleMutation.bind(this);
    }

    // Quando eu tenho uma função dentro de uma classe, que ela não tem referência, que ela não precisa do objeto pra funcionar, eu posso definir ela como uma função estática

    // Recebe um elemento do DOM, com número em seu texto. 
    // Incrementa, incrementa a partir de zero até o número final.
    static incrementarNumero(numero) {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start += incremento;  // start = start + incremento;
            numero.innerText = start;
            if (start > total) {
                numero.innerText = total;
                clearInterval(timer);
            }
        }, 25 /* * Math.random()*/);
    }

    // Ativa incrementar número para cada numero selecionado do DOM
    animaNumeros() {
        this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
    }

    // Função que ocorre quando a mutação ocorrer
    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observar.disconnect();
            this.animaNumeros();
        }
    }

    // Adiciona o MutationObserver para verificar 
    // quando a classe ativo é adiciona ao element target
    addMutationObserver() {
        this.observar = new MutationObserver(this.handleMutation);
        this.observar.observe(this.observerTarget, { attributes: true });
    }
    init() {
        if (this.numeros.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }
}