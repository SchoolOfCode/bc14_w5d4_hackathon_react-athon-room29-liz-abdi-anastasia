import "./input.css"

// when the user types in the input field the handleInput function will be called to update the text state and the value prop will be updated to the text state
// so that the value prop will contain the text input by the user
// and when the add to list button is clicked the text state will be added to the list state and the input field will be reset to an empty string

function InputField({handleInput, value}) {
    return ( 
        <input className="inputfield" type="text" onChange={handleInput} value={value}></input>
    )
}
export default InputField;