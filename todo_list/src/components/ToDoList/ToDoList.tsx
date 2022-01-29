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
      dateTime: string;
      showDate: boolean;
      checked: boolean;
    }
  ];
  showDate: () => void;
  check: () => void;
}

export function ToDoList({
  items,
  complete,
  throwAway,
  showDate,
  check,
}: IProps) {
  return items.map((item) => {
    return (
      <ToDoItem
        todo={item}
        throwAway={throwAway}
        Complete={complete}
        ShowDate={showDate}
        Check={check}
      />
    );
  });
}
