const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Dados mockados
let users = [
    { id: 1, name: "João Silva", email: "joao@example.com" },
    { id: 2, name: "Maria Souza", email: "maria@example.com" }
];

// Rotas da API
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
    res.json(user);
});

app.listen(port, () => {
    console.log(`API mock rodando em http://localhost:${port}`);
});