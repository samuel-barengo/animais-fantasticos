import AnimaNumeros from "./animar-numeros.js";
export default function fetchAnimais(url, target) {
    //Criaa a div contendo informações com o total de animais 
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`
        return div;
    }

    // preenche cada animal no DOM
    const numerosGrid = document.querySelector(target);
    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    // Anima os números de cada animal
    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros')
        animaNumeros.init();
    }

    // Puxa os animais através de um arquivo Json 
    // e cria cada animal utilizando createAnimal
    async function criarAnimais() {
        try {
            // Fetch, espera a resposta e transforma em Json
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();

            // Após a tranformação de Json, ativas as funções
            // para preeencher e animar os números
            animaisJSON.forEach((animal) => preencherAnimais(animal));
            animaAnimaisNumeros()
        } catch (error) {
            console.log(Error(error));
        }
    }
    return criarAnimais()
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