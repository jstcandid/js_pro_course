import styles from './ToDoItem.module.css';

interface IProps {
  todo: {
    key: string;
    task: string;
    done: boolean;
  };
  throwAway: (key: string) => void;
  Complete: (key: string) => void;
}

export function ToDoItem({ todo, throwAway, Complete }: IProps) {
  return (
    <div className='w-50 m-auto'>
      <div className={`${styles.item}`}>
        <p
          className={
            todo.done
              ? 'text-start w-100 my-auto text-decoration-line-through'
              : 'text-start w-100 my-auto'
          }
        >
          {todo.task}
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
