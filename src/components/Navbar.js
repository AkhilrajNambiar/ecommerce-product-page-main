import { NavItems } from "./NavItems";
import cartImage from "../images/icon-cart.svg";
import profilePic from "../images/image-avatar.png";
import { useState } from "react";
import CartModal from "./CartModal";

const Navbar = (props) => {

    const [ isClicked, setIsClicked ] = useState(false);
    const [ modalIsShown, setModalIsShown ] = useState(false);
    const setCartItems = props.setCartItems;
    const cartItems = props.cartItems;
    const checkedCart = props.checkedCart;
    const setCartChecked = props.setCartChecked;

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const showOrHideCartModal = () => {
        if (!modalIsShown && !checkedCart) {
            setModalIsShown(!modalIsShown);
            setCartChecked(!checkedCart);
        }
        else {
            setModalIsShown(!modalIsShown);
        }
    }

    window.addEventListener("resize", () => {
        // This function helps to close the opened mobile sidebar
        // in the event of resizing and width becoming greater
        // than 900
        if ( isClicked && window.innerWidth > 900 ) {
            setIsClicked(false);
        }
    })

    return ( 
        <nav className="main-nav">
            <div className="nav-left-side">
                <div className="hamburger" onClick={ handleClick }>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="logo">
                    sneakers
                </div>
                <ul className="nav-items">
                    {NavItems.map((item,index) => (
                        <li key={index} className="nav-item"><a href={item.url}>{ item.title }</a></li>
                    ))}
                </ul>
            </div>
            <div className="nav-right-side">
                <div className="cart">
                    <img src={cartImage} alt="Add to cart" width={25} height={25} onClick={showOrHideCartModal}/>
                    { modalIsShown ? <CartModal setCartItems={setCartItems} cartItems={cartItems} /> : <></> }
                    { cartItems && !checkedCart && <div className="cart-items-count">
                        { cartItems.count }
                    </div> }
                </div>
                <div className="profile">
                    <img src={profilePic} alt="go to profile" width={50} height={50}/>
                </div>
            </div>
            <div className="mobile-nav-sidebar" style={{
                left: isClicked ? "0": "-100%",
                right: isClicked ? "30%": "150%"
            }}>
                <div className="close-sidebar" onClick={ handleClick }>
                    <i className="fas fa-times"></i>
                </div>
                <ul className="mobile-nav-items">
                    {NavItems.map((item,index) => (
                        <li key={index} className="nav-item-mobile"><a href={item.url}>{ item.title }</a></li>
                    ))}  
                </ul>
            </div>
            <div className="shader" style={{
                display: isClicked ? "block": "none"
            }}></div>
        </nav>
     );
}
 
export default Navbar;