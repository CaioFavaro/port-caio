import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to, tipo = 'normal', icone }) {
  const location = useLocation();
  
  // Se for um link externo, retorna <a> normalmente
  if (to.startsWith('http')) {
    return (
      <a
        href={to}
        className={`${styles.link} ${styles[tipo]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icone && <span className={styles.icone}>{icone}</span>}
        {children}
      </a>
    );
  }

  // Verifica se é um link de âncora (contém '#')
  const isAnchor = to.includes('#');
  if (isAnchor) {
    // Se NÃO estiver na homepage, apenas navegue para a URL com hash
    if (location.pathname !== '/') {
      return (
        <Link to={to} className={`${styles.link} ${styles[tipo]}`}>
          {icone && <span className={styles.icone}>{icone}</span>}
          {children}
        </Link>
      );
    }

    // Se estiver na homepage, use scroll suave para a âncora
    const [, elementId] = to.split('#');
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // ajuste o deslocamento conforme necessário
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    return (
      <a
        href={to}
        className={`${styles.link} ${styles[tipo]}`}
        onClick={(e) => {
          e.preventDefault();
          handleScroll(elementId);
        }}
      >
        {icone && <span className={styles.icone}>{icone}</span>}
        {children}
      </a>
    );
  }

  // Caso seja um link interno normal (não âncora)
  return (
    <Link
      to={to}
      className={`${styles.link} ${styles[tipo]} ${location.pathname === to ? styles.ativo : ''}`}
    >
      {icone && <span className={styles.icone}>{icone}</span>}
      {children}
    </Link>
  );
}
