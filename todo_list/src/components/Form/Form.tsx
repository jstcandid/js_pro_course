import { ChangeEventHandler } from 'react';
import { Button } from '../Buttons/ButtonAdd';

import { Input } from '../Inputs/Input';

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
  onClick: () => void;
}

export function Form({ value, onChange, text, onClick }: IProps) {
  return (
    <div className='input-group mb-3 m-auto w-50 my-5'>
      <Input value={value} onChange={onChange} />
      <Button text={text} onClick={onClick} />
    </div>
  );
}
