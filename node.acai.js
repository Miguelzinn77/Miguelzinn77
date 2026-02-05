const express = require('express');
const app = express();
const port = 3000;

app.get('/cardapio', (req, res) => {
res.send({ frutas: "çaí, Banana, Morango, Kiwi, Manga, Abacaxi", adicionais: "Leite em pó, Granola, Mel, Chocolate granulado, Coco ralado, Amendoim" });
});


app.get('/adicionais', (req, res) => {
res.send(adicionais);
});





app.listen(3000, () => {
console.log('Servidor rodando na porta 3000');
});


export default acai;
