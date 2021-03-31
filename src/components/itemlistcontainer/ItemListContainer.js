import './ItemListContainerStyles.css'

export function ItemListContainer(props){
    return(
        <div>
            <h2 className="saludo">{props.greeting}</h2>
        </div>
    )
};