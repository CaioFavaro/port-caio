import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../componentes/Auth/LoginForm';
import styles from './Login.module.css';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <LoginForm />
        <button 
          className={styles.registerButton}
          onClick={() => navigate('/register')}
        >
          Faça o cadastro
        </button>
      </div>
    </div>
  );
}
