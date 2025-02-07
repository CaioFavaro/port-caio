import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

export default function LoginButton() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated) {
        return (
            <button 
                onClick={logout}
                className={styles.authButton}
            >
                Sair
            </button>
        );
    }

    return (
        <button 
            onClick={() => navigate('/login')}
            className={styles.authButton}
        >
            Login
        </button>
    );
}