import { useState } from 'react';

import './App.css';
import { CardTime } from './components/Card/Card_time';
import {
  AuthorList,
  FacebookList,
  OnlinerList,
} from './components/CardLists/CardLists';

function App() {
  const [date, setValue] = useState(new Date().toLocaleTimeString('en-GB'));
  const onClickLike = () => {
    alert('Congrats! You liked it!');
  };
  const onClickReply = () => {
    alert('Ooops, I dont want to hear from you');
  };

  const onClickBtnOnliner = () => {
    alert('Btn clicked');
  };
  // // const onChangeText = (event) => setText(event.target.value);
  return (
    <div className=''>
      <AuthorList />
      <OnlinerList onClick={onClickBtnOnliner} />
      <FacebookList onClickLike={onClickLike} onClickReply={onClickReply} />
      <CardTime date={date} />
    </div>
  );
}

export default App;
