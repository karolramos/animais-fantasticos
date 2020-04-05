export default class AnimalNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros); /*OS SPANS com os numeros qtao em forma de string*/
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom, com numero em seu texto
  // incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText; /*converteu numeros  q é string em Number com o + na frente e pegou o valor de texto dentro dele*/
    const incremento = Math.floor(total / 100); /*Math.flor ta arredondando o numero p n ficar quebrado*/
    let start = 0; /*começa em zero e vai incrementando de 2 em  2 */
    const timer = setInterval(() => {
      start = start + incremento; /*pra n começar do zero e demorar mt com numeros grandes, start + incremento(total/100), total é o num exato q ta em numero*/
      numero.innerText = start; /*Ta mudando o texto dentro dos spans(data-numero)*/
      if (start > total) {
        numero.innerText = total; /*n deixa passar do total do numero q ta na visu*/
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  // função que ocorre quando a mutação ocorrer(sempre q uma classe "ativo")
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); /*qndo ocorrer a animacao pare de observar p n ficar os numeros num loop infinito */
      this.animaNumeros(); /*só ativa qundo for true a condicao*/
    }
  }

  // Adiciona o mutationObserver para verificar quando a classe ativo é adicionada ao elem target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
