import { Component } from 'react';
import styles from './Button.module.css';

export class Button1 extends Component {
  render() {
    return (
      <button
        style={{
          width: '200px',
          display: 'flex',
          paddingLeft: '10px',
          paddingRight: '10px',
          backgroundColor: 'greenyellow',
          fontSize: '16px',
          fontFamily: 'cursive',
        }}
      >
        Class button
      </button>
    );
  }
}

export function Button2() {
  return (
    <button className={`${styles.primary} ${styles.button}`}>
      Functional button
    </button>
  );
}
