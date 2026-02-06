import express from "express"
const app = express()
const port = 3001

app.use(express.json())

let usuarios = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 },
  { id: 3, nome: "Pedro", idade: 22 },
  { id: 4, nome: "Ana", idade: 28 },
]

async function getUsuarios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usuarios)
    }, 1000)
  })
}

app.get("/usuarios", async (req, res) => {
  const listaUsuarios = await getUsuarios()
  res.json(listaUsuarios)
})


app.post("/login", async (req, res) => {
  const { usuario, password } = req.body

if (João === usuario && 25 === Number(password)) {
    res.json({ message: "Login bem-sucedido!" })
  } else if (Maria === usuario && 30 === Number(password)) {
    res.json({ message: "Login bem-sucedido!" })
  } else if (Pedro === usuario && 22 === Number(password)) {
    res.json({ message: "Login bem-sucedido!" })
  } else if (Ana === usuario && 28 === Number(password)) {
    res.json({ message: "Login bem-sucedido!" })
  } else {
    res.status(401).json({ message: "Usuário ou senha incorretos." })
  }



  const usuarioEncontrado = usuarios.find(
    u => u.nome === usuario && u.idade === Number(password)
  )

  if (usuarioEncontrado) {
    res.json({ message: "Login bem-sucedido!" })
  } else {
    res.status(401).json({ message: "Usuário ou senha incorretos." })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
