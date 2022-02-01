import ItemImages from "./ItemImages";
import firstImage from "../images/image-product-1.jpg";
import closeSlider from "../images/icon-close.svg";
import { useState } from "react/cjs/react.development";

const ImageSlider = (props) => {

    // Used to change the color of cross svg on hovering
    const [closeColor, setCloseColor ] = useState("#fff");
    // The setter for setting the slider's visibility
    const setSliderVisibility = props.setSliderVisibility;
    // The current selected image in the slider
    let selectedImage = props.selectedImage;
    // The function to set the selected image
    const setSelectedImage = props.setSelectedImage;
    const [ hoverOnNext, setHoverOnNext ] = useState("#1D2026");
    const [ hoverOnPrev, setHoverOnPrev ] = useState("#1D2026");

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
        <div className="item-images-in-slider">
            <div className="close-slider-box"  >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill={ closeColor } fill-rule="evenodd" onMouseEnter={ () => setCloseColor("hsl(26, 100%, 55%)") } onMouseLeave={ () => setCloseColor("#fff") } onClick={() => setSliderVisibility(false)}/></svg>
            </div>
            <img src={ selectedImage.fullImage } alt="main-image" id="main-image-in-slider"></img>
            {/* set the previous image */}
            <div className="prev-image" onMouseEnter={ () => setHoverOnPrev("hsl(26, 100%, 55%)") } onMouseLeave={ () => setHoverOnPrev("#1D2026") } onClick={ setPreviousImage }>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke={ hoverOnPrev } stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
            {/* set the next image */}
            <div className="next-image" onMouseEnter={ () => setHoverOnNext("hsl(26, 100%, 55%)") } onMouseLeave={ () => setHoverOnNext("#1D2026") } onClick={ setNextImage }>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke={hoverOnNext} stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
            <div className="images-list">
                { ItemImages.map((item, index) => (
                    <div className={`image ${item.cName}`} key={index} id={ selectedImage.cName === item.cName ? "current-image" : item.cName }>
                        <img src={item.thumbImage} alt={item.cName} id={item.cName}></img>
                        <div className="image-overlay"></div>
                    </div>
                )) }
            </div>
        </div>
     );
}
 
export default ImageSlider;