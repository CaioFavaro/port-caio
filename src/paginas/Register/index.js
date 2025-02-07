// src/paginas/Register/index.tsx
import React from 'react';
import { RegisterForm } from '../../componentes/Auth/RegisterForm';
import styles from './Register.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.registerBox}>
        <RegisterForm />
      </div>
    </div>
  );
}
