import outsideClick from "./outside-click.js";
export default function initDropdownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown');

    dropDownMenus.forEach((menu) => {
        //menu.addEventListener('click', handleClick);
        //menu.addEventListener('touchstart', handleClick);
        ['click', 'touchstart'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['click', 'touchstart'], () => {
            this.classList.remove('active');
        });
    }
}