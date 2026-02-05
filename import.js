import express from "express"
const app = express()
const port = 3000

let usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 },
    { id: 3, nome: "Pedro", idade: 22 },
    { id: 4, nome: "Ana", idade: 28 },
]

app.get("/usuarios", (req, res) => {
    const usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 },
    { id: 3, nome: "Pedro", idade: 22 },
    { id: 4, nome: "Ana", idade: 28 }
    ]
    res.json(usuarios)
})

app.post("/Entrar", (req, res) => {
    const { usuarios, password } = req.body
    if (usuarios === "João" && password === "123") {
        res.json({ message: "Login bem-sucedido" })
    } else if (usuarios === "Maria" && password === "456") {
        res.json({ message: "Login bem-sucedido" })
    } else if (usuarios === "Pedro" && password === "789") {
        res.json({ message: "Login bem-sucedido" })
    } else if (usuarios === "Ana" && password === "000") {
        res.json({ message: "Login bem-sucedido" })
    } else {
        res.status(401).json({ message: "Credenciais inválidas" })
    }
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
})