import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]'); /*selecionando os submenus - LIS*/

  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    }); /*adc evento de click com mouse ou touch, ao inves do array poderia ter sido adc com o menu.addEventListener('click', hancleClick) e fazer a msm coisa pro touch */
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active'); /*ta falando com o menu -  qndo clicado adc  a classe e ativa a funcao OUTSIDE*/
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active'); /*quando clicado fora da caixa de sbmenu é pra remover a  classe ativa do item*/
    });
  };
}

