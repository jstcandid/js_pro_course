import styles from './Card_author.module.css';
export function Card({ title, subtitle, author }) {
  // const onClick = () => {
  //   alert('You clicked n an image');
  // };
  return (
    <div className='card text-center w-25  '>
      <div className='card-body px-5'>
        <h5 className='card-title fs-3 lh-base'>{title}</h5>
        <p className='card-text fs-5 lh-base'>{subtitle}</p>
      </div>
      <div className='card-footer text-muted fs-5'>
        <p className='px-5'>
          Authore: <a href=''>{author} </a>
        </p>
      </div>
    </div>
  );
}
