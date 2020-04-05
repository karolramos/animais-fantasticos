export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    /* selecionando os botões la e a SECTION onde está a  janela modal no index  */
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal); //section

    /* bind this ao callback p/ fazer referência ao objeto da classe */
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  /* ao clicar no botão fechar ele vai remover a class ativo e fechar  */
  /*por padrao o modal fecha se vc clicar na parte externa da caixa, essa é a função*/
  clickForaModal(event) {
    if (event.target === this.containerModal) {  /*se o alvo do click for na section containerModal ele vai fechar*/
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    /* adicionando as funções abrir e fechar  no evento do CLICK - AO CLICAR  */
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickForaModal); //vai fechar o modal se clicar na SECTION - ou seja, fora do modal
  }

  /*antes de iniciar as funcs temos q verificar se os seletores existem na pág - só se td existir q vai exe as funcs abaixo e caso n exista não da erro e pula*/
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this
  }
}
