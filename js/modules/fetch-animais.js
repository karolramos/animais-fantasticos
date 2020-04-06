import AnimalNumeros from './animal-numeros.js';

export default function fetchAnimais(url, target) {

  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
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
    const animalNumeros = new AnimalNumeros('[data-numero]', '.numeros', 'ativo');
    animalNumeros.init();
  }

  // puxa os animais através de um arq jason e 
  // cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try { /* tente fazer isso daqui, se der errado vai pro catch */
      // Fetch, espera resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os numeros
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) { /* se o try der errado */
      console.log(erro);
    }
  }

  return criarAnimais();
}
