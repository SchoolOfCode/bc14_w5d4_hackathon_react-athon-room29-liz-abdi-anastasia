function ListItem ({list, removeFromList}){

    return (
        <div className="list-item">
            <ul>
                { list.map((item) => {
                     return <>
                     <li>{item}</li>
                     {/* <button onClick={removeFromList}>Delete</button> */}
                     </>
                        })}
            </ul>
        </div>
    )
}
export default ListItem;