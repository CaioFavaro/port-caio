import styles from './Contato.module.css';

export default function Contato() {
    return (
        <div id="contato" className={styles.contato}>
            <div className="container">
                <div className="row">
                    <div className={styles['contato-left']}>
                        <h1 className={styles['sub-title']}>Contato</h1>
                        <p><i className="fa-solid fa-envelope"></i> caiofavaro27@gmail.com</p>
                        <p><i className="fa-solid fa-phone-square-alt"></i> +55 (11)94686-4992</p>
                        <div className={styles['social-icons']}>
                            <a href="https://www.linkedin.com/in/caiofavaro/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/CaioFavaro" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <a href="images/Caio_Favaro-CV.pdf" download className={`btn btn2 ${styles['btn-custom']}`}>Baixe meu CV</a>
                        <div className={styles.voltar}>
                            <a href="#header"><p>Voltar para o início</p></a>
                        </div>
                    </div>

                    <div className={styles['contato-right']}>
                        <form action="https://api.staticforms.xyz/submit" method="post">
                            <input type="text" name="Name" placeholder="Digite seu nome" required autoComplete="off" className={styles.input} />
                            <input type="email" name="Email" placeholder="Digite seu email" required autoComplete="off" className={styles.input} />
                            <textarea name="Message" rows="6" placeholder="Digite sua mensagem" className={styles.textarea}></textarea>
                            <button type="submit" className={`btn btn2 ${styles['btn-custom']}`}>Enviar</button>

                            <input type="hidden" name="accessKey" value="6cd30a0d-3d20-40ef-b53f-82bee0f70aa9" />
                            <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/index.html" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
