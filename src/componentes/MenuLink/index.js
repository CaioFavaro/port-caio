import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to, tipo = 'normal', icone }) {
    const location = useLocation();
    
    // 1. Primeiro verifica links externos
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

    // 2. Depois verifica âncoras
    const isAnchor = to.includes('#');
    if (isAnchor) {
        const [hash, path] = to.split('#');
        const handleScroll = (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                const yOffset = -100;
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
                    handleScroll(path);
                }}
            >
                {icone && <span className={styles.icone}>{icone}</span>}
                {children}
            </a>
        );
    }

    // 3. Por último links internos normais
    return (
        <Link
            to={to}
            className={`${styles.link} ${styles[tipo]} ${
                location.pathname === to ? styles.ativo : ''
            }`}
        >
            {icone && <span className={styles.icone}>{icone}</span>}
            {children}
        </Link>
    );
}