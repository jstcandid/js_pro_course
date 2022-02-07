import styles from './Card_onliner.module.css';
import { Button2 } from '../Button/Button';

export function Card_onliner({
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
        <Button2 text={category} onClick={onClick} />
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
