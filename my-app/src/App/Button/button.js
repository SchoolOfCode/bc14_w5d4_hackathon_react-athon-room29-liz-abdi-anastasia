import "./button.css";

function AddToListButton({ handleAddToListButton }) {
  return (
    <button className="addbutton" onClick={handleAddToListButton}>
      Add to the list
    </button>
  );
}

export default AddToListButton;
