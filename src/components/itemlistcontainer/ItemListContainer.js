import './ItemListContainerStyles.css'
import ItemCount from '../itemcount/ItemCount'

export function ItemListContainer(props){
    return(
        <div>
            <h2 className="saludo">{props.greeting}</h2>
            <ItemCount />
        </div>
    )
};