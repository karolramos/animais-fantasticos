export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20} px`; /*pegando as coordenadas exatas onde o mouse ta passando e somando em pixel*/

    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20} px`;
    }
  }

  // remove a tooltip e os eventos de onmousemove e onmouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement('div'); /*  criando uma div */
    const text = element.getAttribute('aria-label'); // puxando do elemt q o mouse passar
    tooltipBox.classList.add('tooltip'); // adc a class tooltip na div criada
    tooltipBox.innerText = text; // adc o texto q foi puxado
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarToolTipBox(event.currentTarget);
    this.currentTarget.addEventListener('mousemove', this.onMouseMove);
    this.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adiciona os eventos de mouseover a cada tooltip
  addToolTipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToolTipsEvent();
    }
    return this;
  }
}
