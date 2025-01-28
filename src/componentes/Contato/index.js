import styles from './Contato.module.css';

export default function Contato() {
    return (
        <div id="contato" className={styles.contato}>
            <div className="container">
                <div className={styles.row}>
                    {/* Esquerda */}
                    <div className={styles.contatoLeft}>
                        <h1 className={styles.subTitle}>Contato</h1>
                        <p><i className="fa-solid fa-envelope"></i> caiofavaro27@gmail.com</p>
                        <p><i className="fa-solid fa-phone-square-alt"></i> +55 (11) 94686-4992</p>
                        <a href="images/Caio_Favaro-CV.pdf" download className={styles.btnCustom}>
                            Baixe meu CV
                        </a>
                    </div>

                    {/* Direita */}
                    <div className={styles.contatoRight}>
                        <form action="https://api.staticforms.xyz/submit" method="post">
                            <input
                                type="text"
                                name="Name"
                                placeholder="Digite seu nome"
                                required
                                autoComplete="off"
                                className={styles.input}
                            />
                            <input
                                type="email"
                                name="Email"
                                placeholder="Digite seu email"
                                required
                                autoComplete="off"
                                className={styles.input}
                            />
                            <textarea
                                name="Message"
                                rows="6"
                                placeholder="Digite sua mensagem"
                                required
                                className={styles.textarea}
                            ></textarea>
                            <button type="submit" className={styles.btnCustom}>
                                Enviar
                            </button>

                            <input
                                type="hidden"
                                name="accessKey"
                                value="6cd30a0d-3d20-40ef-b53f-82bee0f70aa9"
                            />
                            <input
                                type="hidden"
                                name="redirectTo"
                                value="http://localhost:3000/"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
