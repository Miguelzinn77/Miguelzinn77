    let titulo = document.getElementById('titulo');
    alert('Seja Muito Bem Vindo ao My Drugs');
    let idade = Number(prompt('Digite sua idade:'));
    if (idade >= 18) {
        alert('Você é maior de idade, pode acessar todas as funcionalidades do sistema.');
    } else {
        alert('Você é menor de idade, algumas funcionalidades podem estar restritas.');
    }

//--------------- LOGIN ---------------
  async function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  try {
    const resposta = await fetch("http://localhost:3001/entrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario: usuario,
        password: senha
      })
    });

      if (!resposta.ok) {
      throw new Error("Erro na requisição");
    } else {
      alert("Login bem-sucedido!");
    }

    const dados = await resposta.json();
    alert(dados.message);

  } catch (erro) {
    alert("Erro ao conectar com o servidor");
    console.error(erro);
  }
}

//--------------- CRIAR USUÁRIO ---------------
   async function criarUsuario() {
  const novoUsuario = document.getElementById("novo-usuario").value;
  const novaSenha = document.getElementById("nova-senha").value;

  try {
    const resposta = await fetch("http://localhost:3001/usuarios", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: novoUsuario,
        idade: Number(novaSenha)
      })
    });

    if (!resposta.ok) {
      throw new Error("Erro na requisição");
    }

    const dados = await resposta.json();
    alert(dados.message);

  } catch (erro) {
    alert("Erro ao conectar com o servidor");
    console.error(erro);
  }
}


// ---------------- MENU LATERAL ----------------
const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');

function fecharMenu() {
  menuLateral.classList.remove('ativo');
  conteudo.classList.remove('ativo');
  background.classList.remove('ativo');
  botao.classList.remove('ativo');
  document.body.style.backgroundColor = '#f4f4f4';
}

if (botao && menuLateral && conteudo && background) {

  botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    conteudo.classList.toggle('ativo');
    background.classList.toggle('ativo');
    botao.classList.toggle('ativo');

    document.body.style.backgroundColor =
      menuLateral.classList.contains('ativo')
        ? 'rgba(0, 0, 0, 0.5)'
        : '#f4f4f4';
  });

  background.addEventListener('click', fecharMenu);
  conteudo.addEventListener('click', fecharMenu);
}