import firstImage from "../images/image-product-1.jpg";
import ItemImages from "./ItemImages";
import increaseCount from "../images/icon-plus.svg";
import decreaseCount from "../images/icon-minus.svg";
import cart from "../images/icon-cart.svg";
import { useState } from "react/cjs/react.development";
import ImageSlider from "./ImageSlider";

const Home = (props) => {

    let itemCount = props.count;
    const setItemCount = props.setItemCount;
    const [ imageSliderVisible, setImageSliderVisibility ] = useState(false);
    const setCartItems = props.setCartItems;
    const checkedCart = props.checkedCart;
    const setCartChecked = props.setCartChecked;

    let [ selectedImage, setSelectedImage ] = useState(ItemImages.find(item => item.cName === "image-1"));
    const [ hoverOnNext, setHoverOnNext ] = useState("#1D2026");
    const [ hoverOnPrev, setHoverOnPrev ] = useState("#1D2026");

    const increaseItemCount = () => {
        setItemCount(++itemCount);
        console.log(itemCount);
    }

    const decreaseItemCount = () => {
        if (itemCount == 1) {
            return
        }
        setItemCount(--itemCount);
        console.log(itemCount);
    }

    const addToCart = () => {
        const item = {
            image: ItemImages[0].thumbImage,
            name: "Fall Limited Edition Sneakers",
            unitCost: 125.00,
            count: itemCount
        }
        setCartItems(item);
        setCartChecked(false);
    }

    const setPreviousImage = () => {
        let index = ItemImages.findIndex(item => item === selectedImage);
        // if index is zero, set index to last element
        if ( index === 0 ) {
            index = ItemImages.length - 1;
        }
        else {
            // else keep reducing the index
            index -= 1;
        }
        setSelectedImage(ItemImages[index]);
    }

    const setNextImage = () => {
        let index = ItemImages.findIndex(item => item === selectedImage);
        if ( index === ItemImages.length - 1 ) {
            index = 0;
        }
        else {
            index += 1;
        }
        setSelectedImage(ItemImages[index]);
    }

    return ( 
        <div className="home-box">
            <div className="item-images">
                <img src={ selectedImage.fullImage } alt="main-image" id="main-image"></img>
                {/* set the previous image */}
                <div className="prev-mobile-image" onMouseEnter={ () => setHoverOnPrev("hsl(26, 100%, 55%)") } onMouseLeave={ () => setHoverOnPrev("#1D2026") } onClick={ setPreviousImage }>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke={ hoverOnPrev } stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </div>
                {/* set the next image */}
                <div className="next-mobile-image" onMouseEnter={ () => setHoverOnNext("hsl(26, 100%, 55%)") } onMouseLeave={ () => setHoverOnNext("#1D2026") } onClick={ setNextImage }>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke={hoverOnNext} stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <div className="images-list">
                    { ItemImages.map((item, index) => (
                        <div className={`image ${item.cName}`} key={index} onClick={ () => setImageSliderVisibility(!imageSliderVisible) } id={ item.cName === selectedImage.cName ? "current-image" : item.cName }>
                            <img src={item.thumbImage} alt={item.cName}></img>
                            <div className="image-overlay"></div>
                        </div>
                    )) }
                </div>
            </div>
            <div className="brand-details">
                <div className="company-name">
                    sneaker company
                </div>
                <h1 className="brand-name">
                    Fall Limited Edition Sneakers
                </h1>
                <div className="brand-description">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </div>
                <div className="cost-box">
                    <div className="discounted-item-cost">
                        $125.00 <span className="discount">50%</span>
                    </div>
                    <div className="item-mrp">
                        <strike> $250 </strike>
                    </div>
                </div>
                <div className="count-and-add-to-cart">
                    <div className="edit-count-box">
                        <div className="decrease-count" onClick={ decreaseItemCount }>
                            <img src={ decreaseCount }></img>
                        </div>
                        <div className="count">
                            { itemCount }
                        </div>
                        <div className="increase-count" onClick={ increaseItemCount }>
                            <img src={ increaseCount }></img>
                        </div>
                    </div>
                    <div className="add-to-cart" onClick={ addToCart }>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg>  Add to cart
                    </div>
                </div>
            </div>
            { imageSliderVisible && <div className="image-slider"><ImageSlider setSliderVisibility={ setImageSliderVisibility } selectedImage={selectedImage} setSelectedImage={setSelectedImage}/></div> }
            { imageSliderVisible && <div className="slider-shader"></div> }
        </div>
     );
}
 
export default Home;