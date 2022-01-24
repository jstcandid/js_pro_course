import { Component } from 'react';
import styles from './Button.module.css';

export function Button({ text, onClick }) {
  return (
    <button className={`${styles.primary} ${styles.button}`} onClick={onClick}>
      {text}
    </button>
  );
}
