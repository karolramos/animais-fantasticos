export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href); /*  selecionar a section  */

    section.scrollIntoView({ /* coloca o elemento na minha view  */
      behavior: 'smooth',
      block: 'start', /*  alinha sempre no inicio da section clicada  */
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}