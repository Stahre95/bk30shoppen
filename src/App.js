import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';

//components
import Home from './components/Home/Home';
import KontaktaOss from './components/kontakta-oss/kontaktaOss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import CartView from './components/cartView/CartView';
import Checkout from './components/CheckoutView/Checkout';

// data information
import data from "../src/assets/json/data.json";
import media from '../src/assets/js/import.js';
import { commerce } from './lib/commerce/commerce.js';







function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();

  //fetch products from commerce API
  const productFetch = async () => {
    const resp = await commerce.products.list();

    setProducts(resp.data);
  }

  //fetch cart from commerce API
  const cartFetch = async () => {
    const response = await commerce.cart.retrieve();

    setCart(response)
  }

  //add item to cart
  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart)
  }

  //remove item from cart

  const removeFromCart = async (productId) => {
    const remove = await commerce.cart.remove(productId)

    setCart(remove.cart)
  }

  //empty cart
  const emptyCart = async (productId, quantity) => {
    const empty = await commerce.cart.empty();

    setCart(empty.cart);
  }

  //update quantity
  const updateQuantity = async (productId, quantity) => {
    const update = await commerce.cart.update(productId, { quantity });

    setCart(update.cart)
  }

  useEffect(() => {
    productFetch();
    cartFetch();
  }, [])
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="klader" element={<Main data={data[0]} name="klader" media={media} products={products} addToCart={addToCart}/>} />
            <Route path="souvenir" element={<Main data={data[0]} name="souvenir" media={media} products={products} />} />
            <Route path="ovrigt" element={<Main data={data[0]} name="ovrigt" media={media} products={products} />}/>
            <Route path="kontakta-oss" element={<KontaktaOss />} />
            <Route path="varukorg" 
               element={<CartView 
                data={data[0]} 
                name="varukorg" 
                products={products} 
                cart={cart}
                emptyCart={emptyCart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                />}
             />
             <Route path="utcheckning" element={<Checkout data={data[0]} name="utcheckning"/>} />
        </Routes>
    </Router>
    </>      
    
  );
}

export default App;
