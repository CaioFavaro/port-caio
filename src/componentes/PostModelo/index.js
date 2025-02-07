import { useEffect } from 'react';
import styles from './PostModelo.module.css';

export default function PostModelo({ children, fotoCapa, titulo, scrollTop = true }) {
    
    useEffect(() => {
        if(scrollTop) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollTop]);

    return (
        <article className={styles.postModeloContainer} id="inicio">
            {fotoCapa && (
                <div
                    className={styles.fotoCapa}
                    style={{ backgroundImage: `url(${fotoCapa})` }}
                ></div>
            )}
            
            {titulo && (
                <h2 className={styles.titulo}>
                    {titulo}
                </h2>
            )}

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    );
}