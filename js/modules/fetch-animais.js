import AnimaNumeros from "./animar-numeros.js";
export default function initFetchAnimais() {
    async function fetchAnimais() {
        try {

            const animaisResponse = await fetch('./animaisapi.json');
            const animaisJSON = await animaisResponse.json();
            const numerosGrid = document.querySelector('.numeros-grid');

            animaisJSON.forEach((animal) => {
                const divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            });
            const animaNumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros')
            animaNumeros.init();
        } catch (error) {
            console.log(Error(error));
        }
}

    //Criando uma nova função que vai criar um animal a partir dessa array
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`
        return div;
    }
    fetchAnimais('./animaisapi.json');
}

/********** UTILIZANDO O MÉTODO THEN **********/

/*export default function initFetchAnimais() {
    function fetchAnimais2() {
        const numerosGrid = document.querySelector('.numeros-grid');

        fetch("./animaisapi.json")
            .then(r => r.json())
            .then(res => {
                res.forEach((animal) => {
                    //createAnimal2(animal)
                    const animalGrid = createAnimal2(animal);
                    numerosGrid.appendChild(animalGrid);
                });
            })
            .catch(erro => {
                console.log(Error(erro));
            });
    }
    initAnimaNumeros();

    //Criando uma nova função que vai criar um animal a partir dessa array
    function createAnimal2(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`
        return div;
    }
    fetchAnimais2();
}*/
//Como o array contém 6 objetos, o forEach executa 6 vezes, criando uma div para cada item.