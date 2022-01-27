import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { ToDoList } from './components/ToDoList/ToDoList';
import { toDoItems } from './components/ToDoList/items';

function App() {
  const [items, setItem] = useState(toDoItems);
  const [inputValue, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClickAdd = () => {
    if (inputValue.replace(/\s+/g, '')) {
      const newItem = {
        key: Math.random().toString(16).slice(2),
        task: inputValue,
        done: false,
      };
      setItem([...items, newItem]);
      setValue('');
    }
  };

  const throwAway = (idToFind) => {
    const afterDel = items.filter((el) => el.key !== idToFind);
    setItem(afterDel);
  };

  const complete = (idToFind) => {
    const afterCompl = items.map((el) => {
      if (el.key === idToFind) {
        el.done = !el.done;
      }
      return el;
    });
    setItem(afterCompl);
  };

  return (
    <div className='App w-100'>
      <Form
        onClick={onClickAdd}
        onChange={onChange}
        text='Add'
        value={inputValue}
      />
      <ToDoList items={items} throwAway={throwAway} complete={complete} />
    </div>
  );
}

export default App;
