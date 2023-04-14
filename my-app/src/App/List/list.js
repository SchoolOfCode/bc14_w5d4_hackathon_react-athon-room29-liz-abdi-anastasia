function ListItem ({list}){
    return (
        <div className="list-item">
            <ul>
                { list.map((item) => {
                     return <li>{item}</li>
                        }) }
            </ul>
            <button>delete button</button>
        </div>
    )
}
export default ListItem;