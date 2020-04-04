export default function initModal() {

  /* selecionando os botões la e a SECTION onde está a  janela modal no index  */
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]'); //section

  /*antes de iniciar as funcs temos q verificar se os seletores existem na pág - só se td existir q vai exe as funcs abaixo e caso n exista não da erro e pula*/
  if (botaoAbrir && botaoFechar && containerModal) {

    /* ao clicar no login eu seleciono o container-m  e adc a class ATIVO p ativar o modal - aparecer na tela*/
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add('ativo');
    }

    /* ao clicar no botão fechar ele vai remover a class ativo e fechar  */
    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove('ativo');
    }

    /*por padrao o modal fecha se vc clicar na parte externa da caixa, essa é a função*/
    function clickForaModal(event) {
      if (event.target === this) {  /*se o alvo do click for na section containerModal ele vai fechar*/
        fecharModal(event);
      }
    }

    /* adicionando as funções abrir e fechar  no evento do CLICK - AO CLICAR  */
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', clickForaModal); //vai fechar o modal se clicar na SECTION - ou seja, fora do modal
  }
}
