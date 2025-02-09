import { useLocation } from 'react-router-dom';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';
import { menuConfig } from './menuConfig';
import { useAuth } from '../../context/AuthContext'; 
import LoginButton from '../Auth/LoginButton'; 

export default function Menu() {
    const location = useLocation();
    
    const currentMenu = menuConfig.find(config => 
        location.pathname.startsWith(config.path)
    ) || menuConfig[0];

    return (
        <header className={styles.cabecalho}>
            <nav className={styles.navegacaoPrincipal}>
               
                {currentMenu.links.map((item, index) => {
                    if (item.acao) {
                        return (
                            <button
                                key={index}
                                onClick={item.acao}
                                className={`${styles.botao} ${styles[item.tipo]}`}
                            >
                                {item.texto}
                            </button>
                        );
                    }
                    return (
                        <MenuLink 
                            key={index}
                            to={item.to}
                            tipo={item.tipo}
                        >
                            {item.texto}
                        </MenuLink>
                    );
                })}

                
                <div className={styles.loginContainer}>
                    <LoginButton />
                </div>
            </nav>
        </header>
    );
}