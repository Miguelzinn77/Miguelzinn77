import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Array de usuários em memória (em produção, use banco de dados)
let usuarios = [
  { id: 1, nome: "João", idade: 25, password: 25 },
  { id: 2, nome: "Maria", idade: 30, password: 30 },
  { id: 3, nome: "Pedro", idade: 22, password: 22 },
  { id: 4, nome: "Ana", idade: 28, password: 28 }
];

// Rota GET para listar todos os usuários
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// Rota POST para login (usuário: nome; senha: idade)
app.post("/entrar", (req, res) => {
  const { usuario, password } = req.body;
  const usuarioEncontrado = usuarios.find(
    u => u.nome === usuario && u.idade === Number(password)
  );

  if (usuarioEncontrado) {
    res.json({ message: "Login bem-sucedido!" });
  } else {
    res.status(401).json({ message: "Usuário ou senha incorretos." });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
