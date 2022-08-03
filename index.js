const express = require('express');
const port = 3000;
const app = express();

// Vamos inserir uma linha de código para que a aplicação reconheça o formato JSON nas requisições:
app.use(express.json());
//

const paletas = [
    {
        id: 1,
        sabor: 'Açaí com Leite Condensado',
        descricao:
            'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/acai-com-leite-condensado.png',
        preco: 10.0,
    },
    {
        id: 2,
        sabor: 'Banana com Nutella',
        descricao:
            'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/banana-com-nutella.png',
        preco: 10.0,
    },
    {
        id: 3,
        sabor: 'Chocolate Belga',
        descricao:
            'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/chocolate-belga.png',
        preco: 7.0,
    },
];

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/paletas/find-paletas', (req, res) => {
    res.send(paletas);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
