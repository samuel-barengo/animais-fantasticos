//ANIMAÇÃO AO SCROLL
export default class AnimaScroll {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections)
        this.windowMetade = window.innerHeight * 0.6;

        this.animaScroll = this.animaScroll.bind(this);
    }
    // const sections = document.querySelectorAll('[data-scroll="scroll"]');

    // const windowMetade = window.innerHeight * 0.6;
    animaScroll() {
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - this.windowMetade < 0);

            if (isSectionVisible)
                section.classList.add('ativo');

            else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo');
            }
        });
    }
    init() {
        this.animaScroll()
        window.addEventListener('scroll', this.animaScroll);
    }
}
// if(this.sections.length) {
//     this.animaScroll();
// }