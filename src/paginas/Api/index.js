import React, { useState } from 'react';
import PaginaPadrao from '../../componentes/PaginaPadrao';
import styles from './Api.module.css';

export default function ApiPage() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchApiData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Certifique-se de usar a URL correta da API
      const response = await fetch('https://portapi-k6qv.onrender.com/api/location');
      const data = await response.text();
      setApiData(data);
    } catch (err) {
      console.error(err);
      setError('Erro ao buscar dados da API.');
    }
    setLoading(false);
  };

  return (
    <PaginaPadrao>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Teste da API de Localização</h1>
        <button onClick={handleFetchApiData} className={styles.botao}>
          Buscar Localização
        </button>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {apiData && (
          <div className={styles.apiResult} dangerouslySetInnerHTML={{ __html: apiData }} />
        )}
      </div>
    </PaginaPadrao>
  );
}
