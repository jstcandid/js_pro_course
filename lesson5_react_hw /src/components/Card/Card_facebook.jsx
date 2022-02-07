export function Card1({
  name,
  postDescription,
  location,
  timeText,
  onClickLike,
  onClickReply,
}) {
  return (
    <div className='card mb-3 w-50 mx-2 '>
      <div
        className='card-body  d-flex '
        style={{
          height: '150px',
        }}
      >
        <div>
          <img
            style={{
              height: '100%',
              width: '118px',
            }}
            src='images/avatar.jpeg'
            className='  border'
            alt='Avatar'
          />
        </div>
        <div className='d-flex flex-column justify-content-between mx-3'>
          <div className='d-flex '>
            <h6 className='card-title fs-5 text-primary'>
              <a href='/' className='text-decoration-none'>
                {name}
              </a>
              <span className='text-secondary'> - {location}</span>
            </h6>
          </div>
          <p className='card-text'>{postDescription}</p>
          <p className='card-text'>
            <small className='text-muted'>
              <span>
                <a
                  href='/'
                  onClick={onClickLike}
                  className='text-decoration-none'
                >
                  Like{' '}
                </a>
              </span>
              -
              <span>
                <a
                  className='text-decoration-none'
                  href='/'
                  onClick={onClickReply}
                >
                  {' '}
                  Reply
                </a>
              </span>
              <span> - {timeText}</span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
