import './App.css';
import {useState} from 'react';
import AddToListButton from './Button/button.js';
import InputField from './Input/input.js';
import ListItem from './List/list.js';

function App() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleInput(event) {
    setText(event.target.value);
  }

  function handleAddToListButton() {
    setList([...list, text]);
  }


  return (
    <div className="App">
      <AddToListButton handleAddToListButton={handleAddToListButton} />
      <InputField handleInput={handleInput} />
      <ListItem list={list} />
      <p>Just testing this</p>
    </div>
  );
}

export default App;
