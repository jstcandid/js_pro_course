import styles from './Counter.module.css';

export function Counter({ value, onClickPlus, onClickMinus, onClickReset }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.top_part}`}>
        <button
          onClick={onClickPlus}
          className={`${styles.button} ${styles.green}`}
        >
          +
        </button>
        <p className={`${styles.text}`}>{value}</p>
        <button
          onClick={onClickMinus}
          className={`${styles.button} ${styles.red}`}
        >
          -
        </button>
      </div>
      <div className={`${styles.top_part}`}>
        <button
          onClick={onClickReset}
          className={`${styles.button} ${styles.reset}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
