import deleteItem from "../images/icon-delete.svg";

const ItemInCart = (props) => {
    const image = props.image;
    const name = props.name;
    const unitCost = props.unitCost;
    const count = props.count;
    const setCartItems = props.setCartItems;

    return ( 
        <div className="item-in-cart">
            <div className="item-details">
                <div className="item-image">
                    <img src={ image } width={50} height={50} alt={`${name} image`}></img>
                </div>
                <div className="item-name-and-cost">
                    <div className="item-name">
                        { name }
                    </div>
                    <div className="item-cost">
                        { `$${unitCost.toFixed(2)} x ${count}` } <span className="total-cost">{`$${(unitCost * count).toFixed(2)}`}</span>
                    </div>
                </div>
                <div className="delete-item" onClick={ () => setCartItems(null) }>
                    <img src={deleteItem}></img>
                </div>
            </div>
            <div className="checkout-item">
                Checkout
            </div>
        </div>
     );
}
 
export default ItemInCart;