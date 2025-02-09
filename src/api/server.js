// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001; // Use a variável de ambiente PORT

app.use(express.json());

// Exemplo de endpoint: retorna dados de usuários
let users = [
    { id: 1, name: "João Silva", email: "joao@example.com" },
    { id: 2, name: "Maria Souza", email: "maria@example.com" }
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

// Novo endpoint: exibe localização do usuário (exemplo usando ipapi.co)
app.get('/api/location', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    try {
        const response = await axios.get(`https://ipapi.co/${ip}/json/`);
        const locationData = response.data;
        const html = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <title>Sua Localização</title>
              <style>
                body { font-family: Arial, sans-serif; background: #f0f2f5; color: #333; }
                .container { max-width: 600px; margin: 2rem auto; background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #3498db; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 0.5rem; border: 1px solid #ddd; }
                th { background: #f8f9fa; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Sua Localização</h1>
                <table>
                  <tr><th>Campo</th><th>Valor</th></tr>
                  <tr><td>IP</td><td>${locationData.ip || ip}</td></tr>
                  <tr><td>Cidade</td><td>${locationData.city || 'Não disponível'}</td></tr>
                  <tr><td>Região</td><td>${locationData.region || 'Não disponível'}</td></tr>
                  <tr><td>País</td><td>${locationData.country_name || 'Não disponível'}</td></tr>
                  <tr><td>Latitude</td><td>${locationData.latitude || 'Não disponível'}</td></tr>
                  <tr><td>Longitude</td><td>${locationData.longitude || 'Não disponível'}</td></tr>
                </table>
              </div>
            </body>
          </html>
        `;
        res.send(html);
    } catch (error) {
        console.error('Erro ao buscar localização:', error);
        res.status(500).json({ message: 'Erro ao buscar localização' });
    }
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
