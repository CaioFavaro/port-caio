import styles from './Banner.module.css';


export default function Banner() {
    return (
        <div className={styles.banner} id="inicio">
            <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                    Bem Vindo!
            </h1>
                <p className={styles.subtitulo}>
                    Sou o Caio e nesse espaço dedico a mostrar mais sobre meus projetos.
                </p>
            </div>

            <div className={styles.imagens}>
                       
            </div>
        </div>
    )
}