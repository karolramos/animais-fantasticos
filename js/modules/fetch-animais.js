import AnimalNumeros from './animal-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try { /*tente fazer isso daqui, se der errado vai pro catch*/
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animalNumeros = new AnimalNumeros('[data-numero]', '.numeros', 'ativo');
      animalNumeros.init();
    } catch (erro) { /*se o try der errado*/
      console.log(erro);
    }
  }


  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisapi.json');
}