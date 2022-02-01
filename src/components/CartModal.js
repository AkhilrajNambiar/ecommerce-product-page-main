import ItemInCart from "./ItemInCart";
import sneakers from "../images/image-product-1-thumbnail.jpg"

const CartModal = (props) => {
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;

    return ( 
        <div className="cart-modal">
            <header className="cart-modal-header">
                Cart
            </header>
            <hr className="cart-underline"></hr>
            { 
            cartItems ? 
                <ItemInCart image={ cartItems.image } name={ cartItems.name } unitCost={ cartItems.unitCost } count={ cartItems.count } setCartItems={ setCartItems }/> :
                <div className="no-items-in-cart">
                    Your cart is empty
                </div>
            }
        </div>
     );
}
 
export default CartModal;