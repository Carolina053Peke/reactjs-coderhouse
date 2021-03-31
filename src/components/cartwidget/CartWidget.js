import './CartStyles.css'
import img from '../../img/shopping-cart.png'

export function CartWidget() {
    return(
        <div>
            <img src={img} alt="shopping-cart" className="cartImg"></img>
        </div>
    )
}
