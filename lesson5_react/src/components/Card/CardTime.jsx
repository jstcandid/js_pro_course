import styles from './CardTime.module.css';
export function CardTime({ date }) {
  return (
    <div className={`${styles.container}`}>
      <p
        style={{
          margin: 'auto',
        }}
      >
        {date}
      </p>
    </div>
  );
}
