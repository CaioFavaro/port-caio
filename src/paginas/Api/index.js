import PostModelo from '../../componentes/PostModelo';
import PaginaPadrao from '../../componentes/PaginaPadrao';
import styles from './Api.module.css';

export default function ApiPage() {
    const userExample = {
        id: 123,
        name: "João Silva",
        email: "joao@example.com",
        status: "active",
        createdAt: "2023-10-01T10:00:00Z",
        lastLogin: "2023-10-15T14:30:00Z"
    };

    return (
        <PaginaPadrao>
            <PostModelo>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Documentação da API</h1>
                    
                    <div className={styles.secao}>
                        <h2 className={styles.subtitulo}>Endpoint de Usuários</h2>
                        
                        <div className={styles.endpointCard}>
                            <div className={styles.method}>GET</div>
                            <code className={styles.path}>/api/users/&#123;id&#125;</code>
                            
                            <div className={styles.exemplo}>
                                <h3>Exemplo de Resposta:</h3>
                                <div className={styles.userCard}>
                                    {Object.entries(userExample).map(([key, value]) => (
                                        <div key={key} className={styles.userField}>
                                            <label>{key}:</label>
                                            <span>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PostModelo>
        </PaginaPadrao>
    );
}