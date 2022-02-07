import styles from './Input.module.css';

export function Input({ text, value, onChange }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.border}`}>
        <p className={`${styles.text}`}>{text}</p>
        <input
          className={`${styles.input}`}
          value={value}
          onChange={onChange}
          type='text'
        />
      </div>
    </div>
  );
}
