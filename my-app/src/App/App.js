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
    setText("");
  }

  function removeFromList(index) {
    setList([...list.slice(0, index), ...list.slice(index+1)])
  }


  return (
    <div className="App">
      <h2>To Do List</h2>
      <AddToListButton handleAddToListButton={handleAddToListButton} />
      <InputField handleInput={handleInput} value={text} />
      <ListItem list={list} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
