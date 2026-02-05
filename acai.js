    let titulo = document.getElementById('titulo');
    alert('Seja Muito Bem Vindo à Oficina do Açaí');
    let idade = prompt('Digite sua idade:');

  let home = ["Açaí", "Banana", "Morango", "Kiwi", "Manga", "Abacaxi"];
  let adicionais = ["Leite em pó", "Granola", "Mel", "Chocolate granulado", "Coco ralado", "Amendoim"];

function cardapio() {
    if (home.length === 0 || adicionais.length === 0) {
        console.log("Nenhuma opção disponível.");
    } else {
        console.log("Frutas:", home);
        console.log("Adicionais:", adicionais);
    }
}

export function saudacao(nome) {
  return `Olá, ${nome}!`;
}

export default class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}
