import DeleteThis from "./deletebutton.js";
import "./list.css";

// when the user clicks the delete button the removeFromList function will be called to remove the item next to that delete button from the list state
// the Delete component is imported from the deletebutton.js file and the index and removeFromList function are passed as props to the Delete component
// so that the Delete component will know which item to remove from the list state
// and the list state will be updated to the list state without the item that the user wants to delete
// and the list state will be passed as props to the ListItem component
// so that the ListItem component will know which items to display in the to do list

function ListItem({ list, removeFromList }) {
  return (
    <div className="list-item">
      <ul>
        {list.map((item, index) => { (/* the list state is mapped to display the items in the list state so it loops through the list state and displays the items in the list state */)
            return (
            <li key={index}>  {/* the key is the index of the item in the list state */}
              {item} {/* it will display the items in the list state */}
              <DeleteThis index={index} removeFromList={removeFromList} /> {/* it will display the delete button, it has the index as props so that the Delete component will know which item to remove from the list state and the removeFromList function as props so that the Delete component will know which function to call to remove the item next to that delete button from the list state */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ListItem;
