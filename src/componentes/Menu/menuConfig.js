        path: '/',
        links: [
            { to: '/', texto: 'Início' },
            { to: '/#sobre', texto: 'Sobre' },
            { to: '/#projetos', texto: 'Projetos' },
            { to: '/#contato', texto: 'Contato' },
            { 
                texto: 'Testar API', 
                acao: () => window.open('https://port-api-7ef9.onrender.com/api/location', '_blank'),
                tipo: 'destaque' 
            }
        ]
    }
];
