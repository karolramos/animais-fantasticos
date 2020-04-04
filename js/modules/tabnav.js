export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo'); //  remove todas as classes ativos
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao); // depois adc a class ativo no menu li q tiver ativo(Clicado)
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    //  pra cada item do tabMenu ele ta adc  um evento de click q vai fazer a func activeTAB e vai ativar de acordo com o index
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
