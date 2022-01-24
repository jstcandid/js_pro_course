import styles from './Card1.module.css';
export function Card() {
  return (
    <div className={`${styles.container} ${styles.background1}`}>
      <div className={`${styles.content1}`}>
        <h3 className={`${styles.title}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          saepe
        </h3>
        <a href='./'>More info...</a>
      </div>
    </div>
  );
}

export function Card1() {
  return (
    <div className={`${styles.container} ${styles.background2}`}>
      <div className={`${styles.content2}`}>
        <h4 className={`${styles.title2}`}>Card two</h4>
        <p className={`${styles.text2}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button className={`${styles.button2}`}>Read More</button>
      </div>
      <div>
        <img
          src={require(`./images/card2img.png`)}
          alt='Card2 img'
          className={`${styles.image2}`}
        />
      </div>
    </div>
  );
}

export function Card2() {
  return (
    <div className={`${styles.container} ${styles.background3}`}>
      {
        <div className={`${styles.content3}`}>
          <h4 className={`${styles.title3}`}>Card three</h4>
          <p className={`${styles.text3}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={`${styles.img_container}`}>
            <img
              src={require(`./images/card3.png`)}
              alt='Card3 img'
              className={`${styles.image3}`}
            />
          </div>
        </div>
      }
    </div>
  );
}
