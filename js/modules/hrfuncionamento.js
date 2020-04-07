export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento); // pego a li que ta com o data-semana
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    // pegando todos os dias da semana q estão dentro do dataset.
    // split transformando a string em array e o map  retornando um novo array em forma de Numero
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date(); // Data de agora
    this.diaAgora = this.dataAgora.getDay(); // Dia agora - o dia da semana
    this.hrAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    // se der um num q não tem no array da -1, qlqr coisa diferente disso é true
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = (this.hrAgora >= this.horarioSemana[0] && this.hrAgora < this.horarioSemana[1]);
    // se o horario de agora for maior ou igual ao horario da semana no indice 0[8 horas] e
    // horário de agora for menor q o horário da semana no indice 1 [18 horas] o estabelecimento está aberto

    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass); // vai adc no LI a classe Aberto
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
  }
}
