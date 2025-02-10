import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      setSuccess('Login realizado com sucesso!');
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Login</h2>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
      <div className={styles.formGroup}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Entrar
      </button>
    </form>
  );
}
