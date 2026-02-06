alert('falaaaaa');
  
  let titulo = document.getElementById('titulo');
    alert('Seja Muito Bem Vindo ao My Drugs');
    let idade = prompt('Digite sua idade:');
    if (idade >= 18) {
        alert('Você é maior de idade, pode acessar todas as funcionalidades do sistema.');
    } else {
        alert('Você é menor de idade, algumas funcionalidades podem estar restritas.');
    }

    async function login() {
    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    const resposta = await fetch("http://localhost:3001/entrar", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    usuarios: usuario,
    password: senha
    })
    })

    const dados = await resposta.json()

    alert(dados.message)
}

const botao = document.querySelector('.botao-menu');

if (botao) {
  const menuLateral = document.querySelector('.menu-lateral');
  const conteudo = document.querySelector('.conteudo');
  const background = document.querySelector('.background');

  botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    conteudo.classList.toggle('ativo');
    background.classList.toggle('ativo');
    botao.classList.toggle('ativo');
  });
}

const background = document.querySelector('.background');

if (background) {
  background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    conteudo.classList.remove('ativo');
    background.classList.remove('ativo');
    botao.classList.remove('ativo');
  });
}

conteudo.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    conteudo.classList.remove('ativo');
    background.classList.remove('ativo');
    botao.classList.remove('ativo');
    document.body.style.backgroundColor = 'f4f4f4';
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? 'rgba(0, 0, 0, 0.5)' : 'f4f4f4';
});
