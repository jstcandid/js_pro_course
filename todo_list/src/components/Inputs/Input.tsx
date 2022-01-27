import { ChangeEventHandler } from 'react';

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ value, onChange }: IProps) {
  return (
    <input
      className='form-control'
      placeholder='What you have to do?'
      aria-label='What you have to do?'
      value={value}
      onChange={onChange}
      type='text'
      aria-describedby='button-addon2'
    />
  );
}
