import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let usuarios = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 },
  { id: 3, nome: "Pedro", idade: 22 },
  { id: 4, nome: "Ana", idade: 28 },
];

app.get("/usuarios", async (req, res) => {
  res.json(usuarios);
});

app.post("/entrar", async (req, res) => {
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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
