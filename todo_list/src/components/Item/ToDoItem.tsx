import styles from './ToDoItem.module.css';

interface IProps {
  todo: {
    key: string;
    task: string;
    done: boolean;
    dateTime: string;
    showDate: boolean;
    checked: boolean;
  };
  throwAway: (key: string) => void;
  Complete: (key: string) => void;
  ShowDate: (key: string) => void;
  Check: (key: string) => void;
}

export function ToDoItem({
  todo,
  throwAway,
  Complete,
  ShowDate,
  Check,
}: IProps) {
  return (
    <div className='w-50 m-auto'>
      <div
        style={{
          cursor: 'pointer',
        }}
        className={`${styles.item}`}
      >
        <input
          onChange={() => Check(todo.key)}
          style={{
            marginRight: '10px',
            width: '20px',
          }}
          className='form-check-input my-auto'
          type='checkbox'
          value=''
          checked={todo.checked}
        ></input>
        <p
          onClick={() => ShowDate(todo.key)}
          className={
            todo.done
              ? 'text-start w-100 my-auto text-decoration-line-through'
              : 'text-start w-100 my-auto'
          }
        >
          {todo.task}
          <span
            className={
              todo.showDate
                ? 'text-start w-100 my-auto px-2'
                : 'text-start w-100 my-auto px-2 d-none'
            }
          >
            {todo.dateTime}
          </span>
        </p>

        <img
          className={`${styles.images}`}
          src='Images/complete.png'
          alt='Task complete'
          onClick={() => Complete(todo.key)}
        />
        <img
          className={`${styles.images}`}
          src='Images/trash.png'
          alt='Task failed'
          onClick={() => throwAway(todo.key)}
        />
      </div>
    </div>
  );
}
