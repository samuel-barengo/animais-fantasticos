import outsideClick from './outside-click.js';
export default function initMenuMobile() {
    const menuButtom = document.querySelector('[data-menu="buttom"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    function openMenu(event) {
        menuButtom.classList.add('active');
        menuList.classList.add('active');

        outsideClick(menuList, eventos, () => {
            menuButtom.classList.remove('active');
            menuList.classList.remove('active');
        })
    }

    if (menuButtom) {
        eventos.forEach((userEvent) => {
            menuButtom.addEventListener(userEvent, openMenu);
        });
    }
}