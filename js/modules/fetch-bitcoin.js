export default function fetchBitcoin(url, target) {
  fetch(url)/*  API - site onde vai puxar os valores em bitcoin - a partir dessa resposta vai pro then  */
    .then(response => response.json()) /* then   pegou a resposta e vai transformar => em .json */
    .then((bitcoin) => { /*  o .JSON  -  agora vai usar o arq abaixo */
      const btcPreco = document.querySelector(target); /* selecionando o Li q ta com o doe bitcoin  */
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4); /* Colocando dentro de LI o valor em bitcoin - valor de venda em real. Tofixed transformou em 4 casas  */
    }).catch(erro => console.log(Error(erro)));
}

//  https://www.blockchain.com/ticker
