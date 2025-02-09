import { useNavigate } from 'react-router-dom';
import Contato from "../../componentes/Contato";
import posts from '../../json/posts.json';
import styles from './Inicio.module.css';
import fotoperfil from '../../assets/FotoPerfil.jpeg';
import PostModelo from "../../componentes/PostModelo";
import PostCard from "../../componentes/PostCard";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useAuth } from '../../context/AuthContext'; 


export default function Inicio() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    return (
        <PostModelo>
            <div id="inicio" className={styles.secao}>
            </div>

            
            <div id="sobre" className={styles.secao}>
                <h3 className={styles.subtitulo}>Sobre Mim</h3>
                <div className={styles.containerSobreMim}>
                    <img className={styles.fotoPerfil} src={fotoperfil} alt="Foto de perfil" />
                    <div className={styles.tabsContainer}>
                        <Tabs>
                            <TabList>
                                <Tab><span className={styles.tabRedWord}>Habilidades</span></Tab>
                                <Tab><span className={styles.tabRedWord}>Educação</span></Tab>
                                <Tab><span className={styles.tabRedWord}>Experiências</span></Tab>
                            </TabList>

                            <TabPanel>
                                <ul className={styles.lista}>
                                    <li><span className={styles.tituloItem}>Comunicação</span><br />Habilidade em trabalhar em equipe multidisciplinar</li>
                                    <li><span className={styles.tituloItem}>Tecnologias</span><br />Domínio em React, Node.js e bancos de dados relacionais</li>
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <ul className={styles.lista}>
                                    <li><span className={styles.tituloItem}>ETEC</span><br />Técnico em Informática Integrado ao Ensino Médio</li>
                                    <li><span className={styles.tituloItem}>FIAP</span><br />Bacharelado em Sistemas de Informação</li>
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <ul className={styles.lista}>
                                    <li><span className={styles.tituloItem}>Beecenter</span><br />Analista de Suporte Técnico</li>
                                    <li><span className={styles.tituloItem}>Prefeitura de Cotia</span><br />Analista de Sistemas no Departamento de TI</li>
                                </ul>
                            </TabPanel>
                        </Tabs>
                    </div>
                    
                </div>
                <p className={styles.paragrafo}>
                    Olá! Sou Caio Oliveira, tenho 23 anos e sou formado em Sistemas de Informação pela FIAP. Atuei como estagiário no Departamento de Tecnologia da Informação da Prefeitura de Cotia, onde busquei sempre garantir excelência e perfeccionismo em minhas atividades.

                    Natural de Cotia, São Paulo, sempre fui profundamente conectado à tecnologia. Através dela, consigo alinhar minhas ideias criativas às necessidades do mercado, encontrando realização profissional.

                    Sou movido por desafios e acredito que a criatividade e a organização são ferramentas essenciais para resolver problemas de maneira inovadora. Estou constantemente em busca de novos conhecimentos e oportunidades que me permitam contribuir para o crescimento e sucesso das equipes das quais faço parte.
                </p>
            </div>

            
            <div id="projetos" className={styles.secao}>
                <h3 className={styles.subtitulo}>Projetos Recentes</h3>
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </div>

            <div id="contato" className={styles.secao}>
                <Contato />
            </div>

            {isAuthenticated && (
                <div id="area-restrita" className={styles.secao}>
                    <h3 className={styles.subtitulo}>Área Restrita</h3>
                    <p className={styles.paragrafo}>
                        Bem-vindo à área restrita! Aqui estão algumas informações exclusivas para você:
                    </p>
                    <ul className={styles.lista}>
                        <li><span className={styles.tituloItem}>Projeto Confidencial</span><br />Detalhes sobre um projeto em desenvolvimento.</li>
                        <li><span className={styles.tituloItem}>Relatórios</span><br />Acesso a relatórios internos da empresa.</li>
                    </ul>
                </div>
            )}
        </PostModelo>
    );
}