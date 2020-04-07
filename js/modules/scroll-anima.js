import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections); // seleciona toda as sections
    this.windowMetade = window.innerHeight * 0.5; // pega +- metade da tela p animar no top de cada section
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distancia de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section, // cada section(4)
        offset: Math.floor(offset - this.windowMetade), // a distancia de cada elemento(section)
      };
    });
  }

  // verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo'); /* se contem ativo remove, sñ tem adc */
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance(); // começou o site ele da um animalscroll de primeira
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
