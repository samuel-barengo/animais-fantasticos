import outsideClick from "./outside-click.js";
export default class DropdownMenu {
    constructor(dropDownMenus, event) {
        this.dropDownMenus = document.querySelectorAll(dropDownMenus);
        this.activeClass = 'active';

        // Define touchstart e click como argumento padrã
        // caso não seja passado pelo usuario, ele assume que o evento padrão seja click e touchstart
        if (event === undefined) this.events = ['click', 'touchstart'];
        else this.events = events;

        this.addDopDownMenusEvents = this.addDopDownMenusEvents.bind(this);
    }

    // ativa o dropDown menu e adicona
    // a função que observa o clique fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    // Adicona os eventos ao dopdownmenu
    addDopDownMenusEvents() {
        this.dropDownMenus.forEach(menu => {
            this.events.forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            })
        })
    }

    init() {
        if (this.dropDownMenus.length) {
            this.addDopDownMenusEvents();
        }
        return this;
    }
}


//     //menu.addEventListener('click', handleClick);
//     //menu.addEventListener('touchstart', handleClick);