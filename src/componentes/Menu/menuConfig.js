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
                acao: () => window.open('http://localhost:3001/api/users', '_blank'),
                tipo: 'destaque' 
            }
        ]
    }
];