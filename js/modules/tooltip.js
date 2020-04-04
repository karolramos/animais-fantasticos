export default function initToolTip() {

  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px'; /*pegando as coordenadas exatas onde o mouse ta passando e somando em pixel*/
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    },
  };

  /*  Objeto criado como func pra caixinha de texto sair da tela quando tirar o mouse do elemento */
  const onMouseLeave = { // objeto
    handleEvent() { /*  metodo obrigatorio preu poder passar o objeto como parametro no evento  */
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };
  function criarToolTipBox(element) {
    const tooltipBox = document.createElement('div'); /*  criando uma div */
    const text = element.getAttribute('aria-label'); // puxando do elemt q o mouse passar em cima

    tooltipBox.classList.add('tooltip'); // adc a class tooltip na div criada
    tooltipBox.innerText = text; // adc o texto q foi puxado
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarToolTipBox(this); /*  quando o mouse tiver em cima ativa a fuc criarTOol  */

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove); //onMouseMove é um objeto

    onMouseLeave.tooltipBox = tooltipBox;  //propriedade tooltip e element de  onmleave
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave); /*quando o mouse sair do elemento -ONMOUSELEAVE É UM OBJETO*/
  }


  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver); //quando mouse passa por cima e ativa a função onMouseOver
  });
}
