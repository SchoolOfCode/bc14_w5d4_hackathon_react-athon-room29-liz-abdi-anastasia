import "./button.css";

//when the user clicks the add to list button the handleAddToListButton function will be called to add the text state to the list state
//so the text state (which contains the text input by the user) will be ready to be added to the list state (which contains the list of items to be displayed in the to do list

function AddToListButton({ handleAddToListButton }) { 
  return (
    <button className="addbutton" onClick={handleAddToListButton}> 
      Add to the list
    </button>
  );
}

export default AddToListButton;
