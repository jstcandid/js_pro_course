import { ChangeEventHandler } from 'react';

import { ToDoItem } from '../Item/ToDoItem';

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
  throwAway: () => void;
  complete: () => void;

  items: [
    {
      key: string;
      task: string;
      done: boolean;
    }
  ];
}

export function ToDoList({ items, complete, throwAway }: IProps) {
  return items.map((item) => {
    return <ToDoItem todo={item} throwAway={throwAway} Complete={complete} />;
  });
}
