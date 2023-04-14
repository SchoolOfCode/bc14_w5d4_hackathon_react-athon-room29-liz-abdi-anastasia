import "./list.css";

function DeleteThis({ index, removeFromList }) {
  return (
    <button class="deletebutton" onClick={() => removeFromList(index)}>
      Delete
    </button>
  );
}

export default DeleteThis;
