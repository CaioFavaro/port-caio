import styles from './Contato.module.css';

import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contato() {
    return (
        <div id="contato" className={styles.contato}>
            <div className="container">
                <div className={styles.row}>
                   
                    <div className={styles.contatoLeft}>
                        <h1 className={styles.subTitle}>Contato</h1>
                        <p>
                            <FaEnvelope className={styles.icon} /> caiofavaro27@gmail.com
                        </p>
                        <p>
                            <FaPhone className={styles.icon} /> +55 (11) 94686-4992
                        </p>

                        <div className={styles.socialLinks}>
                            <a href="https://www.linkedin.com/in/caiofavaro" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className={styles.socialIcon} />
                            </a>
                            <a href="https://github.com/CaioFavaro" target="_blank" rel="noopener noreferrer">
                                <FaGithub className={styles.socialIcon} />
                            </a>
                        </div>

                        <a href="/assets/Caio-Favaro-CV.pdf" download className={styles.btnCustom}>
                            Baixe meu CV
                        </a>
                    </div>

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

                            <input type="hidden" name="accessKey" value="6cd30a0d-3d20-40ef-b53f-82bee0f70aa9" />
                            <input type="hidden" name="redirectTo" value="http://localhost:3000/" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
