import outsideClick from './outside-click.js';
export default class MenuMobile {
    constructor(menuButtom, menuList, events) {
        this.menuButtom = document.querySelector(menuButtom);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';

        if (events === undefined ) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.openMenu = this.openMenu.bind(this);
    }
    openMenu() {
        this.menuButtom.classList.add(this.activeClass);
        this.menuList.classList.add(this.activeClass);

        outsideClick(this.menuList, this.events, () => {
            this.menuButtom.classList.remove(this.activeClass); 
            this.menuList.classList.remove(this.activeClass);
        })
    }
    addEventMenuMobile() {
        this.events.forEach((userEvent) => {
            this.menuButtom.addEventListener(userEvent, this.openMenu);
        });
    }
    init() {
        if (this.menuButtom && this.menuList) {
            this.addEventMenuMobile();
        }
        return this;
    }
}
