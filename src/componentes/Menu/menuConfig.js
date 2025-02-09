export const menuConfig = [
    {
        path: '/',
        links: [
            { to: '/', texto: 'Início' },
            { to: '/#sobre', texto: 'Sobre' },
            { to: '/#projetos', texto: 'Projetos' },
            { to: '/#contato', texto: 'Contato' },
            { 
                texto: 'Testar API', 
                acao: () => window.open('https://portapi-k6qv.onrender.com/api/location', '_blank'),
                tipo: 'destaque' 
            }
        ]
    }
];
