export default function initAccordion() {
    const acocordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';


    function activeAccordion() {
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass);
        // O this vai fazer referencia ao item que estou cliccando no momento
    }

    if (acocordionList.length) {
        acocordionList[0].classList.add(activeClass);
        acocordionList[0].nextElementSibling.classList.add(activeClass);

        acocordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
