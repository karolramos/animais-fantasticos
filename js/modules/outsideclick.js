export default function outsideClick(element, events, callback) {

  const html = document.documentElement; /* selecionou o doc html  */
  const outside = 'data-outside';

  function handleOutsideClick(event) { /* só va ser criada qndo o outsideclick for ativado */
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick); /*  apos ex a fnc de callb ele remove os eventos p n ficar ativando toda hr q clicar na pág */
      });
      callback(); /*  se a condi for falsa eu exe o callback  */
    }
  }

  if (!element.hasAttribute(outside)) { /*  sñ tiver o attribt é p ativar a func abaixo uma vez */
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); /* adc o evento no html - handleOutCLick */
    });
    element.setAttribute(outside, ' ');
  }
}
