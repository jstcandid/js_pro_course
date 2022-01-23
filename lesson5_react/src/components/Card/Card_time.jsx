import { authorCards } from '../CardLists/Constants';
import styles from './Card_time.module.css';
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
