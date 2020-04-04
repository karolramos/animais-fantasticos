export default function initAnimalNumeros() {

  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]'); /*OS SPANS com os numeros qtao em forma de string*/

    numeros.forEach((numero) => { /*de cada num eu to extraindo o valor dele*/
      const total = +numero.innerText; /*converteu numeros  q é string em Number com o + na frente e pegou o valor de texto dentro dele*/
      const incremento = Math.floor(total / 100); /*Math.flor ta arredondando o numero p n ficar quebrado*/ 
      
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento; /*pra n começar do zero e demorar mt com numeros grandes, start + incremento(total/100), total é o num exato q ta em numero*/
        numero.innerText = start; /*Ta mudando o texto dentro dos spans(data-numero)*/
        if (start > total) {
          numero.innerText = total; /*n deixa passar do total, do numero q ta na visu*/
          clearInterval(timer);
        }
      }, 50);
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) { /*só existe uma mutação q é a de atributo class ativo - 0*/
      observer.disconnect(); /*qndo ocorrer a animacao pare de observar p n ficar os numeros num loop infinito */
      animaNumeros(); /*só ativa qundo for true a condicao*/
    }
  }
  const observeTarget = document.querySelector('.numeros') /*o alvo q ele vai ficar observando*/
  const observer = new MutationObserver(handleMutation); /*handle é o callback, a func q vai ser ativada toda vez q mudar*/
  observer.observe(observeTarget, { attributes: true });
}
