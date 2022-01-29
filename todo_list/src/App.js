import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { ToDoList } from './components/ToDoList/ToDoList';

import { Footer } from './components/Footer/Footer';
function App() {
  const [items, setItem] = useState([]);
  const [inputValue, setValue] = useState('');
  const [ifShow, setShow] = useState(false);

  const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClickAdd = () => {
    if (inputValue.replace(/\s+/g, '')) {
      const newItem = {
        key: Math.random().toString(16).slice(2),
        task: inputValue,
        dateTime: getDate(),
        showDate: false,
        done: false,
        checked: false,
      };
      setItem([...items, newItem]);
      setValue('');
    } else {
      alert('Enter something:)');
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

  const showDate = (idToFind) => {
    const afterClick = items.map((el) => {
      if (el.key === idToFind) {
        el.showDate = !el.showDate;
      }
      return el;
    });
    setItem(afterClick);
  };

  const deleteAll = () => {
    const afterDel = items.filter((el) => el.checked === false);
    setItem(afterDel);
    setShow(false);
  };
  const completeAll = () => {
    const afterCompl = items.map((el) => {
      if (el.checked === true) {
        el.done = !el.done;
        el.checked = !el.checked;
      }
      return el;
    });
    setItem(afterCompl);
    setShow(false);
  };

  const ifBtnShow = () => {
    setShow(false);
    items.forEach((el) => {
      if (el.checked === true) {
        setShow(true);
      }
    });
  };

  const check = (idToFind) => {
    const afterCheck = items.map((el) => {
      if (el.key === idToFind) {
        el.checked = !el.checked;
      }
      return el;
    });
    setItem(afterCheck);
    ifBtnShow();
  };

  return (
    <div className='App w-100'>
      <Form
        onClick={onClickAdd}
        onChange={onChange}
        text='Add'
        value={inputValue}
      />
      <ToDoList
        items={items}
        throwAway={throwAway}
        complete={complete}
        showDate={showDate}
        check={check}
      />
      <Footer ifShow={ifShow} deleteAll={deleteAll} completeAll={completeAll} />
    </div>
  );
}

export default App;
