import "./App.css";
import { useState } from "react"; //import useState hook
import AddToListButton from "./Button/button.js"; //import AddToListButton component from Button folder
import InputField from "./Input/input.js"; //import InputField component from Input folder
import ListItem from "./List/list.js"; //import ListItem component from List folder

function App() {
  const [text, setText] = useState(""); //initialise the text state to an empty string (it will contain the text input by the user)
  const [list, setList] = useState([]); //initialise the list state to an empty array (it will contain the list of items to be displayed in the to do list)

  function handleInput(event) {
    setText(event.target.value); //set the text state to the value of the input field (when the user types in the input field the text state will be updated)
  }

  function handleAddToListButton() {
    setList([...list, text]); //set the list state to the list state plus the text state (when the user clicks the add to list button the text state will be added to the list state)
    setText(""); //set the text state to an empty string (when the user clicks the add to list button the text state will be reset to an empty string so that the input field will be empty)
  }

  function removeFromList(index) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]); //set the list state to the list state without the item that the user wants to delete (when the user clicks the delete button the item next to that delete button will be removed from the list state)
  }

  return ( //the following will be displayed on the browser
    <div className="App">
      <h2>To Do List</h2> {/*hard coded title */}
      <InputField handleInput={handleInput} value={text} /> {/* it will display what the user types in the input field using the handleInput function and the text state as props*/}
      <AddToListButton handleAddToListButton={handleAddToListButton} /> {/* it will display the add to list button using the handleAddToListButton function as props*/}
      <ListItem list={list} removeFromList={removeFromList} /> {/* it will display the list of items and the delete button using the list state and the removeFromList function as props*/}
    </div>
  );
}

export default App;
