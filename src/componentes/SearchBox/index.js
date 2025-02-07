import React from 'react';
import styles from './SearchBox.module.css';

export default function SearchBox() {
    return (
        <div className={styles.searchContainer}>
            <input 
                type="text" 
                placeholder="Pesquisar..." 
                className={styles.input}
            />
            <button className={styles.button}>
                🔍
            </button>
        </div>
    );
}