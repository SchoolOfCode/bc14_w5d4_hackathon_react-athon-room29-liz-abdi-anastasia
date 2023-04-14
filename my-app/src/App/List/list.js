import DeleteThis from './deletebutton.js'

function ListItem ({list, removeFromList}){

    return (
        <div className="list-item">
            <ul>
                { list.map((item, index) => {
                     return <li key={index}>
                                {item}
                                <DeleteThis index={index} removeFromList={removeFromList} />
                            </li>
                        })}
            </ul>
        </div>
    )
}
export default ListItem;