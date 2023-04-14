function InputField({handleInput, value}) {
    return ( 
        <input type="text" onChange={handleInput} value={value}></input>
    )
}
export default InputField;