export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    function activeTab(index) {
        tabContent.forEach((item) => {
            item.classList.remove('ativo');
        });
        const direcao = tabContent[index].dataset.anime;
        tabContent[index].classList.add('ativo', direcao);
    }

    //// Verificar se existe elemento em tabContent e tabMenu
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index);
            });
        });
    }
}