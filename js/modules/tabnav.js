export default class TabNav { // a navegacao dos animais
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass); // remove todas as classes ativas
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao); // depois adc a class ativo no menu li q tiver ativo(Clicado)
  }

  // adiciona os eventos as tabs
  addTabNavEvent() {
  // pra cada item do tabMenu ele adc um evento de click q vai fazer a func activeTAB e vai ativar de acordo com o index
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
