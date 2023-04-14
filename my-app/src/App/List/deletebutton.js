function DeleteThis({ index, removeFromList }) {
  return <button onClick={() => removeFromList(index)}>Delete</button>;
}

export default DeleteThis;
