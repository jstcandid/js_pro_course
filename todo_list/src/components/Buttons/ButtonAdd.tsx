interface IProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: IProps) {
  return (
    <button
      className='btn btn-outline-success w-25'
      type='button'
      id='button-addon2'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
