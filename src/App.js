import { useEffect, useState } from "react";
import Home from "./components/Home";
import ItemInCart from "./components/ItemInCart";
import Navbar from "./components/Navbar";
import sneakers from "./images/image-product-1-thumbnail.jpg"

function App() {
  const [ itemCount, setItemCount ] = useState(1);
  const [ cartItems, setCartItems ] = useState(null);
  const [ checkedCart, setCartChecked ] = useState(false);
  
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  });

  return (
    <div className="App">
       <Navbar cartItems={cartItems} setCartItems={ setCartItems } 
       checkedCart={checkedCart} setCartChecked={setCartChecked} />
       <Home count={ itemCount } setItemCount={setItemCount} cartItems={cartItems} setCartItems={ setCartItems } checkedCart={checkedCart} setCartChecked={setCartChecked} />
    </div>
  );
}

export default App;