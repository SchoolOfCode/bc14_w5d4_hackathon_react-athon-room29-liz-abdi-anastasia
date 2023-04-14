import "./list.css";

// we made a separate component for the delete button because we want to be able to delete each item in the list
// so we need to be able to pass the index of the item to be deleted to the delete button
// when the user clicks the delete button the removeFromList function will be called to remove the item next to that delete button from the list state
// we use an arrow function to pass the index and removeFromList function as props to the DeleteThis component
// so that the removeFromList function will be called to remove the item next to that delete button from the list state and won't be called any other time

function DeleteThis({ index, removeFromList }) {
  return (
    <button class="deletebutton" onClick={() => removeFromList(index)}>
      Delete
    </button>
  );
}

export default DeleteThis;
