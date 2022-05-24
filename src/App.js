import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';

//components
import Home from './components/Home/Home';
import KontaktaOss from './components/kontakta-oss/kontaktaOss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

// data information
import data from "../src/assets/json/data.json";
import media from '../src/assets/js/import.js';
import { commerce } from './lib/commerce/commerce.js';






function App() {
  const [products, setProducts] = useState([]);

  const productFetch = async () => {
    const resp = await commerce.products.list();

    setProducts(resp.data);
  }

  useEffect(() => {
    productFetch();
  }, [])
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="klader" element={<Main data={data[0]} name="klader" media={media} products={products}/>} />
            <Route path="souvenir" element={<Main data={data[0]} name="souvenir" media={media} products={products} />} />
            <Route path="ovrigt" element={<Main data={data[0]} name="ovrigt" media={media} products={products} />}/>
            <Route path="kontakta-oss" element={<KontaktaOss />} />
        </Routes>
    </Router>
    </>      
    
  );
}

export default App;
