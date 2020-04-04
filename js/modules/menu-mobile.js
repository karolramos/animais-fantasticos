import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]'); /* selecionando botao de menu  */
  const menuList = document.querySelector('[data-menu="list"]'); /* ul */
  const eventos = ['click', 'touchstart'];

  /*  qndo clicar no botao de menu eu adc a classe ativa ao menu-list(UL) */
  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');

    /*  elemento é a menuList, quero q quando click fora da menuList ative a func outsideCLick e remova a classe ativa do elemento  */
    outsideClick(menuList, eventos , () => { /* tanto com mouse ou touch */
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) { /* só funciona se o menuButton existir corretamente  */
    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
  }
}
