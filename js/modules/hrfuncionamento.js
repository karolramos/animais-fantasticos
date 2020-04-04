export default function initHrFuncionamento() {

  const funcionamento = document.querySelector('[data-semana]'); /*pego a li que ta com o data-semana*/
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); /* pegando todos os dias da semana q estão dentro do dataset. split transformando a string em array e o map  retornando um novo array em forma de Numero*/
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date(); /* Data de agora*/
  const diaAgora = dataAgora.getDay(); /* Dia agora - o dia da semana*/
  const hrAgora = dataAgora.getHours();

  /* verificando se está aberto no dia da semana */
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; /*se der um num q não tem no array da -1, qlqr coisa diferente disso é true*/

  /* verificando se está aberto no exato horário*/
  const horarioAberto = (hrAgora  >= horarioSemana[0] && hrAgora <  horarioSemana[1]); /*true ou false a expressao vai retornar */
  /*  se o horario de agora for maior ou igual ao horario da semana no indice 0[8 horas] e horário de agora for menor q o horário da semana no indice 1 [18 horas] o estabelecimento está aberto*/

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto'); /*vai adc no LI a classe Aberto*/
  }
}


