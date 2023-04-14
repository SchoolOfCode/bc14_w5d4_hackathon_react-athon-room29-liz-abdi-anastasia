import "./input.css"

function InputField({handleInput, value}) {
    return ( 
        <input className="inputfield" type="text" onChange={handleInput} value={value}></input>
    )
}
export default InputField;