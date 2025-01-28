import Banner from "../../componentes/Banner";
import Contato from "../../componentes/Contato";
import Rodape from "../../componentes/Rodape";
import styles from './Inicio.module.css';
import fotoperfil from '../../assets/FotoPerfil.jpeg';

export default function Inicio() {
    return (
        <>
            <Banner> 
            </Banner>

            <div id="problema">
                <h3 className={styles.subtitulo}>Sobre</h3>
                <p className={styles.paragrafo}>
                Olá, tenho 23 anos, atualmente sou formado em Sistemas de informação na FIAP, também atuei estagiando no Departamento e Tecnologia e informação da prefeitura de Cotia, garantindo excelência e perfeccionismo no meu trabalho.
                </p>
                <div className={styles.containerProblema}>
                <ul className={styles.lista}>
                    <li>Segregação de Clientes</li>
                    <li>Tempo de Resposta crítico</li>
                    <li>Degradação de serviço</li>
                    <li>Bases de Dados segregadas e heterogêneas</li>
                </ul>
                <img className={styles.fotoperfil} src={fotoperfil} alt="Problemas identificados" />
            </div>
            </div>
            
            <Contato>
            </Contato>
            <Rodape>
            </Rodape>
        </>
    );
}
