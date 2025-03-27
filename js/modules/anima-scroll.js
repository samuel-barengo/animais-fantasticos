//ANIMAÇÃO AO SCROLL
import debounce from "./debounce.js";
export default class AnimaScroll {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowMetade = window.innerHeight * 0.6;

        this.checkDistance = debounce(this.checkDistance.bind(this),50);
    }
    getDistance() { // Desestruturando uma node-List para array
        this.distance = [...this.sections].map((section) => {
            const offset = section.offsetTop;
            return {
                element: section,
                offset: Math.floor(offset - this.windowMetade),
            };
        });
    }
    checkDistance() {
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < this.windowMetade) {
                section.classList.add("ativo");
            } else {
                section.classList.remove("ativo");
            }
        });
    }

    // checkDistance() {
    //     this.distance.forEach(item => {
    //         if (window.pageYOffset > item.offset) {
    //             item.element.classList.add('ativo');
    //         }
    //         else if (item.element.classList.contains('ativo')) {
    //             item.element.classList.remove('ativo');
    //         }
    //     });
    // }
    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener('scroll', this.checkDistance);
        }
        return this;
    }
}