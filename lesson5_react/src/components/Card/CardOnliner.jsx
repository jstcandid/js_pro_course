import styles from './CardOnliner.module.css';
import { Button } from '../Button/Button';

export function CardOnliner({
  title,
  backgroundImageUrl,
  category,
  commentCount,
  onClick,
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
      className={`${styles.container} ${styles.background1}`}
    >
      <div className={`${styles.header}`}>
        <Button text={category} onClick={onClick} />
        <div className={`${styles.comment_both}`}>
          <img
            className={`${styles.comment}`}
            src='images/comment.svg'
            alt='Comment SVG'
          />
          <div className={`${styles.commentText}`}>{commentCount}</div>
        </div>
      </div>
      <div>
        <h3 className={`${styles.mainText}`}>{title}</h3>
      </div>
    </div>
  );
}
