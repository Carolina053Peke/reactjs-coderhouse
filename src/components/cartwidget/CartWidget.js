 import './CartStyles.css'
 import img from './shoppingCart.png'

 export function CartWidget() {  
    return(
 <div>
    <img src={img} alt="shopping-cart" className="cartImg"></img>
 </div>
    )
}
